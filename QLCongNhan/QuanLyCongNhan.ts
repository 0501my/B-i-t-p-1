import {CongNhan} from "./CongNhan";

export class QLCongNhan extends CongNhan {
    static DsCongNhan: CongNhan[] = []

    static addCongNhan(congNhan: CongNhan): void {
        QLCongNhan.DsCongNhan.push(congNhan)
    }

    static HtCongNhan(): QLCongNhan[] {
        return this.DsCongNhan
    }


    static SuaCongNhan(name: string, suaCongNhan: CongNhan) {
        let index = this.findCongNhan(name);
        if (index === undefined) {
            console.log('Deo co')
        } else {
            this.DsCongNhan[name] = suaCongNhan;
            console.log('Sửa thành công')
        }
    }

    static findCongNhan(name: string): CongNhan {
        for (let i = 0; i < this.DsCongNhan.length; i++) {
            if (this.DsCongNhan[i].name === name) {
                return this.DsCongNhan[i];
            }
        }
        return undefined;

    }
}