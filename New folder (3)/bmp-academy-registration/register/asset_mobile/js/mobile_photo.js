// Function to handle file change
// Function to handle file change
function handleLogoChange() {
  const fileInput = document.querySelector(".institute-logo-input");
  const fileNameDisplay = document.getElementById("logo-name");
  const file = fileInput.files[0];
  const eyeIcon = document.getElementById("logo_preview_icon");

  if (file) {
    const fileName = file.name;
    const fileType = file.type.split("/")[0]; // Get the file type

    // Check if the file type is an image
    if (fileType === "image") {
      if (fileName.length > 15) {
        // Truncate the name if it's longer than 15 characters
        const truncatedName = fileName.substring(0, 15) + "...";
        fileNameDisplay.textContent = truncatedName;
      } else {
        fileNameDisplay.textContent = fileName;
      }
    } else {
      // If the selected file is not an image, clear the input
      fileInput.value = ""; // Clear the input value
      fileNameDisplay.textContent = "Please select an image file";
      // You can display an error message or take other actions as needed
    }

    eyeIcon.style.display = "inline-block";
  }else{
    eyeIcon.style.display = "none";
  }
}

function handleBannerChange() {
  const fileInput = document.querySelector(".banner-file-input");
  const fileNameDisplay = document.getElementById("banner-name");
  const eyeIcon = document.getElementById("banner_preview_icon");
  const file = fileInput.files[0];

  if (file) {
    const fileName = file.name;
    const fileType = file.type.split("/")[0]; // Get the file type

    // Check if the file type is an image
    if (fileType === "image") {
      if (fileName.length > 15) {
        // Truncate the name if it's longer than 15 characters
        const truncatedName = fileName.substring(0, 15) + "...";
        fileNameDisplay.textContent = truncatedName;
      } else {
        fileNameDisplay.textContent = fileName;
      }
    } else {
      // If the selected file is not an image, clear the input
      fileInput.value = ""; // Clear the input value
      fileNameDisplay.textContent = "Please select an image file";
      // You can display an error message or take other actions as needed
    }
    eyeIcon.style.display = "inline-block";
  }else{
    eyeIcon.style.display = "none";
  }
}

// Function to handle preview click
function handleLogoPreviewClick() {
  const fileInput = document.querySelector(".institute-logo-input");
  const imagePreviewModal = document.getElementById("image-preview-modal-1");
  const previewImage = document.getElementById("preview-image-1");
  const body = document.querySelector("body");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(fileInput.files[0]);

    // Prevent background scrolling
    body.style.overflow = "hidden";

    imagePreviewModal.style.display = "block";
  }
}


function handleBannerPreviewClick() {
  const fileInput = document.querySelector(".banner-file-input");
  const imagePreviewModal = document.getElementById("image-preview-modal-2");
  const previewImage = document.getElementById("preview-image-2");
  const body = document.querySelector("body");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(fileInput.files[0]);

    // Prevent background scrolling
    body.style.overflow = "hidden";

    imagePreviewModal.style.display = "block";
  }
}

// Function to close the image preview modal
function closeLogoPreview() {
  const imagePreviewModal = document.getElementById("image-preview-modal-1");
  const body = document.querySelector("body");
  imagePreviewModal.classList.add("closing-animation");

  body.style.overflow = "auto";

  // Add a delay to remove the modal after the animation finishes
  setTimeout(() => {
    imagePreviewModal.style.display = "none";
    imagePreviewModal.classList.remove("closing-animation");
  }, 500);
}

function closeBannerPreview() {
  const imagePreviewModal = document.getElementById("image-preview-modal-2");
  const body = document.querySelector("body");
  imagePreviewModal.classList.add("closing-animation");

  body.style.overflow = "auto";

  // Add a delay to remove the modal after the animation finishes
  setTimeout(() => {
    imagePreviewModal.style.display = "none";
    imagePreviewModal.classList.remove("closing-animation");
  }, 500);
}

// multiple image video js

function openFileInput() {
  // Trigger the hidden file input
  document.getElementById("fileInput").click();
}

function handleImageVideoChange() {
  const fileInput = document.getElementById("file-upload");
  const imagePreviews = document.querySelector(".image-previews");
  const videoPreviews = document.querySelector(".video-previews");
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function (event) {
      const fileType = file.type.split("/")[0]; // Get the file type (image or video)

      if (fileType === "image") {
        const previewContainer = document.createElement("div");
        previewContainer.classList.add("mob_img_card");

        const cardFlex = document.createElement("div");
        cardFlex.classList.add("mob_card_flex");

        const cardTop = document.createElement("div");
        cardTop.classList.add("mob_card_top");

        const img = document.createElement("img");
        img.src = "asset_mobile/images/mob_gallery.svg";
        img.alt = "";

        const imageName = document.createElement("p");
        imageName.classList.add("mob_font", "mob_img_name");
        const fileName =
          file.name.length > 15
            ? file.name.substring(0, 15) + "..."
            : file.name;
        imageName.textContent = fileName;

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "asset_mobile/images/mob_delete.svg";
        deleteIcon.alt = "";

        const imgSize = document.createElement("div");
        imgSize.classList.add("mob_img_size");

        const uploadedImg = document.createElement("img");
        uploadedImg.src = event.target.result;
        uploadedImg.alt = "";

        cardTop.appendChild(img);
        cardTop.appendChild(imageName);

        cardFlex.appendChild(cardTop);
        cardFlex.appendChild(deleteIcon);

        imgSize.appendChild(uploadedImg);

        previewContainer.appendChild(cardFlex);
        previewContainer.appendChild(imgSize);

        imagePreviews.appendChild(previewContainer);
      } else if (fileType === "video") {
        // const video = document.createElement("video");
        // video.src = event.target.result;
        // video.setAttribute("controls", "");
        // video.classList.add("preview");

        // imagePreviews.appendChild(video);

        const previewContainer = document.createElement("div");
        previewContainer.classList.add("mob_img_card");

        const cardFlex = document.createElement("div");
        cardFlex.classList.add("mob_card_flex");

        const cardTop = document.createElement("div");
        cardTop.classList.add("mob_card_top");

        const img = document.createElement("img");
        img.src = "asset_mobile/images/mob_gallery.svg";
        img.alt = "";

        const imageName = document.createElement("p");
        imageName.classList.add("mob_font", "mob_img_name");
        const fileName =
          file.name.length > 15
            ? file.name.substring(0, 15) + "..."
            : file.name;
        imageName.textContent = fileName;

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "asset_mobile/images/mob_delete.svg";
        deleteIcon.alt = "";

        const imgSize = document.createElement("div");
        imgSize.classList.add("mob_img_size");

        const uploadVideo = document.createElement("video");
        uploadVideo.src = event.target.result;
        uploadVideo.setAttribute("controls", "");

        cardTop.appendChild(img);
        cardTop.appendChild(imageName);

        cardFlex.appendChild(cardTop);
        cardFlex.appendChild(deleteIcon);

        imgSize.appendChild(uploadVideo);

        previewContainer.appendChild(cardFlex);
        previewContainer.appendChild(imgSize);

        videoPreviews.appendChild(previewContainer);
      }
    };

    reader.readAsDataURL(file); // Read the file as a data URL
  }
}

// multiple image video js ends

