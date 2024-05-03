class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init(params) {
    await this.load(params);

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    // this.submitButton.onclick = this.run;
    // this.findCarForm.onsubmit = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load(params) {
    // console.log(`Isi parameternya: ${params.rentDateTime}`);
    const { driverType, rentDateTime, passengerCount} = params
    const cars = await Binar.listCars(car => {
      return (
        car.availableAt >= rentDateTime && 
        car.capacity >= passengerCount
      )
    });
    // console.log(cars);
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
