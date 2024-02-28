class Key {
  private signature: number;

  getSignature(): number {
    this.signature = Math.random();
    console.log(this.signature);
    return this.signature;
  }
}

class Person {
  constructor(private keyPerson: Key) {}

  getKey() {
    return this.keyPerson.getSignature();
  }
}

abstract class House {
  public tenants: Person[] = [];
  public door: boolean = false;
  constructor(protected keyHouse: Key) {}

  comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
  public abstract openDoor(key: number): void;
}

class MyHouse extends House {
  public openDoor(key): void {
    if (key === this.keyHouse.getSignature) {
      this.door = true;
    }
    this.door = false;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
