import {CanBo} from "../CanBo";


export class NhanVien extends CanBo {
    private _work: string;
    private _id: number;


    constructor(name: string, age: number, gender: string, address: string, work: string, id: number) {
        super(name, age, gender, address);
        this._work = work;
        this._id = id;
    }

    get work(): string {
        return this._work;
    }

    get id(): number {
        return this._id;
    }
}
