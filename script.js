$(function(){
    $('a').each(function() {
      if ($(this).prop('href') == window.location.href) {
        $(this).addClass('current');
      }
    });
});

// DEBUG: Logo replacement validation
console.log('=== LOGO REPLACEMENT DEBUG ===');
console.log('Current logo src attributes found:');

// Find all img tags with logo references
document.querySelectorAll('img[src*="logo"]').forEach((img, index) => {
    console.log(`Logo ${index + 1}:`, img.src, '- Alt:', img.alt);
});

// Check if the new logo file exists
const testImage = new Image();
testImage.onload = function() {
    console.log('✓ SUCCESS: vertical-v-only-logo.png loads successfully');
    console.log('Image dimensions:', this.width + 'x' + this.height);
};
testImage.onerror = function() {
    console.log('✗ ERROR: vertical-v-only-logo.png failed to load');
};
testImage.src = 'images/vertical-v-only-logo.png';

// Check if old logo file exists
const oldImage = new Image();
oldImage.onload = function() {
    console.log('✓ Old logo-transparent.svg loads successfully');
    console.log('SVG dimensions:', this.width + 'x' + this.height);
};
oldImage.onerror = function() {
    console.log('✗ Old logo-transparent.svg failed to load');
};
oldImage.src = 'images/logo-transparent.svg';

console.log('=== END LOGO DEBUG ===');
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-menu"); 

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));
