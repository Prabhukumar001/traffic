// Ensure the script is executed after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const imageInput = document.querySelector("input[type='file']");
    const previewContainer = document.createElement("div");
    previewContainer.id = "preview-container";
    document.body.insertBefore(previewContainer, document.body.firstChild);

    imageInput.addEventListener("change", function() {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // Clear any previous preview images
                previewContainer.innerHTML = "";

                // Create and display the image preview
                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = "Image Preview";
                img.style.maxWidth = "100%";
                img.style.height = "auto";
                previewContainer.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    });
});

// AJAX Submission (Optional, uncomment if you prefer AJAX submission)
// document.querySelector("form").addEventListener("submit", function(e) {
//     e.preventDefault();
//     const formData = new FormData(this);
    
//     fetch("/", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.querySelector("#result").innerText = `Suggested Signal Time: ${data.signal_time} seconds`;
//     })
//     .catch(error => console.error("Error:", error));
// });
