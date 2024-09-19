export class Job {
  constructor(data) {
    this.id = data.id;
    this.company = data.company;
    this.jobTitle = data.jobTitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
    this.creatorId = data.creatorId;
    this.creator = data.creator;
  }
}
