iconSvg = `
<svg class="zen-media-icon" width="28" height="28" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="zen-media-mask">
      <rect x="-10" y="-10" width="148" height="148" fill="white" />
      <g class="zen-media-front-card" transform="translate(78.827, 77.737) translate(-46.27, -36.445)">
        <rect x="0" y="0" width="92.539" height="72.891" rx="12.812" fill="black" />
      </g>
    </mask>
    <linearGradient gradientUnits="userSpaceOnUse" x1="64" y1="0" x2="64" y2="128" id="zen-media-grad-back">
      <stop offset="0" style="stop-color: rgb(255, 255, 255)"/>
      <stop offset="1" style="stop-color: rgb(0, 0, 0)"/>
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" x1="64" y1="0" x2="64" y2="128" id="zen-media-grad-front">
      <stop offset="0" style="stop-color: rgb(255, 255, 255)"/>
      <stop offset="1" style="stop-color: rgb(0, 0, 0)"/>
    </linearGradient>
  </defs>
  <!--Back card (rect)-->
  <g class="zen-media-back-wrapper" mask="url(#zen-media-mask)">
    <g class="zen-media-back-card" transform="translate(54.799, 57.743) rotate(-7) translate(-46.27, -36.445)">
      <rect class="zen-media-bg" x="3.55" y="3.55" width="85.439" height="65.791" rx="9.262" 
            style="fill: var(--zen-folder-front-bgcolor); fill-opacity: 0;" />
      <rect class="zen-media-gradient" x="3.55" y="3.55" width="85.439" height="65.791" rx="9.262" 
            style="fill: url(#zen-media-grad-back); fill-opacity: 0;" />
      <rect class="zen-media-border" x="3.55" y="3.55" width="85.439" height="65.791" rx="9.262" 
            style="fill: none; stroke: var(--zen-folder-stroke); stroke-width: 7.1px;" />
    </g>
  </g>
  <!--Front card (rect)-->
  <g class="zen-media-front-card" transform="translate(78.827, 77.737) translate(-46.27, -36.445)">
    <rect class="zen-media-bg" x="3.55" y="3.55" width="85.439" height="65.791" rx="9.262" 
          style="fill: var(--zen-folder-front-bgcolor); fill-opacity: 0;" />
    <rect class="zen-media-gradient" x="3.55" y="3.55" width="85.439" height="65.791" rx="9.262" 
          style="fill: url(#zen-media-grad-front); fill-opacity: 0;" />
    <!--Mountain (path)-->
    <g class="zen-media-mountain" transform="translate(0.289, 32.609)">
      <path class="zen-media-mountain-path" d="M7.432 21.147 L17.865 12.11 C19.665 10.596 21.373 9.862 23.173 9.862 C25.158 9.862 27.005 10.596 28.805 12.202 L36.191 18.853 L54.84 2.431 C56.779 0.734 58.81 0 61.072 0 C63.334 0 65.55 0.826 67.35 2.477 L84.568 18.67 L92 25.78 C92 35.23 87.153 40 77.551 40 L14.495 40 C4.801 40 0 35.275 0 25.78 Z" 
            style="fill: var(--zen-folder-stroke);" />
    </g>
    <rect class="zen-media-border" x="3.55" y="3.55" width="85.439" height="65.791" rx="9.262" 
          style="fill: none; stroke: var(--zen-folder-stroke); stroke-width: 7.1px;" />
  </g>
  <!--Sun (circle)-->
  <g class="zen-media-sun" transform="translate(64.76, 67.886) translate(-9.914, -9.984)">
    <circle class="zen-media-sun-path" cx="9.914" cy="9.984" r="9.914" 
            style="fill: var(--zen-folder-stroke);" />
  </g>
</svg>`