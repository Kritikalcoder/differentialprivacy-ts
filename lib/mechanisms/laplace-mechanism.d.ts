import { Result, StatusCode, PerturbationMechanism } from './perturbation-mechanism';
declare class LaplaceMechanism<T extends number> extends PerturbationMechanism<T> {
    readonly Epsilon: number;
    readonly CurrentStatus: StatusCode;
    protected readonly _delta: number;
    protected readonly _epsilon: number;
    protected readonly _currentStatus: StatusCode;
    constructor();
    addNoise(sensitivity: number, queryResult: T): Result<T>;
    protected getLowerBounds: () => number;
    protected getUpperBounds: () => number;
}
export { LaplaceMechanism };
