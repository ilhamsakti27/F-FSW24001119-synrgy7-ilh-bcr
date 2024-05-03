function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Binar {
  static populateCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))

      return {
        ...car,
        availableAt,
      };
    })
  }

  // static async listCars(filterParams) {
  //   // Ambil data dari cache atau muat dari sumber eksternal
  //   let cars = await this.fetchCars();

  //   console.log(cars)
  //   console.log(filterParams)
  //   // Terapkan filter
  //   return cars.filter(car => {
  //     const availableDate = new Date(car.availableAt);
  //     const rentalDate = new Date(filterParams.rentDateTime);

  //     // console.log(rentalDate);
  //     return (
  //       // car.type === filterParams.driverType &&
  //       availableDate > rentalDate &&
  //       car.capacity >= filterParams.passengerCount
  //     );
  //   });
  // }

  // static async fetchCars() {
  //   let cachedCarsString = localStorage.getItem("CARS");
  //   let cars;

  //   if (!!cachedCarsString) {
  //     cars = JSON.parse(cachedCarsString);
  //   } else {
  //     const response = await fetch("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
  //     cars = await response.json();
  //     localStorage.setItem("CARS", JSON.stringify(cars));
  //   }

  //   return this.populateCars(cars);
  // }

  static async listCars(filterer) {
    let cars;
    let cachedCarsString = localStorage.getItem("CARS");
    
    if (!!cachedCarsString) {
      const cacheCars = JSON.parse(cachedCarsString);
      cars = this.populateCars(cacheCars);
    } else {
      const response = await fetch(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const body = await response.json();
      cars = this.populateCars(body)
      
      localStorage.setItem("CARS", JSON.stringify(cars));
    }

    // console.log(filterer)
    // console.log(cars)

    // const filterResults = cars.filter(car => {
    //   const availableDate = new Date(car.availableAt);
    //   const rentalDate = new Date(filterer.rentDateTime);

    //   return (
    //     // car.type === filterParams.driverType &&
    //     availableDate > rentalDate &&
    //     car.capacity >= filterer.passengerCount
    //   );
    // });

    if (filterer instanceof Function) {
      console.log("ini di atas lolos")
      return cars.filter(filterer);
    } 

    return cars;
    // return filterResults;
  }
}
