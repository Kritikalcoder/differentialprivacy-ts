
/**
 * Status code for results returns by pertubation addNoise method
 */
enum StatusCode {
    SuccessfullyPerturbed, // Noise added successfully
    PrivacyBudgetExceeded, // Privacy budget exceeded
    OutOfRange, // exceeded bounds
    Error, // unknown error occurred
}

type Result<T> = T | StatusCode;

// Common public interface for perturbation mechanisms
// note that delta is not included as it is typically private
abstract class PerturbationMechanism<T extends number> {

  // privacy budget, implemetation should set sensible default
  get Epsilon(): number {
    return this._epsilon;
  }

  get CurrentStatus(): StatusCode {
    return this._currentStatus;
  }

  protected readonly _epsilon: number;
  protected readonly _delta: number;
  protected readonly _currentStatus: StatusCode;

  abstract addNoise(sensitivity: number, queryResult: T): Result<T>;
  protected abstract getLowerBounds(): number;
  protected abstract getUpperBounds(): number;
}

export { StatusCode, Result, PerturbationMechanism };
