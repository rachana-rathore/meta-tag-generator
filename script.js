function generateTags() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  const keywords = document.getElementById("keywords").value;
  const url = document.getElementById("url").value;

  const metaTags = `
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="keywords" content="${keywords}">

<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${url}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${desc}">
`;

  document.getElementById("output").textContent = metaTags;
}

function copyTags() {
  const text = document.getElementById("output").textContent;
  navigator.clipboard.writeText(text);
  alert("Meta tags copied!");
}