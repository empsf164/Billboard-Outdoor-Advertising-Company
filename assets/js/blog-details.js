document.addEventListener('DOMContentLoaded', () => {
  // Detailed article content data store
  const articlesData = {
    "1": {
      title: "How to Plan & Buy Your First OOH Billboard Flight",
      category: "Media Buying Guide",
      author: "Marcus Vance (Media Strategist)",
      date: "June 12, 2026",
      readTime: "6 Min Read",
      image: "assets/images/blog/blog-1.jpg",
      description: "A complete walkthrough on evaluating outdoor advertising coordinates, reading daily impressions data, and setting flight bounds.",
      body: `
        <p style="margin-bottom: 1.25rem;">
          Out-of-home (OOH) advertising remains one of the most resilient offline channels. Unlike digital web ads which can be skipped or blocked by software blockers, a large-format highway bulletin or digital city-center LED display guarantees physical visibility.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">1. Establish Your Demographics Coordinates</h3>
        <p style="margin-bottom: 1.25rem;">
          Before allocating budgets, map out where your target consumers dwell. If you are launching a business software application, focus on airport terminal arrival areas or transit stops surrounding city business hubs. If launching a consumer retail line, focus on high-traffic street shelters.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">2. Define Flight Duration Limits</h3>
        <p style="margin-bottom: 1.25rem;">
          OOH campaigns are measured in "flights", which typically run in 4-week cycles (e.g., 4, 8, or 12 weeks). Programmatic digital media offers more flexible flights, allowing brands to bid on hourly cycles or swap creative assets based on local dayparting parameters.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">3. Evaluate Commuter Traffic Indices</h3>
        <p style="margin-bottom: 1.25rem;">
          Look at Daily Effective Circulation (DEC) or modern Weekly Impression counts to determine the cost-efficiency (CPM) of each placement. A high-DEC expressway billboard might seem expensive upfront but can offer a remarkably low CPM of under $2.00 due to mass commuter exposure.
        </p>
      `
    },
    "2": {
      title: "Why Programmatic DOOH is Replacing Outdated Print Panels",
      category: "Industry Trends",
      author: "Elena Rostova (Digital Specialist)",
      date: "June 08, 2026",
      readTime: "5 Min Read",
      image: "assets/images/blog/blog-2.jpg",
      description: "Discover how automated bidding platforms and dayparting triggers allow smaller brands to target prime billboard spots.",
      body: `
        <p style="margin-bottom: 1.25rem;">
          The outdoor advertising landscape is undergoing a massive shift. Traditional static paper bulletins, which require manual printing, scheduling, and physical adhesive application, are rapidly giving way to Programmatic Digital Out-of-Home (pDOOH).
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">1. Automated Bidding and Flexibilities</h3>
        <p style="margin-bottom: 1.25rem;">
          With pDOOH, advertisers no longer need to sign multi-month contracts for a single location. Modern advertising platforms allow programmatic real-time bidding (RTB) on inventory loops, allowing brands of all sizes to purchase dynamic slot rotations.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">2. Dynamic Creative Scheduling</h3>
        <p style="margin-bottom: 1.25rem;">
          pDOOH screens let you schedule ads based on dayparting parameters. A food-delivery app can run breakfast-themed creatives from 7 AM to 10 AM, and switch to late-night snacking offers after 9 PM. This dramatically minimizes ad fatigue and maximizes messaging relevance.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">3. Drastic Reduction in Prep Overhead</h3>
        <p style="margin-bottom: 1.25rem;">
          Because digital uploads are near-instant, creative changes take minutes rather than weeks. This eliminates heavy vinyl printing fees, shipping logistics, and physical labor installation charges, saving advertising budgets for pure campaign reach.
        </p>
      `
    },
    "3": {
      title: "Designing Billboard Graphics for High-Speed Readability",
      category: "Creative Design",
      author: "Nate Hall (Creative Director)",
      date: "June 04, 2026",
      readTime: "4 Min Read",
      image: "assets/images/blog/blog-3.jpg",
      description: "Essential rules for billboard layouts: maximizing color contrast, choosing bold typography, and shortening text limits.",
      body: `
        <p style="margin-bottom: 1.25rem;">
          A billboard is not a magazine page. When a driver is commuting at 65 mph, your creative copy only has between 3 to 5 seconds to capture attention, convey a message, and establish brand recall. Designing for high-speed readability requires a specific creative discipline.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">1. The Golden Rule of Seven Words</h3>
        <p style="margin-bottom: 1.25rem;">
          Keep your messaging short and punchy. Aim for a maximum of seven words in your primary headline. If the copy is too long, high-speed commuters will simply scan right past it without registering your brand name or call-to-action.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">2. Contrast and Bold Typography</h3>
        <p style="margin-bottom: 1.25rem;">
          Use stark, highly contrasting colors. A bright yellow background with black bold text, or dark navy panels with clean white lettering are easily legible from great distances. Avoid delicate serif fonts or complex thin typography; choose bold, clean sans-serif layouts.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">3. Single Focal Point Layouts</h3>
        <p style="margin-bottom: 1.25rem;">
          A great billboard contains three basic components: one high-impact image, one clear headline copy, and one prominent brand logo. Trying to pack social icons, phone numbers, and physical directions onto a single display board will create clutter and destroy visual impact.
        </p>
      `
    },
    "4": {
      title: "How to Measure ROI in Out-of-Home Campaign Flights",
      category: "Media Buying Strategy",
      author: "Sarah Jenkins (Lead Analyst)",
      date: "May 28, 2026",
      readTime: "7 Min Read",
      image: "assets/images/blog/blog-4.png",
      description: "Explore quantitative tracking methodologies like geofencing lift studies, website traffic attribution, and unique promo code redemptions.",
      body: `
        <p style="margin-bottom: 1.25rem;">
          The biggest criticism of traditional out-of-home advertising has historically been the difficulty in tracking performance. However, with modern location data, geofencing, and digital tracking tools, OOH campaigns can be measured with quantitative precision.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">1. Mobile Geofencing Lift Studies</h3>
        <p style="margin-bottom: 1.25rem;">
          By mapping a virtual geofence around your physical billboard coordinates, our attribution dashboard logs which mobile advertising IDs passed through the display's visual field. We then track if those same IDs later visited your website or storefront, establishing clean foot-traffic lift metrics.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">2. Localized Search Traffic Attribution</h3>
        <p style="margin-bottom: 1.25rem;">
          When running a regional OOH flight (for example, in Chicago), you can measure performance by monitoring the lift in organic brand queries, localized search volumes, and website sessions originating from that metropolitan area compared to a baseline control city.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">3. Custom Promo Codes and UTM Subdomains</h3>
        <p style="margin-bottom: 1.25rem;">
          An extremely effective way to measure immediate responses is displaying short, memorable custom promo codes (e.g., 'SAVE50') or unique target redirect subdomains (e.g., 'nyc.brandname.com') exclusive to specific billboard locations.
        </p>
      `
    },
    "5": {
      title: "Transit Advertising Tactics: Subway Panels vs. Airport Wraps",
      category: "Airport & Transit Media",
      author: "David Kim (Transit Director)",
      date: "May 20, 2026",
      readTime: "6 Min Read",
      image: "assets/images/blog/blog-5.png",
      description: "Compare static subway platform displays against high-visibility airport jet bridge wraps to select the correct placement for your brand.",
      body: `
        <p style="margin-bottom: 1.25rem;">
          Transit advertising offers a powerful benefit: exceptionally high dwell times. Unlike highway commuters who speed past a roadside bulletin in seconds, subway commuters and airport travelers spend long periods waiting, resulting in prolonged brand exposure.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">1. Subway Platforms and Transit Shelters</h3>
        <p style="margin-bottom: 1.25rem;">
          Subway poster panels and digital transit shelter displays target local city commuters. With average platform wait times ranging between 5 to 8 minutes, you can design cards containing more detailed textual information and interactive QR codes to drive active mobile signups.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">2. Premium Airport Jet Bridge Wraps</h3>
        <p style="margin-bottom: 1.25rem;">
          Airport advertising represents a highly premium segment. Jet bridge wraps and terminal arrival walkway lightboxes place your campaign directly in front of business travelers, tourists, and corporate decision-makers with high disposable income and purchase intent.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">3. Choosing the Right Format For Your Campaign</h3>
        <p style="margin-bottom: 1.25rem;">
          Select subway placements to drive mass local retail engagement, app installations, and daily consumer reach. Select airport networks when aiming to position your brand as an enterprise industry leader or when running high-ticket B2B software promotions.
        </p>
      `
    },
    "6": {
      title: "Dynamic Creative Optimization: Real-Time Weather Triggers",
      category: "Programmatic DOOH",
      author: "Marcus Vance (Media Strategist)",
      date: "May 15, 2026",
      readTime: "5 Min Read",
      image: "assets/images/blog/blog-6.png",
      description: "Discover how modern digital billboards automatically adapt their creative content based on localized real-time weather feeds and temperatures.",
      body: `
        <p style="margin-bottom: 1.25rem;">
          Contextual relevance is the holy grail of effective advertising. With programmatic digital billboards, brands are no longer limited to a single static design. Through API-triggered content scheduling, creatives adapt to localized environmental conditions.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">1. The Power of Local Weather Feeds</h3>
        <p style="margin-bottom: 1.25rem;">
          By connecting OOH player software to live weather APIs, campaigns can immediately trigger specific creative variants. An apparel brand can display rain jackets and boots when local weather updates report rain, and switch to sunglasses and t-shirts on clear sunny afternoons.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">2. Temperature-Driven Promotion Rules</h3>
        <p style="margin-bottom: 1.25rem;">
          Beverage companies leverage weather triggers to maximize impulse purchases. When the temperature exceeds 85°F, ads automatically shift to cold refreshments or iced coffee. Conversely, on winter mornings, hot beverage creatives are prioritised to capture morning queues.
        </p>
        <h3 style="color: var(--text-primary); font-family: var(--font-heading); margin: 2rem 0 1rem 0;">3. Seamless API Operations and Budget Optimization</h3>
        <p style="margin-bottom: 1.25rem;">
          This real-time responsiveness ensures that your OOH media spend is never wasted on irrelevant messaging. Advertisers set automated rule criteria in the display platform dashboard, driving contextually perfect reach and significantly higher conversions.
        </p>
      `
    }
  };

  // Get URL Query Parameters
  const urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id');

  // Fallback to post 1 if ID is missing or invalid
  if (!id || !articlesData[id]) {
    id = "1";
  }

  const article = articlesData[id];

  // Map data to HTML page elements
  const categoryElem = document.getElementById('post-category');
  const titleElem = document.getElementById('post-title');
  const authorElem = document.getElementById('post-author');
  const dateElem = document.getElementById('post-date');
  const readTimeElem = document.getElementById('post-readtime');
  const imageElem = document.getElementById('post-image');
  const bodyElem = document.getElementById('post-body');

  if (categoryElem) categoryElem.textContent = article.category;
  if (titleElem) titleElem.textContent = article.title;
  if (imageElem) {
    imageElem.src = article.image;
    imageElem.alt = article.title;
  }
  
  if (authorElem) authorElem.innerHTML = `<i class="bi bi-person"></i> By ${article.author}`;
  if (dateElem) dateElem.innerHTML = `<i class="bi bi-calendar"></i> ${article.date}`;
  if (readTimeElem) readTimeElem.innerHTML = `<i class="bi bi-clock"></i> ${article.readTime}`;
  
  if (bodyElem) {
    bodyElem.innerHTML = article.body;
  }

  // Dynamically update document title & meta tags for SEO
  document.title = `AdVantage OOH | ${article.title}`;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', article.description);
  }
});
