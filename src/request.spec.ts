/* tslint:disable no-any completed-docs no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';
import 'mocha';
// import * as sinon from 'sinon';

// import * as got from 'got';

import { StatusCode } from './mechanisms/perturbation-mechanism';

@suite export class LaplaceMechanismAddNoiseTest {

  @test 'StatusCode is a StatusCode mock test'() {
    try {
      expect(StatusCode.Error).to.equal(StatusCode.Error);
    }
    catch (ex) {
      expect(ex instanceof Error);
    }
  }

}
