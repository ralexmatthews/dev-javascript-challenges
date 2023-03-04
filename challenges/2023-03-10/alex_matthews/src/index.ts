import testCasesJson from "../test_cases.json";
import { getWaterVolume as getWaterVolumeR } from "./reduce";
import { getWaterVolume as getWaterVolumeF } from "./for_loop";

type TestCase = {
  walls: number[];
  answer: number;
};

const testCases: TestCase[] = testCasesJson;

testCases.forEach(({ walls, answer }) => {
  const resultR = getWaterVolumeR(walls);
  const resultF = getWaterVolumeF(walls);

  if (resultR !== answer) {
    throw new Error(`REDUCE FAIL: ${resultR} !== ${answer}`);
  }

  if (resultF !== answer) {
    throw new Error(`FOR_LOOP FAIL: ${resultF} !== ${answer}`);
  }
});

console.log("All tests passed!");
