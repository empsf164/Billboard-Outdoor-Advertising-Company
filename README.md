# AdVantage OOH - Billboard & Outdoor Advertising HTML Template

AdVantage OOH is a premium, enterprise-grade, data-driven static HTML/CSS/JS website template designed for digital billboard operators, transit networks, and media buying agencies.

## Key Features

- **Dark Mode (Primary Experience):** High-contrast dark theme with premium neon accent highlights, toggles to Light Mode dynamically.
- **Persistent Theme Toggle:** Handles system default preferences and saves choices using `localStorage`.
- **Responsive Layout System:** Customized light-weight Bootstrap 5 grid system.
- **Programmatic DOOH Features:** Shows interactive scheduling triggers and data visualizations.
- **Campaign Planner & Booking Estimator:** Dynamic weekly calculator for media buyers.
- **GSAP Animations:** Staggered title triggers and scroll-bound numeric counters.

## Folder Architecture

```
/ (Repository Root)
│
├── index.html
├── home-2.html
├── inventory.html
├── inventory-details.html
├── digital-billboards.html
├── transit-advertising.html
├── case-studies.html
├── case-study-details.html
├── blog.html
├── blog-details.html
├── contact.html
├── login.html
├── signup.html
├── 404.html
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css (Grid System)
│   │   ├── style.css         (Theme Styling & Bases)
│   │   ├── dark.css          (Theme Overrides)
│   │   └── animations.css    (Pulsing Pins & Keyframe Animations)
│   │
│   ├── js/
│   │   ├── main.js           (Calculators & Filter Logic)
│   │   ├── theme-toggle.js   (Immediate Head Toggle IIFE)
│   │   └── animations.js     (GSAP & Fallback Observers)
│   │
│   └── images/               (Categorized Media Assets)
│
└── README.md
```

## Customization

### Typography
Fonts are loaded from Google Fonts in `assets/css/style.css`:
- **Headings:** Space Grotesk
- **Body Text:** Inter

### CSS Properties
Modify global variables inside `:root` in `style.css` (Light Mode) or `dark.css` (Dark Mode) to update colors, radius, and speed transitions instantly.
