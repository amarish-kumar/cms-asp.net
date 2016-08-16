"use strict";
function isLoggedin() {
    return !!localStorage.getItem('auth_token');
}
exports.isLoggedin = isLoggedin;
//# sourceMappingURL=logged-in.guard.js.map