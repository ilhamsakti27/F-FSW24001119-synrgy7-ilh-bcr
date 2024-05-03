// activate custom select
if (typeof require !== 'undefined') {
  var customSelect = require("custom-select").default;
  require("./../../node_modules/custom-select/build/custom-select.css");
  // require("./../../node_modules/custom-select/build/custom-select.css");
}
const mySelects = customSelect("select");

// console.log(mySelects);


// fill input driver type with user input
function selectDriverType(type) {
  // Set the value of the hidden input based on the selection
  const driverTypeInput = document.getElementById('driverType');
  driverTypeInput.value = type;
  // Trigger the input event after changing the value
  driverTypeInput.dispatchEvent(new Event('input'));

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

  // Change the button text to reflect the current selection
  const dropdownMenuButton = document.getElementById('dropdownMenuButtonPickupTime');
  dropdownMenuButton.innerHTML = `
  ${type} WIB
  <img class="float-end chevron-icon" src="./images/fi_chevron-down.svg" alt="icon dropdown">
  `;
  dropdownMenuButton.classList.add('dropdown--border--selected');
}




// // Melihat data yang diinputkan user
// document.getElementById('findCarForm').addEventListener('submit', async (event) => {
//   event.preventDefault(); // Mencegah form dari submit ke server secara default

//   const driverType = document.getElementById('driverType').value;
//   const datePicker = document.getElementById('datePicker').value;
//   const pickupTime = document.getElementById('pickupTime').value.replace(/\./g, ':');
//   const passengerCount = document.getElementById('passengerCount').value;

//   const rentDateTime = datePicker + 'T' + pickupTime;

//   // to ensure all input have been filled
//   // if (driverType === "" || datePicker === "" || pickupTime === "") {
//   //   alert("Silakan pilih isi semua input sebelum mengirim form.");
//   //   return; // Menghentikan fungsi jika tipe driver tidak dipilih
//   // }

//   const filterParamCar = {
//     driverType,
//     rentDateTime,
//     passengerCount: parseInt(passengerCount, 10)
//   };

//   const filteredCars = await Binar.listCars(filterParamCar);

//   console.log(`
//   Tipe Driver: ${driverType}
//   Tanggal Jemput: ${datePicker}
//   Waktu Jemput: ${pickupTime}
//   Jumlah Penumppang: ${passengerCount}
//   `);

//   console.log(filteredCars);
//   Car.init(filteredCars);
// });
// const submitButton = document.getElementById('submitButton'); 
// submitButton.disabled = true;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('findCarForm');
  const driverType = document.getElementById('driverType');
  const datePicker = document.getElementById('datePicker');
  const pickupTime = document.getElementById('pickupTime');
  const submitButton = document.getElementById('submitButton'); 
  // submitButton.disabled = true;

  // Fungsi untuk memeriksa semua field dan meng-enable atau disable tombol submit
  function checkInputs() {
    // Periksa apakah semua input telah terisi
    if (driverType.value && datePicker.value && pickupTime.value) {
      submitButton.disabled = false; // Meng-enable tombol jika semua kondisi terpenuhi
    } else {
      submitButton.disabled = true;  // Tetap disable jika salah satu belum terpenuhi
    }
  }

  // Event listener untuk ketiga input
  driverType.addEventListener('change', checkInputs);
  datePicker.addEventListener('change', checkInputs);
  pickupTime.addEventListener('change', checkInputs);

  // form.addEventListener('input', function () {
  //   const driverType = document.getElementById('driverType').value;
  //   const datePicker = document.getElementById('datePicker').value;
  //   const pickupTime = document.getElementById('pickupTime').value;
  //   const submitButton = document.querySelector('.btn__submit');

  //   console.log(`
  //     driver type: ${driverType}
  //     date picker: ${datePicker}
  //     pickup time: ${pickupTime}
  //   `);

  //   // button will on when driverType && datePicker && pickupTime have been filled
  //   if (driverType && datePicker && pickupTime) {
  //     submitButton.disabled = false;
  //   } else {
  //     submitButton.disabled = true;
  //   }
  // });

  // to deactive overlay
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const overlay = document.querySelector('#overlay')
    overlay.classList.remove('overlay')
  });

  
  // Menjalankan fungsi checkInputs sekali saat pertama kali script di-load
  // checkInputs();

});