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
document.getElementById('findCarForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form dari submit ke server secara default

  const driverType = document.getElementById('driverType').value;
  const datePicker = document.getElementById('datePicker').value;
  const pickupTime = document.getElementById('pickupTime').value;
  const passengerCount = document.getElementById('passengerCount').value;

  // if (driverType === "" || datePicker === "" || pickupTime === "") {
  //   alert("Silakan pilih isi semua input sebelum mengirim form.");
  //   return; // Menghentikan fungsi jika tipe driver tidak dipilih
  // }

  console.log(`
  Tipe Driver: ${driverType}
  Tanggal Jemput: ${datePicker}
  Waktu Jemput: ${pickupTime}
  Jumlah Penumppang: ${passengerCount}
  `);
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('findCarForm');
  form.addEventListener('input', function () {
    const driverType = document.getElementById('driverType').value;
    const datePicker = document.getElementById('datePicker').value;
    const pickupTime = document.getElementById('pickupTime').value;
    const submitButton = document.querySelector('.btn__submit');

    console.log(`
      driver type: ${driverType}
      date picker: ${datePicker}
      pickup time: ${pickupTime}
    `);

    // button will on when driverType && datePicker && pickupTime have been filled
    // if (driverType && datePicker && pickupTime) {
    //   submitButton.disabled = false;
    // } else {
    //   submitButton.disabled = true;
    // }
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const overlay = document.querySelector('#overlay')
    overlay.classList.remove('overlay')
  });

  const driverType = document.getElementById('driverType');
  driverType.addEventListener('change', () => {
    console.log("haii")
  })

});


