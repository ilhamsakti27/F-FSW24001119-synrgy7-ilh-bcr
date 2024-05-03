// activate custom select
if (typeof require !== 'undefined') {
  var customSelect = require("custom-select").default;
  require("./../../node_modules/custom-select/build/custom-select.css");
  // require("./../../node_modules/custom-select/build/custom-select.css");
}
const mySelects = customSelect("select");

// hidden submit indicator
let isPickupTimeFilled = false;
let isDatePicker = false;
let isDriverTypeFilled = false;

function checkInputs(input1, input2, input3) {
  // Periksa apakah semua input telah terisi
  if (input1 && input2 && input3) {
    submitButton.disabled = false; // Meng-enable tombol jika semua kondisi terpenuhi
  } else {
    submitButton.disabled = true;  // Tetap disable jika salah satu belum terpenuhi
  }
}

// fill input driver type with user input
function selectDriverType(type) {
  // Set the value of the hidden input based on the selection
  const driverTypeInput = document.getElementById('driverType');
  driverTypeInput.value = type;
  isDriverTypeFilled = true;
  checkInputs(isDriverTypeFilled, isDatePicker, isPickupTimeFilled);

  // Change the button text to reflect the current selection
  const dropdownMenuButton = document.getElementById('dropdownMenuButton');
  dropdownMenuButton.innerHTML = `
  ${type}
  <img class="float-end chevron-icon" src="./images/fi_chevron-down.svg" alt="icon dropdown">
  `;
  dropdownMenuButton.classList.add('dropdown--border--selected');
}

// Function to be called when class changes on the <ul> element
function onClassChange(mutations) {
  mutations.forEach(mutation => {
    if (mutation.attributeName === "class") {
      let targetElement = mutation.target;
      let chevronImage = document.querySelector('.chevron-icon');
      if (targetElement.classList.contains('show')) {
        // If the 'show' class is present, set the chevron to 'up'
        chevronImage.src = "./images/fi_chevron-up.svg";
      } else {
        // If the 'show' class is not present, set the chevron to 'down'
        chevronImage.src = "./images/fi_chevron-down.svg";
      }
    }
  });
}

// Select the <ul> element you want to observe
let ulElementToObserve = document.querySelector('.dropdown-menu');
// Create a new MutationObserver instance
let observer = new MutationObserver(onClassChange);
// Configuration of the observer:
let config = { attributes: true, attributeFilter: ['class'] };
// Start observing the specified element
observer.observe(ulElementToObserve, config);
// Optionally, stop observing later with observer.disconnect();


// fill input Pick-up Time with user input
function selectPickupTime(type) {
  // Set the value of the hidden input based on the selection
  document.getElementById('pickupTime').value = type;
  isPickupTimeFilled = true;
  checkInputs(isDriverTypeFilled, isDatePicker, isPickupTimeFilled);

  // Change the button text to reflect the current selection
  const dropdownMenuButton = document.getElementById('dropdownMenuButtonPickupTime');
  dropdownMenuButton.innerHTML = `
  ${type} WIB
  <img class="float-end chevron-icon" src="./images/fi_chevron-down.svg" alt="icon dropdown">
  `;
  dropdownMenuButton.classList.add('dropdown--border--selected');
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('findCarForm');
  const driverType = document.getElementById('driverType');
  const datePicker = document.getElementById('datePicker');
  const pickupTime = document.getElementById('pickupTime');
  const passengerCount = document.getElementById('passengerCount');
  const submitButton = document.getElementById('submitButton'); 

  // Event listener untuk ketiga input
  // driverType.addEventListener('change', checkInputs);
  // pickupTime.addEventListener('change', checkInputs);
  datePicker.addEventListener('change', () => {
    isDatePicker = true;
    checkInputs(isDriverTypeFilled, isDatePicker, isPickupTimeFilled);
    const datePickerContainer = document.getElementById('datePickerContainer');
    datePickerContainer.classList.add('dropdown--border--selected');
    datePicker.style.color = 'black';
  });
  passengerCount.addEventListener('change', () => {
    const passengerCountContainer = document.getElementById('passengerCountContainer');
    passengerCountContainer.classList.add('dropdown--border--selected');
    passengerCount.style.color = 'black';
  })

  // liistener input form
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    // remove overlay
    const overlay = document.querySelector('#overlay')
    overlay.classList.remove('overlay')

    // ubah ke bentuk tipe datetime
    const rentDateTime = new Date(datePicker.value + 'T' + pickupTime.value.replace(/\./g, ':'));

    // request
    const parameter = {
      driverType :driverType.value,
      rentDateTime: rentDateTime,
      passengerCount: passengerCount.value
    };

    console.log(parameter);
    const app = new App();
    app.clear();
    app.init(parameter).then(app.run);
  });


});