document.addEventListener('DOMContentLoaded', () => {
  // Page loader removal
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 400);
  }

  // Check if GSAP is loaded
  if (typeof gsap !== 'undefined') {
    // Add active class to all elements immediately so their base state is opacity: 1
    // Clear transitions to avoid conflicts with GSAP frame updates
    document.querySelectorAll('.fade-up-init').forEach(item => {
      item.style.transition = 'none';
      item.classList.add('fade-up-active');
    });

    // Hero stagger animations
    gsap.from('.hero-title > *', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.5
    });

    gsap.from('.hero-subtitle', {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.8
    });

    gsap.from('.hero-actions > *', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 1.0
    });

    // Also animate any other fade-up-init elements in the hero (like images, forms, cards)
    gsap.from('.hero-sec .card.fade-up-init, .hero-sec .glass-panel.fade-up-init', {
      duration: 1.2,
      y: 40,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.7
    });

    // Metric stats counting effect
    gsap.utils.toArray('.stat-number').forEach(stat => {
      const targetValue = parseFloat(stat.getAttribute('data-value'));
      const isPercent = stat.textContent.includes('%');
      const isM = stat.textContent.includes('M') || stat.textContent.includes('m');
      const isK = stat.textContent.includes('K') || stat.textContent.includes('k');
      const isPlus = stat.textContent.includes('+');
      
      const countObj = { value: 0 };
      gsap.to(countObj, {
        value: targetValue,
        duration: 2,
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%'
        },
        onUpdate: () => {
          let suffix = '';
          if (isPercent) suffix = '%';
          else if (isM) suffix = 'M';
          else if (isK) suffix = 'K';
          if (isPlus) suffix += '+';
          
          const formattedVal = (targetValue % 1 !== 0) ? countObj.value.toFixed(1) : Math.floor(countObj.value);
          stat.textContent = formattedVal + suffix;
        }
      });
    });
  } else {
    // Fallback: Custom IntersectionObserver for scrolling reveal
    const fadeUpItems = document.querySelectorAll('.fade-up-init');
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeUpItems.forEach(item => {
      observer.observe(item);
    });

    // Static counter fallback
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      let suffix = '';
      if (stat.textContent.includes('%')) suffix = '%';
      else if (stat.textContent.includes('M') || stat.textContent.includes('m')) suffix = 'M';
      else if (stat.textContent.includes('K') || stat.textContent.includes('k')) suffix = 'K';
      if (stat.textContent.includes('+')) suffix += '+';
      
      stat.textContent = stat.getAttribute('data-value') + suffix;
    });
  }
});
