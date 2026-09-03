console.log('=== MAIN.JS IS EXECUTING ===');

// Dynamic Mobile Menu Off-Canvas Drawer Builder
document.addEventListener('DOMContentLoaded', () => {
  const desktopNavLinks = document.querySelector('.nav-links');
  const desktopActions = document.querySelector('.nav-actions');
  const menuToggle = document.getElementById('menu-toggle');

  if (!desktopNavLinks || !menuToggle) return;

  // Create overlay if it doesn't exist
  let overlay = document.querySelector('.mobile-menu-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);
  }

  // Create mobile menu drawer if it doesn't exist
  let drawer = document.querySelector('.mobile-menu');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.className = 'mobile-menu';

    drawer.innerHTML = `
      <div class="mobile-menu-header">
        <a href="index.html" class="logo-link">
          <i class="bi bi-broadcast"></i> AD<span>VANTAGE</span>
        </a>
        <button class="mobile-menu-close" aria-label="Close Menu">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      <div class="mobile-menu-body">
        <nav class="mobile-nav"></nav>
        <div class="mobile-actions"></div>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  const mobileNav = drawer.querySelector('.mobile-nav');
  const mobileActions = drawer.querySelector('.mobile-actions');
  const closeBtn = drawer.querySelector('.mobile-menu-close');

  // Populate navigation links
  if (mobileNav && mobileNav.children.length === 0) {
    Array.from(desktopNavLinks.children).forEach(item => {
      const clonedItem = item.cloneNode(true);
      const link = clonedItem.querySelector('.nav-link');
      const dropdown = clonedItem.querySelector('.nav-dropdown');

      if (link && dropdown) {
        // Dropdown styling and functionality for mobile
        dropdown.className = 'mobile-dropdown-menu';

        // Remove default hover behaviors by toggling on click
        link.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropdown.classList.toggle('open');
          const chevron = link.querySelector('.bi-chevron-down');
          if (chevron) {
            chevron.classList.toggle('bi-chevron-up');
          }
        });
      }
      mobileNav.appendChild(clonedItem);
    });
  }

  // Populate actions (Theme, RTL, and Signup)
  if (mobileActions && mobileActions.children.length === 0 && desktopActions) {
    const themeBtn = desktopActions.querySelector('#theme-toggle-btn');
    const rtlBtn = desktopActions.querySelector('#rtl-toggle-btn');
    const signupBtn = desktopActions.querySelector('a[href="signup.html"]');

    if (themeBtn) {
      const clonedTheme = themeBtn.cloneNode(true);
      clonedTheme.removeAttribute('id'); // Avoid duplicate IDs
      clonedTheme.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
      });
      mobileActions.appendChild(clonedTheme);
    }

    if (rtlBtn) {
      const clonedRtl = rtlBtn.cloneNode(true);
      clonedRtl.removeAttribute('id'); // Avoid duplicate IDs
      clonedRtl.addEventListener('click', () => {
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        if (isRTL) {
          document.documentElement.removeAttribute('dir');
          localStorage.setItem('rtl', 'false');
        } else {
          document.documentElement.setAttribute('dir', 'rtl');
          localStorage.setItem('rtl', 'true');
        }
      });
      mobileActions.appendChild(clonedRtl);
    }

    const loginBtn = desktopActions.querySelector('a[href="login.html"]');

    if (loginBtn) {
      const clonedLogin = loginBtn.cloneNode(true);
      clonedLogin.className = 'btn btn-outline w-100';
      mobileActions.appendChild(clonedLogin);
    }

    if (signupBtn) {
      const clonedSignup = signupBtn.cloneNode(true);
      clonedSignup.className = 'btn btn-highlight w-100';
      mobileActions.appendChild(clonedSignup);
    }
  }

  // Event handlers to open and close the drawer
  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.documentElement.classList.add('menu-open');
    document.body.classList.add('menu-open');
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
  };

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    openDrawer();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  overlay.addEventListener('click', (e) => {
    e.stopPropagation();
    closeDrawer();
  });
});

// Inventory Filter Logic (Runs only on inventory.html)
const filterForm = document.getElementById('inventory-filter-form');
const inventoryGrid = document.getElementById('inventory-catalog-grid');

if (filterForm && inventoryGrid) {
  const filterInputs = filterForm.querySelectorAll('select, input');
  const inventoryItems = inventoryGrid.querySelectorAll('.inventory-card-wrapper');

  filterInputs.forEach(input => {
    input.addEventListener('change', filterCatalog);
    input.addEventListener('keyup', filterCatalog);
  });

  function filterCatalog() {
    const formatVal = document.getElementById('filter-format')?.value || 'all';
    const locationVal = document.getElementById('filter-location')?.value || 'all';
    const budgetVal = document.getElementById('filter-budget')?.value || 'all';
    const searchVal = document.getElementById('filter-search')?.value.toLowerCase() || '';

    inventoryItems.forEach(item => {
      const itemFormat = item.getAttribute('data-format');
      const itemLocation = item.getAttribute('data-location');
      const itemCost = parseInt(item.getAttribute('data-cost') || '0');
      const itemTitle = item.querySelector('.item-title')?.textContent.toLowerCase() || '';

      let matchFormat = (formatVal === 'all' || itemFormat === formatVal);
      let matchLocation = (locationVal === 'all' || itemLocation === locationVal);

      let matchBudget = true;
      if (budgetVal !== 'all') {
        const budgetLimits = budgetVal.split('-');
        const min = parseInt(budgetLimits[0]);
        const max = parseInt(budgetLimits[1]);
        if (itemCost < min || itemCost > max) {
          matchBudget = false;
        }
      }

      let matchSearch = (searchVal === '' || itemTitle.includes(searchVal));

      if (matchFormat && matchLocation && matchBudget && matchSearch) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

// Campaign Booking Planner Calculator (Runs on inventory-details.html)
const calcDuration = document.getElementById('calc-duration');
const calcFormat = document.getElementById('calc-format');
const calcReachDetails = document.getElementById('calc-reach');
const calcPrice = document.getElementById('calc-total-price');

if (calcDuration && calcFormat && calcReachDetails && calcPrice) {
  const basePrices = {
    'digital-bulletin': 4500,
    'bulletin': 2200,
    'urban-screen': 5500,
    'bus-shelter': 850
  };

  const multiplierDailyReach = {
    'digital-bulletin': 85000,
    'bulletin': 52000,
    'urban-screen': 110000,
    'bus-shelter': 12000
  };

  function updateCalculator() {
    const selectedFormat = calcFormat.value;
    const durationWeeks = parseInt(calcDuration.value);

    const weeklyCost = basePrices[selectedFormat] || 1000;
    const totalCost = weeklyCost * durationWeeks;
    const dailyReach = multiplierDailyReach[selectedFormat] || 10000;
    const totalImpressions = dailyReach * 7 * durationWeeks;

    // Update values
    calcPrice.textContent = '$' + totalCost.toLocaleString();
    calcReachDetails.textContent = totalImpressions.toLocaleString() + ' Impressions';
  }

  calcDuration.addEventListener('input', updateCalculator);
  calcFormat.addEventListener('change', updateCalculator);
  updateCalculator();
}

// Interactive Live Inventory booking popup simulator
const bookingForm = document.getElementById('details-booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const notification = document.createElement('div');
    notification.className = 'booking-success-notification glass-panel';
    notification.innerHTML = `
        <div style="padding: 1.5rem; text-align: center;">
          <h4 style="color: var(--accent-color); margin-bottom: 0.5rem;"><i class="bi bi-check-circle-fill"></i> Booking Request Submitted</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">Your campaign proposal request has been logged. Our account team will contact you in 2 hours with availability.</p>
        </div>
      `;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.width = '320px';
    notification.style.borderRadius = 'var(--card-radius)';

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => notification.remove(), 500);
    }, 5000);

    bookingForm.reset();
  });
}

// Contact / RFQ Form Validator
const contactForm = document.getElementById('rfq-contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your Media Campaign Plan request has been received. One of our OOH strategists will call you shortly.');
    contactForm.reset();
  });
}

// Interactive map locations select trigger
const mapHotspots = document.querySelectorAll('.map-hotspot-card');
const coordinateDisplay = document.getElementById('current-coordinate-span');
const googleMapIframe = document.getElementById('google-map-iframe');

if (mapHotspots.length > 0 && coordinateDisplay) {
  mapHotspots.forEach(card => {
    card.addEventListener('click', () => {
      mapHotspots.forEach(c => c.classList.remove('active-spot'));
      card.classList.add('active-spot');
      const coords = card.getAttribute('data-coords') || '34.0522, -118.2437';
      coordinateDisplay.textContent = coords;

      // Dynamically update the Google Map address URL
      const mapUrl = card.getAttribute('data-map-url');
      if (mapUrl && googleMapIframe) {
        googleMapIframe.src = mapUrl;
      }
    });
  });
}

// Interactive ROI & Media Campaign Estimator
const budgetSlider = document.getElementById('budget-slider');
const durationSlider = document.getElementById('duration-slider');
const budgetValue = document.getElementById('budget-value');
const durationValue = document.getElementById('duration-value');
const calcViews = document.getElementById('calc-views');
const calcReach = document.getElementById('calc-reach');
const calcCPM = document.getElementById('calc-cpm');
const pkgTitle = document.getElementById('pkg-title');
const pkgDesc = document.getElementById('pkg-desc');
const pkgLink = document.getElementById('pkg-link');

// Specs checklist elements
const specLiftIcon = document.getElementById('spec-lift-icon');
const specLiftText = document.getElementById('spec-lift-text');
const specTriggerIcon = document.getElementById('spec-trigger-icon');
const specTriggerText = document.getElementById('spec-trigger-text');

if (budgetSlider && durationSlider && budgetValue && durationValue && calcViews && calcReach && calcCPM && pkgTitle && pkgDesc && pkgLink) {
  function calculateROIEstimator() {
    const weeklyBudget = parseInt(budgetSlider.value);
    const weeks = parseInt(durationSlider.value);
    const totalBudget = weeklyBudget * weeks;

    // CPM ranges from $24 at $500 weekly to $14 at $10000 weekly
    const cpm = 24 - ((weeklyBudget - 500) / 9500) * 10;

    // Total impressions is based on budget divided by CPM (times 1000)
    const weeklyImpressions = (weeklyBudget / cpm) * 1000;
    const totalImpressions = weeklyImpressions * weeks;

    // Reach calculation reaches up to 92% based on weekly impressions
    const reachPercentage = Math.min(92, Math.round((weeklyImpressions / 160000) * 92));

    // Update text views
    budgetValue.textContent = '$' + weeklyBudget.toLocaleString();
    durationValue.textContent = weeks + (weeks === 1 ? ' Week' : ' Weeks');

    // Format total views (impressions)
    if (totalImpressions >= 1000000) {
      calcViews.textContent = (totalImpressions / 1000000).toFixed(2) + 'M';
    } else {
      calcViews.textContent = Math.round(totalImpressions / 1000).toLocaleString() + 'K';
    }

    calcReach.textContent = reachPercentage + '%';
    calcCPM.textContent = '$' + cpm.toFixed(2);

    // Dynamically update Specs Checklist
    if (specLiftIcon && specLiftText) {
      if (weeklyBudget >= 1500) {
        specLiftIcon.className = "bi bi-check-circle-fill";
        specLiftIcon.style.color = "#10B981"; // Success Green
        specLiftText.textContent = "Geofencing & Conversion Lift Study";
        specLiftText.style.color = "var(--text-primary)";
      } else {
        specLiftIcon.className = "bi bi-x-circle-fill";
        specLiftIcon.style.color = "var(--text-muted)";
        specLiftText.textContent = "Geofencing & Conversion Lift Study (Requires $1,500+)";
        specLiftText.style.color = "var(--text-secondary)";
      }
    }

    if (specTriggerIcon && specTriggerText) {
      if (weeklyBudget >= 4000) {
        specTriggerIcon.className = "bi bi-check-circle-fill";
        specTriggerIcon.style.color = "#10B981"; // Success Green
        specTriggerText.textContent = "Dynamic Creative Weather Triggers";
        specTriggerText.style.color = "var(--text-primary)";
      } else {
        specTriggerIcon.className = "bi bi-x-circle-fill";
        specTriggerIcon.style.color = "var(--text-muted)";
        specTriggerText.textContent = "Dynamic Creative Weather Triggers (Requires $4,000+)";
        specTriggerText.style.color = "var(--text-secondary)";
      }
    }

    // Package recommendation logic
    if (weeklyBudget < 1500) {
      pkgTitle.textContent = "Subway & Transit Shelters";
      pkgDesc.textContent = "Double-sided street shelter panel displays capturing high foot-traffic in commercial retail hubs.";
      pkgLink.href = "contact.html?pkg=transit";
    } else if (weeklyBudget < 4000) {
      pkgTitle.textContent = "Expressway Interchange Bulletin";
      pkgDesc.textContent = "Premium roadside highway bulletin display frames capturing morning and evening rush-hour lanes.";
      pkgLink.href = "contact.html?pkg=expressway";
    } else {
      pkgTitle.textContent = "Sunset Blvd Digital LED Screen";
      pkgDesc.textContent = "Super-premium large-format digital LED display overlooking high-traffic pedestrian hotspots.";
      pkgLink.href = "contact.html?pkg=digital-led";
    }
  }

  budgetSlider.addEventListener('input', calculateROIEstimator);
  durationSlider.addEventListener('input', calculateROIEstimator);

  // Initial run
  calculateROIEstimator();
}

// Password Visibility Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.password-toggle-btn');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const wrapper = button.closest('.password-wrapper');
      if (!wrapper) return;
      
      const input = wrapper.querySelector('input');
      const icon = button.querySelector('i');
      if (input && icon) {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        
        // Toggle icon classes
        icon.classList.toggle('bi-eye', !isPassword);
        icon.classList.toggle('bi-eye-slash', isPassword);
        
        // Update aria-label for accessibility
        button.setAttribute(
          'aria-label',
          isPassword ? 'Hide password' : 'Show password'
        );
      }
    });
  });
});
