class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private keyPerson: Key) {}

  getKey(): Key {
    return this.keyPerson;
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
  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.keyHouse.getSignature()) {
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
