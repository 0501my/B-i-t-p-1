import {CanBo} from "../CanBo";

export class KySu extends CanBo{
    private _traIng: string
    private _id : string


    constructor(name: string, age: number, gender: string, address: string, traIng: string, id: string) {
        super(name, age, gender, address);
        this._traIng = traIng;
        this._id = id;
    }

    get traIng(): string {
        return this._traIng;
    }

    get id(): string {
        return this._id;
    }
}
