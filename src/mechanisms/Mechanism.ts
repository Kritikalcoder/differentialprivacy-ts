interface NumbericalMechanism<T extends Number> {
  Epsilon: Number
  Delta: Number
  UpperBounds(): T
  LowerBounds(): T

  // need to figure out how to model sensitivity accross mechanisms
  // to be discussed with Ria/Kritika

  //returns remaining privacy budget
  AddNoise(result: T, privacyBudget: Number): Number
}

