import {CanBo} from "../CanBo";

enum Bac {
    lever = 1,
    lever1,
    lever2,
    lever3,
    lever4,
    lever5,
    lever6,
    lever7,
    lever8,
    lever9


}

export class CongNhan extends CanBo {

    private _Bac: Bac;
    private _id : string


    constructor(name: string, age: number, gender: string, address: string, Bac: Bac, id: string) {
        super(name, age, gender, address);
        this._Bac = Bac;
        this._id = id;
    }

    get Bac(): Bac {
        return this._Bac;
    }

    get id(): string {
        return this._id;
    }
}

