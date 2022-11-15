"use strict";
exports.__esModule = true;
exports.CanBo = void 0;
var CanBo = /** @class */ (function () {
    function CanBo(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    Object.defineProperty(CanBo.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanBo.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanBo.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        enumerable: false,
        configurable: true
    });
    return CanBo;
}());
exports.CanBo = CanBo;
