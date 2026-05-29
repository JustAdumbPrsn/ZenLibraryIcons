iconSvg = `
<svg class="zen-spaces-icon" width="28" height="28" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="zen-spaces-mask">
      <rect x="-10" y="-10" width="148" height="148" fill="white" />
      <g class="zen-spaces-front-card" style="transform-origin: 0 0; transform: translate(77.02px, 75.93px) rotate(0deg) translate(-35.022px, -44.68px);">
        <rect x="0" y="0" width="70.04" height="89.36" rx="14" fill="black" />
      </g>
    </mask>
    <linearGradient gradientUnits="userSpaceOnUse" x1="64" y1="20" x2="64" y2="148" id="zen-spaces-grad-back">
      <stop offset="0" style="stop-color: rgb(255, 255, 255)"/>
      <stop offset="1" style="stop-color: rgb(0, 0, 0)"/>
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" x1="64" y1="20" x2="64" y2="148" id="zen-spaces-grad-front">
      <stop offset="0" style="stop-color: rgb(255, 255, 255)"/>
      <stop offset="1" style="stop-color: rgb(0, 0, 0)"/>
    </linearGradient>
  </defs>
  <!--Back Card (rect)-->
  <g class="zen-spaces-back-wrapper" mask="url(#zen-spaces-mask)">
    <g class="zen-spaces-back-card" style="transform-origin: 0 0; transform: translate(51.28px, 61.69px) rotate(-17.5deg) translate(-35.022px, -44.68px);">
      <rect class="zen-spaces-bg" x="3.55" y="3.55" width="62.94" height="82.26" rx="10.45" 
            style="fill: var(--zen-folder-front-bgcolor); fill-opacity: 0;" />
      <rect class="zen-spaces-gradient" x="3.55" y="3.55" width="62.94" height="82.26" rx="10.45" 
            style="fill: url(#zen-spaces-grad-back); fill-opacity: 0;" />
      <rect class="zen-spaces-border" x="3.55" y="3.55" width="62.94" height="82.26" rx="10.45" 
            style="fill: none; stroke: var(--zen-folder-stroke); stroke-width: 7.1px;" />
    </g>
  </g>
  <!--Front Card (rect)-->
  <g class="zen-spaces-front-card" style="transform-origin: 0 0; transform: translate(77.02px, 75.93px) rotate(0deg) translate(-35.022px, -44.68px);">
    <rect class="zen-spaces-bg" x="3.55" y="3.55" width="62.94" height="82.26" rx="10.45" 
          style="fill: var(--zen-folder-front-bgcolor); fill-opacity: 0;" />
    <rect class="zen-spaces-gradient" x="3.55" y="3.55" width="62.94" height="82.26" rx="10.45" 
          style="fill: url(#zen-spaces-grad-front); fill-opacity: 0;" />
    <rect class="zen-spaces-border" x="3.55" y="3.55" width="62.94" height="82.26" rx="10.45" 
          style="fill: none; stroke: var(--zen-folder-stroke); stroke-width: 7.1px;" />
  </g>
</svg>`