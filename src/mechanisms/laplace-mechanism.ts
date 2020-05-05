import {
  Result,
  StatusCode,
  PerturbationMechanism,
} from './perturbation-mechanism';

class LaplaceMechanism<T extends number> extends PerturbationMechanism<T> {

  get Epsilon(): number {
    return this._epsilon;
  }

  get CurrentStatus(): StatusCode {
    return this._currentStatus;
  }

  protected readonly _delta: number;
  protected readonly _epsilon: number;
  protected readonly _currentStatus: StatusCode;

  constructor() {
    super();
    this._epsilon = 0.3; // Kritika to very this
    this._delta = 0;

  }

  addNoise(sensitivity: number, queryResult: T): Result<T> {
    // 1) sample from laplace distribution
    // 2) add that noise to the query result
    // 3) calculate upper and lower bounds
    // 4) check if bounds exceeded. if bounds are exceeded return StatusCode.OutOfRange
    // 5) if bounds not exceeded:
    // 5.1) set CurrentStatus to SuccessfullyPerturbed
    // 5.2) update privacy budget
    // 5.3) if privacy budget exceeded set CurrentStatus to RunOutOfBudget and return that value
    // 5.4) return result

    return StatusCode.Error;
  }

  // Ria to research best approach
  protected getLowerBounds = (): number => {
    return 0;
  }

  // Ria to research best approach
  protected getUpperBounds = (): number => {
    return 0;
  }
}

export { LaplaceMechanism };
