import * as b from "bobril";
import { observable } from "bobx";
import { getData } from "../../API/basic";
//import { getData } from "../../API/basic.production";

export enum Gender {
  male = 0,
  female = 1
}

export class Person {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  genderStr?: string = "";

  constructor(id: string, name: string, age: number, gender: Gender) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

export class PersonStore extends b.BobrilCtx<undefined> {
  @observable
  person = new Person("", "", 0, 0);

  @observable
  private _personsList: Person[] = [];

  @observable
  _alertState: number | null = null;

  constructor() {
    super();
    this.getPersons();
  }

  get persons() {
    return this._personsList.slice();
  }

  get alertState(): number | null {
    return this._alertState;
  }

  set alertState(val: number | null) {
    this._alertState = val;
  }

  getPersons() {
    const data = getData();
    this._personsList.push(...data);
    this._personsList.forEach(person => {
      if (person.gender === 0) {
        person.genderStr = "male";
      } else {
        person.genderStr = "female";
      }
    });
  }
}
