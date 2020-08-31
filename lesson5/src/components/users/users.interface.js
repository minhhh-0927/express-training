"use strict";
exports.__esModule = true;
exports.CreateUserDto = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType[UserType["staff"] = 0] = "staff";
    UserType[UserType["superuser"] = 1] = "superuser";
})(UserType = exports.UserType || (exports.UserType = {}));
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
