
export class CanBo{
    private _name : string;
    private _age : number;
    private _gender : string;
    private _address : string


    constructor(name: string, age: number, gender: string, address: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._address = address;
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    get gender(): string {
        return this._gender;
    }

    get address(): string {
        return this._address;
    }
}