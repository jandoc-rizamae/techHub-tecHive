// JavaScript: Stop the image at the top of the footer
window.addEventListener("scroll", function () {
  const image = document.getElementById("promo-image");
  const footer = document.querySelector("footer"); // Ensure this targets your footer

  const footerRect = footer.getBoundingClientRect();
  const imageRect = image.getBoundingClientRect();

  // Check if the image is about to reach the footer's top
  if (footerRect.top <= window.innerHeight - imageRect.height - 20) {
    // Stop the image at the top of the footer
    image.classList.add("stuck");
    image.style.top = `${footerRect.top + window.scrollY - imageRect.height - 20}px`;
  } else {
    // Keep it fixed at the bottom right
    image.classList.remove("stuck");
    image.style.top = "auto";
  }
});
