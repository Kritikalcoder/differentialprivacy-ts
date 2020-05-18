"use strict";
exports.__esModule = true;
exports.PerturbationMechanism = exports.StatusCode = void 0;
/**
 * Status code for results returns by pertubation addNoise method
 */
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SuccessfullyPerturbed"] = 0] = "SuccessfullyPerturbed";
    StatusCode[StatusCode["PrivacyBudgetExceeded"] = 1] = "PrivacyBudgetExceeded";
    StatusCode[StatusCode["OutOfRange"] = 2] = "OutOfRange";
    StatusCode[StatusCode["Error"] = 3] = "Error";
})(StatusCode || (StatusCode = {}));
exports.StatusCode = StatusCode;
// Common public interface for perturbation mechanisms
// note that delta is not included as it is typically private
var PerturbationMechanism = /** @class */ (function () {
    function PerturbationMechanism() {
    }
    Object.defineProperty(PerturbationMechanism.prototype, "Epsilon", {
        // privacy budget, implemetation should set sensible default
        get: function () {
            return this._epsilon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerturbationMechanism.prototype, "CurrentStatus", {
        get: function () {
            return this._currentStatus;
        },
        enumerable: false,
        configurable: true
    });
    return PerturbationMechanism;
}());
exports.PerturbationMechanism = PerturbationMechanism;
