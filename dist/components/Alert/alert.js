var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
var Alert = function (_a) {
    var _b;
    var alertType = _a.alertType, message = _a.message, description = _a.description, style = _a.style, _c = _a.className, className = _c === void 0 ? '' : _c, restProps = __rest(_a, ["alertType", "message", "description", "style", "className"]);
    // const [closed, setClosed] = React.useState(false);
    // const ref = React.useRef<HTMLElement>();
    var classes = classNames('alert', className, (_b = {},
        _b["alert-" + alertType] = alertType,
        _b));
    return (React.createElement("div", __assign({ className: classes }, restProps),
        React.createElement("span", { className: 'alert-message' }, message),
        React.createElement("span", { className: 'alert-description' }, description)));
};
export default Alert;
