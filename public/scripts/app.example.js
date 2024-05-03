class App {
  constructor() {
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init(params) {
    await this.load(params);
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load(params) {
    const { driverType, rentDateTime, passengerCount} = params
    const cars = await Binar.listCars(car => {
      return (
        car.driverType === driverType &&
        car.availableAt >= rentDateTime && 
        car.capacity >= passengerCount
      )
    });
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
