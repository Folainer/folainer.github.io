const playIcon = `<svg 
width="274px" height="314px" class="svg1">
<defs>
<filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="274px" height="314px"  >
   <feOffset in="SourceAlpha" dx="0" dy="3" />
   <feGaussianBlur result="blurOut" stdDeviation="2.646" />
   <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
   <feComposite operator="atop" in="floodOut" in2="blurOut" />
   <feComponentTransfer><feFuncA type="linear" slope="0.35"/></feComponentTransfer>
   <feMerge>
   <feMergeNode/>
   <feMergeNode in="SourceGraphic"/>
 </feMerge>
</filter>

</defs>
<g filter="url(#Filter_0)">
<path title="Enter" class="playIcon" fill-rule="evenodd"  fill="#e3e3e3"
d="M266.402,153.092 L6.411,303.095 L6.411,3.089 L266.402,153.092 Z"/>
</g>
</svg>`;
const retry = `
<svg class="retry"
viewBox="0 0 489.935 489.935" style="enable-background:new 0 0 489.935 489.935;" xml:space="preserve">
<g>
	<path d="M278.235,33.267c-116.7,0-211.6,95-211.6,211.7v0.7l-41.9-63.1c-4.1-6.2-12.5-7.9-18.7-3.8c-6.2,4.1-7.9,12.5-3.8,18.7
		l60.8,91.5c2.2,3.3,5.7,5.4,9.6,5.9c0.6,0.1,1.1,0.1,1.7,0.1c3.3,0,6.5-1.2,9-3.5l84.5-76.1c5.5-5,6-13.5,1-19.1
		c-5-5.5-13.5-6-19.1-1l-56.1,50.7v-1c0-101.9,82.8-184.7,184.6-184.7s184.7,82.8,184.7,184.7s-82.8,184.7-184.6,184.7
		c-49.3,0-95.7-19.2-130.5-54.1c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1c40,40,93.1,62,149.6,62
		c116.6,0,211.6-94.9,211.6-211.7S394.935,33.267,278.235,33.267z"/>
</g>
</svg>
`
