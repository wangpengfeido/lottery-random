import React, { FC, useMemo, useState } from 'react';
import ShowBalls, { IPropsShowBalls } from 'src/components/app/show-balls';
import { createDualColorBallResult, IDualColorBallResult } from './create-dual-color-ball-result';

interface IPropsDualColorBall {}

const DualColorBall: FC<IPropsDualColorBall> = () => {
  const [count, setCount] = useState('1');
  const [results, setResults] = useState<IDualColorBallResult[]>([]);

  const showResultsData = useMemo(() => {
    const data: Array<IPropsShowBalls['data']> = [];
    for (const result of results) {
      const dataItem: IPropsShowBalls['data'] = [];
      for (const num of result.red) {
        dataItem.push({ num, color: 'red' });
      }
      for (const num of result.blue) {
        dataItem.push({ num, color: 'blue' });
      }
      data.push(dataItem);
    }
    return data;
  }, [results]);

  const handleCreate = () => {
    const results = Array.from<IDualColorBallResult>({ length: parseInt(count) || 0 });
    results.forEach((_, index) => {
      results[index] = createDualColorBallResult();
    });
    setResults(results);
  };

  return (
    <>
      <div>
        <div>
          生成多少个：
          <input
            type="number"
            value={count}
            onChange={event => {
              setCount(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <button onClick={handleCreate}>生成</button>
        </div>
      </div>
      <hr />
      {showResultsData.map((item, index) => {
        return (
          <div key={index}>
            <ShowBalls data={item}></ShowBalls>
            <hr />
          </div>
        );
      })}
    </>
  );
};

/** 双色球 */
export default React.memo(DualColorBall);
