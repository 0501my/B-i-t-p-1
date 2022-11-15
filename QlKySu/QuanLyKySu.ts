import {KySu} from "./KySu";
import {CongNhan} from "../QLCongNhan/CongNhan";

export class QLKySu {
    static DsKySu: KySu[] = []

    static addKySu(KySu: KySu): void {
        QLKySu.DsKySu.push(KySu)
    }

    static HtKySu(): QLKySu {
        return this.DsKySu
    }

    static SuaKySu(name: string, suaKySu: KySu) {
        let index = this.findKySu(name);
        if (index === undefined) {
            console.log('Deo co')
        } else {
            this.DsKySu[name] = suaKySu;
            console.log('Sửa thành công')
        }
    }
    static findKySu(name: string): KySu {
        for (let i = 0; i < this.DsKySu.length; i++) {
            if (this.DsKySu[i].name === name) {
                return this.DsKySu[i];
            }
        }
        return undefined;

    }
}