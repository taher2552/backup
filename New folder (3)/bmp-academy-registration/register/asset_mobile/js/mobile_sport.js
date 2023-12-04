// academy registration sports page js

const sportsSelect = document.getElementById("sportsSelect");
const selectedSportsDiv = document.getElementById("selectedSports");

sportsSelect.addEventListener("change", function () {
  const selectedSport = this.value;
  if (selectedSport !== "") {
    const option = this.querySelector(`option[value="${selectedSport}"]`);
    const selectedText = option.textContent;

    // Create a new blue div
    const blueDiv = document.createElement("div");
    blueDiv.classList.add("sports_blue");
    blueDiv.innerHTML = `
            <p class="mob_font">${selectedText}</p>
            <p class="mob_font removeSport">X</p>
        `;

    // Append the blue div to the selectedSportsDiv
    selectedSportsDiv.appendChild(blueDiv);

    // Remove the selected option from the dropdown
    option.remove();

    // Add click event to remove the selected sport when 'X' is clicked
    const removeButton = blueDiv.querySelector(".removeSport");
    removeButton.addEventListener("click", function () {
      // Add the sport back to the dropdown
      const newOption = document.createElement("option");
      newOption.value = selectedSport;
      newOption.textContent = selectedText;
      sportsSelect.appendChild(newOption);

      // Remove the blue div from the selectedSportsDiv
      blueDiv.remove();
    });
  }
});

// academy registration sports page js ends
