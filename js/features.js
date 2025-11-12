// features.js — 輔助功能：輪播、偶像搜尋
(function(){
  /* Enhanced Carousel with Progress Bar */
  function initCarousel(){
    const car = document.querySelector('.carousel');
    if(!car) return;
    const track = car.querySelector('.carousel-track');
    const slides = Array.from(car.querySelectorAll('.slide'));
    const prev = car.querySelector('.carousel-btn.prev');
    const next = car.querySelector('.carousel-btn.next');
    const dots = car.querySelector('.carousel-dots');
    const progressBar = car.querySelector('.carousel-progress-bar');
    
    let idx = 0;
    let timer = null;
    let progressTimer = null;
    let isTransitioning = false;
    let isPaused = false;
    const AUTO_PLAY_INTERVAL = 5000; // 5 秒自動播放

    function render(){
      if(isTransitioning) return;
      isTransitioning = true;
      
      const width = car.clientWidth;
      track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';
      track.style.transform = `translateX(${ -idx * width }px)`;
      
      setTimeout(() => {
        isTransitioning = false;
      }, 600);
      
      // dots
      dots.innerHTML = '';
      slides.forEach((s,i)=>{
        const d = document.createElement('button');
        d.className = 'dot' + (i===idx ? ' active':'');
        d.setAttribute('aria-label', `到第 ${i+1} 張`);
        d.setAttribute('aria-current', i===idx ? 'true' : 'false');
        d.addEventListener('click', ()=>{ go(i); reset(); });
        dots.appendChild(d);
      });
      
      // 更新 aria-live 區域
      const currentSlide = slides[idx];
      const mvTitle = currentSlide.querySelector('.mv-info-bar h3');
      if(mvTitle && track) {
        const artist = mvTitle.textContent;
        const song = currentSlide.querySelector('.mv-info-bar p')?.textContent || '';
        track.setAttribute('aria-label', `第 ${idx + 1} 張，共 ${slides.length} 張：${artist} - ${song}`);
      }
      
      // 重置進度條
      resetProgress();
    }

    function go(i){ 
      if(isTransitioning) return;
      idx = (i + slides.length) % slides.length; 
      render(); 
    }
    
    function nextSlide(){ go(idx+1); }
    function prevSlide(){ go(idx-1); }
    
    // 進度條動畫
    function resetProgress() {
      if (!progressBar) return;
      
      // 清除現有計時器
      if (progressTimer) {
        clearInterval(progressTimer);
      }
      
      // 重置進度條
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      
      // 如果暫停中,不啟動進度條
      if (isPaused) return;
      
      // 使用 requestAnimationFrame 確保重置生效
      requestAnimationFrame(() => {
        progressBar.style.transition = `width ${AUTO_PLAY_INTERVAL}ms linear`;
        progressBar.style.width = '100%';
      });
    }
    
    function pauseProgress() {
      if (!progressBar) return;
      isPaused = true;
      car.classList.add('paused');
      
      // 獲取當前進度
      const currentWidth = progressBar.offsetWidth;
      const totalWidth = progressBar.parentElement.offsetWidth;
      const percentage = (currentWidth / totalWidth) * 100;
      
      // 停止動畫
      progressBar.style.transition = 'none';
      progressBar.style.width = percentage + '%';
    }
    
    function resumeProgress() {
      if (!progressBar) return;
      isPaused = false;
      car.classList.remove('paused');
      
      // 獲取剩餘時間
      const currentWidth = parseFloat(progressBar.style.width) || 0;
      const remainingPercentage = 100 - currentWidth;
      const remainingTime = (remainingPercentage / 100) * AUTO_PLAY_INTERVAL;
      
      // 繼續動畫
      progressBar.style.transition = `width ${remainingTime}ms linear`;
      progressBar.style.width = '100%';
    }
    
    function reset(){ 
      clearInterval(timer); 
      timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
      resetProgress();
    }

    // 滑鼠懸停暫停
    car.addEventListener('mouseenter', () => {
      clearInterval(timer);
      pauseProgress();
    });
    
    car.addEventListener('mouseleave', () => {
      if (!document.hidden) {
        timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
        resumeProgress();
      }
    });

    // 鍵盤導航
    car.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowLeft') {
        prevSlide();
        reset();
      } else if(e.key === 'ArrowRight') {
        nextSlide();
        reset();
      }
    });

    window.addEventListener('resize', () => {
      track.style.transition = 'none';
      render();
      setTimeout(() => {
        track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';
      }, 50);
    });
    
    next.addEventListener('click', ()=>{ nextSlide(); reset(); });
    prev.addEventListener('click', ()=>{ prevSlide(); reset(); });

    // touch support with improved UX
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', e=>{ 
      startX = e.touches[0].clientX; 
      currentX = startX;
      isDragging = true;
    }, { passive: true });
    
    track.addEventListener('touchmove', e => {
      if(!isDragging) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });
    
    track.addEventListener('touchend', e=>{ 
      if(!isDragging) return;
      isDragging = false;
      const dx = currentX - startX; 
      if(Math.abs(dx) > 50) {
        if(dx > 0) prevSlide(); 
        else nextSlide(); 
        reset();
      }
    });

    // 初始化
    render();
    timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    resetProgress();
    
    // 暫停在視窗外時
    document.addEventListener('visibilitychange', () => {
      if(document.hidden) {
        clearInterval(timer);
        pauseProgress();
      } else {
        timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
        resumeProgress();
      }
    });
  }

  /* Idols search with better UX */
  function initIdolSearch(){
    const input = document.getElementById('idol-search');
    if(!input) return;
    const cards = Array.from(document.querySelectorAll('.idol-card'));
    const container = document.querySelector('.idols-grid');
    
    let searchTimer = null;
    
    input.addEventListener('input', ()=>{
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        const q = input.value.trim().toLowerCase();
        let visibleCount = 0;
        
        cards.forEach(c=>{
          const name = (c.dataset.name||'').toLowerCase();
          const tags = (c.dataset.tags||'').toLowerCase();
          const text = c.textContent.toLowerCase();
          const match = !q || name.includes(q) || tags.includes(q) || text.includes(q);
          
          if(match) {
            c.style.display = '';
            c.style.animation = 'fadeIn 0.3s ease-out';
            visibleCount++;
          } else {
            c.style.display = 'none';
          }
        });
        
        // 更新 aria-live 區域通知篩選結果
        if(container) {
          if(q && visibleCount === 0) {
            container.setAttribute('aria-label', '沒有找到符合的結果');
          } else if(q) {
            container.setAttribute('aria-label', `找到 ${visibleCount} 個符合的結果`);
          } else {
            container.setAttribute('aria-label', '顯示所有偶像');
          }
        }
      }, 200);
    });
    
    // 清除搜尋的快捷鍵
    input.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') {
        input.value = '';
        input.dispatchEvent(new Event('input'));
      }
    });
  }

  // init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', ()=>{
    initCarousel();
    initIdolSearch();
  });
})();
