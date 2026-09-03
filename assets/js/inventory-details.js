document.addEventListener('DOMContentLoaded', () => {
  // Detailed inventory item content data store
  const inventoryData = {
    "1": {
      title: "Los Angeles Center Digital LED",
      image: "assets/images/hero/hero-main.jpg",
      description: "This high-impact digital billboard sits at the heart of Sunset Boulevard, targeting heavy consumer traffic commuting through high-end dining, retail shopping centers, and entertainment venues.",
      mediaType: "Digital LED Screen",
      dimensions: "14' H x 48' W",
      resolution: "1080p Full HD",
      illumination: "24/7 Backlit LED",
      cycle: "15s Spot / 90s Loop",
      coordinates: "34.0928, -118.3287",
      formatValue: "digital-bulletin",
      demographics: [
        { label: "Age 18 - 34", percentage: 45, color: "var(--accent-color)" },
        { label: "Age 35 - 54", percentage: 38, color: "var(--accent-color)" },
        { label: "Avg Household Income ($75K+)", percentage: 64, color: "var(--highlight-color)" },
        { label: "Daily Car Traffic Volume", percentage: 85, color: "var(--highlight-color)", displayVal: "85,000+" }
      ]
    },
    "2": {
      title: "I-10 Expressway Interchange Panel",
      image: "assets/images/inventory/billboard-highway.png",
      description: "A premium roadside highway bulletin display frames capturing morning and evening rush-hour lanes on Interstate 10, delivering massive reach to regional commuters.",
      mediaType: "Roadside Bulletin",
      dimensions: "14' H x 48' W",
      resolution: "Physical Vinyl (Static)",
      illumination: "Eco-Lit Spotlights",
      cycle: "Continuous / Static",
      coordinates: "34.0322, -118.2837",
      formatValue: "bulletin",
      demographics: [
        { label: "Age 18 - 34", percentage: 35, color: "var(--accent-color)" },
        { label: "Age 35 - 54", percentage: 48, color: "var(--accent-color)" },
        { label: "Avg Household Income ($75K+)", percentage: 58, color: "var(--highlight-color)" },
        { label: "Daily Car Traffic Volume", percentage: 52, color: "var(--highlight-color)", displayVal: "52,000+" }
      ]
    },
    "3": {
      title: "Times Square Subway Gate Shelter",
      image: "assets/images/inventory/transit-bus.png",
      description: "Double-sided street shelter panel displays capturing high foot-traffic adjacent to Broadway theater entrances and Times Square subway gates.",
      mediaType: "Transit Shelter",
      dimensions: "68\" H x 47\" W",
      resolution: "720p Digital LCD",
      illumination: "LED Backlight",
      cycle: "10s Spot / 60s Loop",
      coordinates: "40.7580, -73.9855",
      formatValue: "bus-shelter",
      demographics: [
        { label: "Age 18 - 34", percentage: 52, color: "var(--accent-color)" },
        { label: "Age 35 - 54", percentage: 32, color: "var(--accent-color)" },
        { label: "Avg Household Income ($75K+)", percentage: 50, color: "var(--highlight-color)" },
        { label: "Daily Car Traffic Volume", percentage: 12, color: "var(--highlight-color)", displayVal: "12,000+" }
      ]
    },
    "4": {
      title: "Times Square Center Digital LED",
      image: "assets/images/inventory/billboard-digital.png",
      description: "Super-premium large-format curved LED display overlooking central tourist plazas in Times Square, capturing high-impact visibility and global visual impressions.",
      mediaType: "Digital LED Screen",
      dimensions: "28' H x 60' W",
      resolution: "4K UHD Curved",
      illumination: "High-Nits Dynamic LED",
      cycle: "15s Spot / 90s Loop",
      coordinates: "40.7585, -73.9850",
      formatValue: "urban-screen",
      demographics: [
        { label: "Age 18 - 34", percentage: 48, color: "var(--accent-color)" },
        { label: "Age 35 - 54", percentage: 36, color: "var(--accent-color)" },
        { label: "Avg Household Income ($75K+)", percentage: 60, color: "var(--highlight-color)" },
        { label: "Daily Car Traffic Volume", percentage: 95, color: "var(--highlight-color)", displayVal: "110,000+" }
      ]
    }
  };

  // Get URL Query Parameters
  const urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id');

  // Fallback to item 1 if ID is missing or invalid
  if (!id || !inventoryData[id]) {
    id = "1";
  }

  const item = inventoryData[id];

  // Map text parameters to HTML elements
  const titleElem = document.getElementById('item-title');
  const imageElem = document.getElementById('item-image');
  const descElem = document.getElementById('item-desc');
  const mediaTypeElem = document.getElementById('spec-media-type');
  const dimensionsElem = document.getElementById('spec-dimensions');
  const resolutionElem = document.getElementById('spec-resolution');
  const illuminationElem = document.getElementById('spec-illumination');
  const cycleElem = document.getElementById('spec-cycle');
  const coordinatesElem = document.getElementById('spec-coordinates');

  if (titleElem) titleElem.textContent = item.title;
  if (imageElem) {
    imageElem.src = item.image;
    imageElem.alt = item.title;
  }
  if (descElem) descElem.textContent = item.description;
  if (mediaTypeElem) mediaTypeElem.textContent = item.mediaType;
  if (dimensionsElem) dimensionsElem.textContent = item.dimensions;
  if (resolutionElem) resolutionElem.textContent = item.resolution;
  if (illuminationElem) illuminationElem.textContent = item.illumination;
  if (cycleElem) cycleElem.textContent = item.cycle;
  if (coordinatesElem) coordinatesElem.textContent = item.coordinates;

  // Build demographics progress bars dynamically
  const demographicsContainer = document.getElementById('demographics-card-container');
  if (demographicsContainer) {
    let htmlContent = '<div class="row gy-3">';
    item.demographics.forEach(demo => {
      const displayPercentage = demo.displayVal ? demo.displayVal : demo.percentage + "%";
      htmlContent += `
        <div class="col-sm-6">
          <div class="d-flex justify-content-between mb-1" style="font-size: 0.85rem;">
            <span style="color: var(--text-secondary);">${demo.label}</span>
            <span style="font-weight: 600;">${displayPercentage}</span>
          </div>
          <div style="background-color: var(--border-color); height: 8px; border-radius: 4px; overflow: hidden;">
            <div style="background-color: ${demo.color}; width: ${demo.percentage}%; height: 100%;"></div>
          </div>
        </div>
      `;
    });
    htmlContent += '</div>';
    demographicsContainer.innerHTML = htmlContent;
  }

  // Pre-set the calculator dropdown form based on selection
  const calcFormatDropdown = document.getElementById('calc-format');
  if (calcFormatDropdown) {
    calcFormatDropdown.value = item.formatValue;
    // Dispatch change event to trigger the main.js campaign planner calculation
    calcFormatDropdown.dispatchEvent(new Event('change'));
  }

  // Rewrite document details titles for SEO
  document.title = `AdVantage OOH | ${item.title} Details`;
});
