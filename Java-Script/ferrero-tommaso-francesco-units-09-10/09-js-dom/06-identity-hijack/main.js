// Replace all occurrences of 'Stanford' with 'Berkeley' in text content
function replaceTextContent() {
  const elements = document.querySelectorAll('*');
  elements.forEach(el => {
    if (el.childNodes.length) {
      el.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          if (node.textContent.includes('Stanford')) {
            node.textContent = node.textContent.replace(/Stanford/g, 'Berkeley');
          }
        }
      });
    }
  });

  // Also change the document title
  document.title = document.title.replace(/Stanford/g, 'Berkeley');
}

// Replace Stanford logo with Berkeley logo (assuming <img alt or src contains 'stanford')
function replaceLogos() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.alt.toLowerCase().includes('stanford') || img.src.toLowerCase().includes('stanford')) {
      img.src = 'https://brand.berkeley.edu/wp-content/uploads/2022/06/UC-Berkeley-logo.png'; // Berkeley logo URL
      img.alt = 'Berkeley logo';
    }
  });
}

// Replace Stanford colors (assuming hex: #8C1515 and #820000) with Berkeley blue/gold
function replaceColors() {
  const stanfordColors = ['#8C1515', '#820000'];
  const berkeleyBlue = '#003262';
  const berkeleyGold = '#FDB515';

  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    const style = getComputedStyle(el);
    if (stanfordColors.includes(style.color)) {
      el.style.color = berkeleyBlue;
    }
    if (stanfordColors.includes(style.backgroundColor)) {
      el.style.backgroundColor = berkeleyGold;
    }
  });
}

// Replace nav links with Berkeley equivalents
function replaceNavLinks() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    if (text.includes('admission')) {
      link.href = 'https://admissions.berkeley.edu';
    } else if (text.includes('academics')) {
      link.href = 'https://academicguide.berkeley.edu';
    } else if (text.includes('research')) {
      link.href = 'https://vcresearch.berkeley.edu';
    } else if (text.includes('about')) {
      link.href = 'https://www.berkeley.edu/about';
    } else {
      link.href = 'https://www.berkeley.edu';
    }
  });
}

// Run all modifications after DOM loads
window.addEventListener('DOMContentLoaded', () => {
  replaceTextContent();
  replaceLogos();
  replaceColors();
  replaceNavLinks();
});
