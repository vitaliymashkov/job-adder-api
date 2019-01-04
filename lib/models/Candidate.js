const AddressModel = require('./Address');
const StatusModel = require('./Status');

class Candidate {
  constructor(model) {
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.email = model.email;
    this.otherEmail = model.otherEmail;
    this.phone = model.phone;
    this.mobile = model.mobile;
    this.contactMethod = model.contactMethod;
    this.salutation = model.salutation;
    this.statusId = model.statusId;
    this.status = new StatusModel(model.status);
    this.rating = model.rating;
    this.source = model.source;
    this.seeking = model.seeking;
    this.social = model.social;
    this.address = new AddressModel(model.address);
    this.skillTags = model.skillTags;
    this.employment = model.employment;
    this.availability = model.availability;
    this.education = model.education;
    this.custom = model.custom;
    this.recruiterUserId = model.recruiterUserId;
    this.summary = model.summary;
    this.recruiters = model.recruiters;
    this.createdBy = model.createdBy;
    this.createdAt = model.createdAt;
    this.updatedBy = model.updatedBy;
    this.updatedAt = model.updatedAt;
    this.partnerActions = model.partnerActions;
    this.statistics = model.statistics;
    this.links = model.links;
  }
}

module.exports = Candidate;
