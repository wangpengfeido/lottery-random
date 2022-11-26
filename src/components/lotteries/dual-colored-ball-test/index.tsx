import React, { FC, useMemo, useState } from 'react';
import DoTest from './do-test';

interface IPropsDualColoredBallTest {}

const DualColoredBallTest: FC<IPropsDualColoredBallTest> = () => {
  const [redTargets, setRedTargets] = useState<Array<string>>(
    Array.from({ length: 6 }).map(() => ''),
  );
  const [blueTargets, setBlueTargets] = useState<Array<string>>(
    Array.from({ length: 1 }).map(() => ''),
  );

  const redNumbers = useMemo(() => {
    return redTargets
      .map(item => parseInt(item))
      .filter(item => !Number.isNaN(item))
      .sort((a, b) => a - b);
  }, [redTargets]);
  const blueNumbers = useMemo(() => {
    return blueTargets
      .map(item => parseInt(item))
      .filter(item => !Number.isNaN(item))
      .sort((a, b) => a - b);
  }, [blueTargets]);

  return (
    <>
      <div>
        <span>红球：</span>
        {redTargets.map((item, index) => {
          return (
            <input
              key={index}
              type="number"
              value={item}
              onChange={event => {
                setRedTargets(prevState => {
                  const newState = [...prevState];
                  newState[index] = event.target.value;
                  return newState;
                });
              }}
            ></input>
          );
        })}
      </div>
      <div>
        <span>蓝球：</span>
        {blueTargets.map((item, index) => {
          return (
            <input
              key={index}
              type="number"
              value={item}
              onChange={event => {
                setBlueTargets(prevState => {
                  const newState = [...prevState];
                  newState[index] = event.target.value;
                  return newState;
                });
              }}
            ></input>
          );
        })}
      </div>
      <div>
        <DoTest red={redNumbers} blue={blueNumbers}></DoTest>
      </div>
    </>
  );
};

/** 测试买多少期可以中奖 */
export default React.memo(DualColoredBallTest);
