

// academy registration address page js

// open and close time js

// Function to generate time options
function generateTimeOptions() {
  const options = [];
  for (let hours = 0; hours < 24; hours++) {
    for (let minutes = 0; minutes < 60; minutes += 30) {
      const hour = hours < 10 ? `0${hours}` : `${hours}`;
      const minute = minutes === 0 ? "00" : `${minutes}`;
      const time = `${hour}:${minute}`;
      options.push(time);
    }
  }
  return options;
}

const timeOptions = generateTimeOptions();
const selectElement = document.getElementById("openingTime");
const selectElement2 = document.getElementById("closingTime");

// Adding time options to the select element
timeOptions.forEach(function (time, index) {
  const option = document.createElement("option");
  const option2 = document.createElement("option");
  option.value = time;
  option.text = time;
  option2.value = time;
  option2.text = time;
  selectElement.appendChild(option);
  selectElement2.appendChild(option2);
});

// always open check box js

const alwaysOpenCheckbox = document.getElementById("alwaysOpenCheckbox");
const timeSelection = document.getElementById("timeSelection");

alwaysOpenCheckbox.addEventListener("change", function () {
  if (this.checked) {
    timeSelection.style.display = "none";
  } else {
    timeSelection.style.display = "flex"; // Or 'block' depending on your layout
  }
});

// always open check box js ends

// open and close time js ends




    // address view js 

    const addManuallyCheckbox = document.getElementById('addManuallyCheckbox');
const citySearchContainer = document.getElementById('citySearchContainer');
const manualAddressInput = document.getElementById('manualAddressInput');

addManuallyCheckbox.addEventListener('change', function() {
    if (this.checked) {
        manualAddressInput.style.display = 'block';
        citySearchContainer.style.display = 'none';
    } else {
        manualAddressInput.style.display = 'none';
        citySearchContainer.style.display = 'flex';
    }
});


    // address view js ends


    // google api for address js 

    $(document).ready(function () {
    
    // Create a new Autocomplete object
    var autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('city_box'), {
        types: ['address'],
        componentRestrictions: { country: ["ind"] },

    });

    // Add an event listener to the search input field
    autocomplete.addListener('place_changed', function () {
        // Get the place result from the Autocomplete object
        var place = autocomplete.getPlace();

        console.log(place)

        // Extract the place name from the result
        var name = place.name;

        $("#pincode1").val(name)


    });



});


    // google api for address js ends

// academy registration address page js ends
