import { random } from 'lodash';

export interface IDualColorBallResult {
  /** 红球 6 个数字，范围 [1,33] */
  red: [number, number, number, number, number, number];
  /** 蓝球 1 个数字，范围 [1,16] */
  blue: [number];
}

/** 生成一组双色球 */
export function createDualColorBallResult(): IDualColorBallResult {
  const result: IDualColorBallResult = {
    red: [-1, -1, -1, -1, -1, -1],
    blue: [-1],
  };

  for (let i = 0; i < 6; ) {
    const newRedNumber = random(1, 33);
    if (result.red.includes(newRedNumber)) {
      continue;
    }
    result.red[i] = newRedNumber;
    i++;
  }
  result.red = result.red.sort((a, b) => a - b);

  result.blue[0] = random(1, 16);

  return result;
}
