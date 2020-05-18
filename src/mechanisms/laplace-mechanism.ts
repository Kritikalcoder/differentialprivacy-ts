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
  protected readonly _privacy_budget: number;
  protected readonly _kMaxOverflowProbability: number;
  protected readonly _kClampFactor: number;
  protected readonly _currentStatus: StatusCode;

  constructor() {
    super();
    this._epsilon = 0.3; // Kritika to very this
    this._delta = 0;
    this._kMaxOverflowProbability = Math.pow(2.0, -64);
    this._kClampFactor = Math.pow(2.0, 39);
    this._privacy_budget = 1.0;
  }

  private exponentialSample = (mean: number): number => {
    return (mean*-1)*Math.log(Math.random())
  }

  private cdf = (scale: number, point: number): number => {
      if (point > 0) {
        return 1 - .5 * Math.exp(-point / scale);
      }
      else {
        return .5 * Math.exp(point / scale);
      }
    }

  // Returns the smallest power of 2 greater than or equal to n. n must be > 0.
  // Includes negative powers.
  private getnextpoweroftwo = (value: number): number => {
    return Math.pow(2.0, Math.ceil(Math.log2(value)));
  }

  // Rounds n to the nearest multiple of base. Ties are broken towards +inf.
  // If base is 0, returns n.
  private roundtonearestmultiple = (n: number, base: number): number => {
    if (base == 0.0) return n;
    let remainder = n % base;
    if (Math.abs(remainder) > base / 2) {
      return n - remainder + Math.sign(remainder) * base;
    }
    if (Math.abs(remainder) == base / 2) {
      return n + base / 2;
    }
    return n - remainder;
  }

  protected getLowerBounds = (): number => {
    if (Number.MIN_VALUE < -this._kClampFactor) {
      return -this._kClampFactor;
    }
    return Number.MIN_VALUE;
  }
  protected getUpperBounds = (): number => {
    if (Number.MAX_VALUE > this._kClampFactor) {
      return this._kClampFactor;
    }
    else {
      return Number.MAX_VALUE;
    }
  }
  protected Clamp = (lower: number, upper: number, value:number): number => {
    if (value > upper) {
      return upper;
    }
    if (value < lower) {
      return lower;
    }
    return value;
  }

  addNoise(sensitivity: number, queryResult: T): Result<T> {
    // 1) sample from laplace distribution
    let noise = this.exponentialSample(sensitivity / this._epsilon)
    // 2) calculate overflow_probability to ensure noise does not overflow
    let diversity =  sensitivity / this._epsilon; //assumption: sensitivity is L1 sensitivity
    let one = 1 - this.cdf(diversity, Number.MAX_VALUE);
    let two = this.cdf(diversity, Number.MIN_VALUE);
    let overflow_probability = one + two;
    // 3) check if overflow_probability exceeded. if overflow_probability is exceeded return StatusCode.NoiseOverflow
    if (overflow_probability >= this._kMaxOverflowProbability) {
      StatusCode.NoiseOverflow;
    }
    // 4) if bounds not exceeded:
    // 5.1) add noise to the query result, and clamp the result
    let initial_result = this.Clamp(this.getLowerBounds(), this.getUpperBounds(), queryResult) + noise;
    let nearest_power = this.getnextpoweroftwo(diversity / this._privacy_budget);
    let rounded_result = this.roundtonearestmultiple(initial_result, nearest_power);
    let final_noised_result = this.Clamp(this.getLowerBounds(), this.getUpperBounds(), rounded_result);
    //TODO: When to return StatusCode.OutOfRange
    // 5.3) set CurrentStatus to SuccessfullyPerturbed
    StatusCode.SuccessfullyPerturbed;
    // 5.4) update privacy budget
    // 5.5) if privacy budget exceeded set CurrentStatus to RunOutOfBudget and return that value
    // 5.6) return result
    return final_noised_result

    return StatusCode.Error;
  }
}
export { LaplaceMechanism };
