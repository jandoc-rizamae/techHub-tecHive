document.addEventListener("DOMContentLoaded", function() {
    const largeImage = document.getElementById("largeImage");  // Main large image
    const smallImages = document.querySelectorAll(".small-img"); // Collection of small images

    // Check if elements are correctly selected
    console.log("Large image element:", largeImage);
    console.log("Small images:", smallImages);

    // Function to handle swapping images
    function swapImage(clickedImage) {
        // Save the current large image source
        const tempSrc = largeImage.src;
        
        // Set large image to clicked image source
        largeImage.src = clickedImage.src;
        console.log("Updated large image to:", clickedImage.src); // Log change

        // Update first small image to previous large image source
        if (smallImages[0]) {
            smallImages[0].src = tempSrc;
            console.log("Updated first small image to:", tempSrc); // Log update
        }
    }

    // Attach click event listeners to similar product images
    document.querySelectorAll(".similar-product-img").forEach(img => {
        img.addEventListener("click", function() {
            console.log("Clicked similar product image:", this.src); // Log click
            swapImage(this); // Pass the clicked image to the function
        });
    });
});