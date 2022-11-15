import {NhanVien} from "./NhanVien";
import {CongNhan} from "../QLCongNhan/CongNhan";

export class QLNhanVien {
    static DsNhanVien: NhanVien[] = []

    static addNhanVien(Nhanvien: NhanVien): void {
        QLNhanVien.DsNhanVien.push(Nhanvien)
    }

    static HtNhanVien(): QLNhanVien {
        return this.DsNhanVien
    }


    static SuaNhanVien(name: string, suaNhanVien: NhanVien) {
        let index = this.findNhanVien(name);
        if (index === undefined) {
            console.log('Deo co')
        } else {
            this.DsNhanVien[name] = suaNhanVien;
            console.log('Sửa thành công')
        }
    }
    static findNhanVien(name: string): NhanVien {
        for (let i = 0; i < this.DsNhanVien.length; i++) {
            if (this.DsNhanVien[i].name === name) {
                return this.DsNhanVien[i];
            }
        }
        return undefined;

    }
}