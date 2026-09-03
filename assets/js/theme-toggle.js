(function () {
  // Theme check
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Default is dark mode unless explicitly saved as light
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  // RTL check
  const savedRTL = localStorage.getItem('rtl') === 'true';
  if (savedRTL) {
    document.documentElement.setAttribute('dir', 'rtl');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      let newTheme = 'dark';
      
      if (currentTheme === 'dark') {
        newTheme = 'light';
      }
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Trigger a custom event for other scripts (like animations or charts) to react
      const event = new CustomEvent('themeChanged', { detail: { theme: newTheme } });
      window.dispatchEvent(event);
    });
  }

  const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      if (isRTL) {
        document.documentElement.removeAttribute('dir');
        localStorage.setItem('rtl', 'false');
      } else {
        document.documentElement.setAttribute('dir', 'rtl');
        localStorage.setItem('rtl', 'true');
      }
    });
  }
});
