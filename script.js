console.log('Thanks Steph for an amazing idea - https://www.instagram.com/p/CE4twpLgf1a/');

console.log(
  'Feel free to check out the original developer who gave the idea to make own Link service - github: https://github.com/Vishwajeet8005'
);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-CGPXSTF0RS');

async function handleLinks() {
  const res = await fetch("links.json").then(r => r.json());
  const mainDiv = document.getElementById("links-list");

`
`

$(document).ready(function() {
  handleLinks();
});
