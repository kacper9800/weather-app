export class Station {
  id: string
  name: string;
  ownerName: string;
  location: string;

  constructor(id: string, name: string, ownerName: string, location: string) {
    this.id = id;
    this.name = name;
    this.ownerName = ownerName;
    this.location = location;
  }
}
