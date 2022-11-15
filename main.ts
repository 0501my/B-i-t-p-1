import {CongNhan} from "./QLCongNhan/CongNhan";
import {QLCongNhan} from "./QLCongNhan/QuanLyCongNhan";
import {NhanVien} from "./QlNhanVien/NhanVien";
import {QLNhanVien} from "./QlNhanVien/QuanLyNhanVien";
import {QLKySu} from "./QlKySu/QuanLyKySu";
import {KySu} from "./QlKySu/KySu";

let input = require('readline-sync');
let choice = -1


function main() {
    do {
        showMenu()
        choice = +input.question('lua chon cua ban')
        switch (choice) {
            case 1:
                manageWork();
                break;
            case 2:
                manageEngineer()
                break;
            case 3:
                manageStaff()
                break;
        }
    } while (choice !== 0)
}

// hiển thị menu
function showMenu() {
    let menu = `
    1. quan ly cong nhan
    2. quan ly ky su
    3. quan ly nhan vien
    0. thoat
    `
    console.log(menu)
}

// sửa công nhân
function editWork() {
    let editCongNhan = input.question('Nhap id edit: ')
    console.log(`--------------Sau khi Edit-----------------`)
    let name = input.question('ten: ')
    let age = +input.question('tuoi: ')
    let gender = input.question('gioi tinh: ')
    let bac = input.question('cap do: ')
    let id = input.question('id: ')
    let address = input.question('address: ')
    let congNhan = new CongNhan(name, age, gender, bac, id, address)
    QLCongNhan.SuaCongNhan(editCongNhan, congNhan)
}


// Quản lý lựa chọn
function manageWork() {
    do {
        showMenuWork()
        choice = +input.question("nhap lua chon cua ban: ")
        switch (choice) {
            case 1:
                addWork()
                break;
            case 2:
                display()
                break;
            case 3:
                editWork()
                break;
            case 4:
                findWork()
                break;

        }
    } while (choice !== 0)
}

// hiển thị menu bên trong
function showMenuWork() {
    let menu = `
    1. them cong nhan
    2. hien thi cong nhan
    3. sua cong nhan
    4. tim cong nhan
    0. thoat
    `
    console.log(menu)
}

// thêm công nhân
function addWork() {
    let name = input.question('ten: ')
    let age = input.question('tuoi: ')
    let gender = input.question('gioi tinh: ')
    let bac = input.question('cap do: ')
    let id = input.question('id: ')
    let address = input.question('address: ')
    let congNhan = new CongNhan(name, age, gender, bac, id, address)
    QLCongNhan.addCongNhan(congNhan)

}

// hiển thị công nhân
function display() {
    console.log(`------Sau Khi Thêm-------`)
    console.table(QLCongNhan.HtCongNhan())

}

function findWork() {
    console.log(`---------sau khi tìm------------`)
    let fullName = input.question("nhap ten")
    console.log(QLCongNhan.findCongNhan(fullName))

}

// menu quản lý lựa chọn Nhân viên
function manageStaff() {
    do {
        showMenuStaff()
        choice = +input.question("nhap lua chon cua ban: ")
        switch (choice) {
            case 1:
                addStaff()
                break;
            case 2:
                displayStaff()
                break;
            case 3:
                editStaff()
                break;
            case 4:
                findStaff()
                break;

        }
    } while (choice !== 0)
}

// hiển thị lựa chọn bên trong
function showMenuStaff() {
    let menu = `
    1. them nhan vien
    2. hien thi nhan vien
    3. sua nhan vien
    4. tim nhan vien
    0. thoat
    `
    console.log(menu)
}

// thêm nhân viên
function addStaff() {
    let name = input.question('ten: ')
    let age = input.question('tuoi: ')
    let gender = input.question('gioi tinh: ')
    let bac = input.question('cap do: ')
    let id = input.question('id: ')
    let address = input.question('address: ')
    let nhanVien = new NhanVien(name, age, gender, bac, id, address)
    QLNhanVien.addNhanVien(nhanVien)
}

// sửa nhân viên
function editStaff() {
    let editNhanVien = input.question('Nhap id edit: ')
    console.log(`--------------Sau khi Edit-----------------`)
    let name = input.question('ten: ')
    let age = +input.question('tuoi: ')
    let gender = input.question('gioi tinh: ')
    let bac = input.question('cap do: ')
    let id = input.question('id: ')
    let address = input.question('address: ')
    let nhanVien = new NhanVien(name, age, gender, bac, id, address)
    QLNhanVien.SuaNhanVien(editNhanVien, nhanVien)
}

// hiển thị nhân viên
function displayStaff() {
    console.log(`------Sau Khi Thêm-------`)
    console.table(QLNhanVien.HtNhanVien())
}

// tìm nhân viên
function findStaff() {
    console.log(`---------sau khi tìm`)
    let fullName = input.question("nhap ten")
    console.log(QLNhanVien.findNhanVien(fullName))
}

// các lựa chọn của kỹ sư
function manageEngineer() {
    do {
        showMenuEngineer()
        choice = +input.question("nhap lua chon cua ban: ")
        switch (choice) {
            case 1:
                addEngineer()
                break;
            case 2:
                displayEngineer()
                break;
            case 3:
                editEngineer()
                break;
            case 4:
                findEngineer()
                break;

        }
    } while (choice !== 0)
}

// menu kỹ sư
function showMenuEngineer() {
    let menu = `
    1. them ky su
    2. hien thi ky su
    3. sua ky su
    4. tim ky su
    0. thoat
    `
    console.log(menu)
}

// thêm kỹ sư
function addEngineer() {
    let name = input.question('ten: ')
    let age = input.question('tuoi: ')
    let gender = input.question('gioi tinh: ')
    let bac = input.question('cap do: ')
    let id = input.question('id: ')
    let address = input.question('address: ')
    let kySu = new KySu(name, age, gender, bac, id, address)
    QLKySu.addKySu(kySu)
}

// sửa kỹ sư
function editEngineer() {
    let editKySu = input.question('Nhap id edit: ')
    console.log(`--------------Sau khi Edit-----------------`)
    let name = input.question('ten: ')
    let age = +input.question('tuoi: ')
    let gender = input.question('gioi tinh: ')
    let bac = input.question('cap do: ')
    let id = input.question('id: ')
    let address = input.question('address: ')
    let kySu = new KySu(name, age, gender, bac, id, address)
    QLKySu.SuaKySu(editKySu, kySu)
}

// hiển thị danh sách kỹ sư
function displayEngineer() {
    console.log(`------Sau Khi Thêm-------`)
    console.table(QLKySu.HtKySu())
}

// tìm kỹ sư
function findEngineer() {
    console.log(`---------sau khi tìm`)
    let fullName = input.question("nhap ten")
    console.log(QLKySu.findKySu(fullName))
}


main()


