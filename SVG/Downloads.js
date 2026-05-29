iconSvg = `
<svg class="zen-downloads-icon" width="28" height="28" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient gradientUnits="userSpaceOnUse" x1="64" y1="40" x2="64" y2="168" id="zen-downloads-grad-front">
      <stop offset="0" style="stop-color: rgb(255, 255, 255)"/>
      <stop offset="1" style="stop-color: rgb(0, 0, 0)"/>
    </linearGradient>
  </defs>
  <!--Circle-->
  <g class="zen-downloads-circle-translate" style="transform-origin: 64px 64px;">
    <circle class="zen-downloads-bg" cx="64" cy="64" r="47.5"
            style="fill: var(--zen-folder-front-bgcolor); fill-opacity: 0;" />
    <circle class="zen-downloads-gradient" cx="64" cy="64" r="47.5"
            style="fill: url(#zen-downloads-grad-front); fill-opacity: 0;" />
    <circle class="zen-downloads-border" cx="64" cy="64" r="47.5"
            style="fill: none; stroke: var(--zen-folder-stroke); stroke-width: 7.1px;" />
  </g>
  <!--Arrow (path)-->
  <path class="zen-downloads-arrow" d="M 64 45 L 64 83 M 50 69 L 64 83 L 78 69"
        style="stroke-width: 7.1px; stroke: var(--zen-folder-stroke); fill: none; stroke-linecap: round; stroke-linejoin: round;" />
</svg>`
