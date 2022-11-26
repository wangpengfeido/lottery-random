import { isEqual, isInteger, uniq } from 'lodash';
import React, { FC, useRef, useState } from 'react';
import { createDualColorBallResult } from '../dual-colored-ball/create-dual-color-ball-result';

interface IPropsDoTest {
  red: number[];
  blue: number[];
}

const DoTest: FC<IPropsDoTest> = props => {
  const { red, blue } = props;

  const refAnimation = useRef<number>();

  const [n, setN] = useState(0);
  const refDoing = useRef(false);

  /** 开买 */
  const doBuy = (red: number[], blue: number[]) => {
    if (!refDoing.current) {
      return;
    }
    for (let i = 0; i < 1000; i++) {
      const { red: sourceRed, blue: sourceBlue } = createDualColorBallResult();
      setN(prevState => prevState + 1);
      if (isEqual(sourceRed, red) && isEqual(sourceBlue, blue)) {
        refDoing.current = false;
        break;
      }
    }
    refAnimation.current = requestAnimationFrame(() => {
      doBuy(red, blue);
    });
  };

  const handleStartClick = () => {
    if (refAnimation.current) {
      cancelAnimationFrame(refAnimation.current);
    }

    if (
      uniq(red).length !== 6 ||
      red.some(item => !isInteger(item) || item < 1 || item > 33) ||
      uniq(blue).length !== 1 ||
      blue.some(item => !isInteger(item) || item < 1 || item > 16)
    ) {
      alert('输入不合法');
      return;
    }

    const _red = red.sort((a, b) => a - b);
    const _blue = blue.sort((a, b) => a - b);

    setN(0);
    refDoing.current = true;
    doBuy(_red, _blue);
  };

  return (
    <>
      <div>
        <button onClick={handleStartClick}>开始</button>
      </div>
      <hr />
      <div>
        <span>次数：{n}</span>
      </div>
    </>
  );
};

export default React.memo(DoTest);
