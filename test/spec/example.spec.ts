import { Expect, Test, TestCase, TestFixture } from "alsatian";
import {DumbService} from "../../src/services/dumb";

@TestFixture("whatever you'd like to call the fixture")
export class SetOfTests {

    @TestCase(2, 2, 4)
    @TestCase(2, 3, 5)
    @TestCase(3, 3, 6)
    @Test("addition tests")
    public addTest(firstNumber: number, secondNumber: number, expectedSum: number) {
        let service = new DumbService();
        Expect(service.add(firstNumber, secondNumber)).toBe(expectedSum);
    }
}