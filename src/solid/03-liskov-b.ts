export abstract class Vehicle {
  // getNumberOfSeats():number{
  //   throw Error('method not implemented')
  // }
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle{

  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle{

  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle{
  constructor(private numberOfSeats: number) {
    super();
  }
  
  getNumberOfSeats(): number {
    throw new Error("Method not implemented.");
  }

}

export class Honda extends Vehicle{

  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Ford extends Vehicle{

  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
