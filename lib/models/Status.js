class Status {
  constructor(model) {
    this.statusId = model.statusId;
    this.name = model.name;
    this.active = model.active;
    this.default = model.default;
  }
}

module.exports = Status;
