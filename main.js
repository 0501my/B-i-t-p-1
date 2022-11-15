"use strict";
exports.__esModule = true;
var input = require('readline-sync');
var choice;
function main() {
    do {
        showMenu();
        choice = +input.question('lua chon cua ban');
        switch (choice) {
            case 1:
                manageWork();
        }
    } while (choice !== 0);
}
function showMenu() {
    var menu = "\n    1. quan ly cong nhan\n    2. quan ly ky su\n    3. quan ly nhan vien\n    0. thoat\n    ";
    console.log(menu);
}
function manageWork() {
    do {
        showMenuWork();
        choice = +input.question("nhap lua chon cua ban: ");
    } while (choice !== 0);
}
function showMenuWork() {
    var menu = "\n    1. them\n    2. sua\n    3. xoa\n    4. tim\n    0. thoat\n    ";
    console.log(menu);
}
main();
