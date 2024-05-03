class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card mb-3" style="width: 22rem;">
        <img src="${this.image}" class="card-img-top object-fit-cover" alt="${this.type}" style="height: 12rem;">
        <div class="card-body p-0 mt-3">
          <p class="car-name">${this.type}</p>
          <h5 class="card-title car-price">Rp ${this.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} / hari</h5>
          <p class="card-text">${this.description}</p>
          <div class="card-text">
            <img src="./images/fi_users_light.svg" alt="">
            <span class="ms-2">${this.capacity} orang</span>
          </div>
          <div class="card-text">
            <img src="./images/fi_settings_light.svg" alt="">
            <span class="ms-2">${this.transmission}</span>
          </div>
          <div class="card-text mb-24">
            <img src="./images/fi_calendar_light.svg" alt="">
            <span class="ms-2">Tahun ${this.year}</span>
          </div>
          <button class="btn btn-success w-100 btn__submit" type="submit">Pilih Mobil</button>
        </div>
      </div>
    `;
  }
}
