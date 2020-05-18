"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LaplaceMechanism = void 0;
var perturbation_mechanism_1 = require("./perturbation-mechanism");
var LaplaceMechanism = /** @class */ (function (_super) {
    __extends(LaplaceMechanism, _super);
    function LaplaceMechanism() {
        var _this = _super.call(this) || this;
        _this.exponentialSample = function (mean) {
            return (mean * -1) * Math.log(Math.random());
        };
        // Ria to research best approach
        _this.getLowerBounds = function () {
            return 0;
        };
        // Ria to research best approach
        _this.getUpperBounds = function () {
            return 0;
        };
        _this._epsilon = 0.3; // Kritika to very this
        _this._delta = 0;
        return _this;
    }
    Object.defineProperty(LaplaceMechanism.prototype, "Epsilon", {
        get: function () {
            return this._epsilon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaplaceMechanism.prototype, "CurrentStatus", {
        get: function () {
            return this._currentStatus;
        },
        enumerable: false,
        configurable: true
    });
    LaplaceMechanism.prototype.addNoise = function (sensitivity, queryResult) {
        // 1) sample from laplace distribution
        var noise = this.exponentialSample(sensitivity) - this.exponentialSample(sensitivity);
        // 2) add that noise to the query result
        var result = queryResult + noise;
        // 3) calculate upper and lower bounds
        // 4) check if bounds exceeded. if bounds are exceeded return StatusCode.OutOfRange
        // 5) if bounds not exceeded:
        // 5.1) set CurrentStatus to SuccessfullyPerturbed
        // 5.2) update privacy budget
        // 5.3) if privacy budget exceeded set CurrentStatus to RunOutOfBudget and return that value
        // 5.4) return result
        return perturbation_mechanism_1.StatusCode.Error;
    };
    return LaplaceMechanism;
}(perturbation_mechanism_1.PerturbationMechanism));
exports.LaplaceMechanism = LaplaceMechanism;
