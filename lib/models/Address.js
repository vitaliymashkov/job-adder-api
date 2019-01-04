class Address {
  constructor(model) {
    this.street = model.street;
    this.city = model.city;
    this.state = model.state;
    this.postalCode = model.postalCode;
    this.country = model.country;
    this.countryCode = model.countryCode;
  }
}

module.exports = Address;
