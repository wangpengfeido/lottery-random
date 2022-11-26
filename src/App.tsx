import React, { FC, useState } from 'react';
import DualColoredBall from './components/lotteries/dual-colored-ball';
import DualColoredBallTest from './components/lotteries/dual-colored-ball-test';

enum EShowType {
  'dual_colored_ball' = 'dual_colored_ball',
  'dual_colored_ball_test' = 'dual_colored_ball_test',
}

const App: FC = () => {
  const [currentShow, setCurrentShow] = useState<string>(EShowType.dual_colored_ball);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCurrentShow(EShowType.dual_colored_ball);
          }}
        >
          双色球
        </button>
        <button
          onClick={() => {
            setCurrentShow(EShowType.dual_colored_ball_test);
          }}
        >
          双色球：买多少次中一等奖
        </button>
      </div>
      <hr style={{ borderTop: '1px solid blue' }} />
      <div>
        <div style={{ display: currentShow === EShowType.dual_colored_ball ? 'block' : 'none' }}>
          <DualColoredBall></DualColoredBall>
        </div>
        <div
          style={{ display: currentShow === EShowType.dual_colored_ball_test ? 'block' : 'none' }}
        >
          <DualColoredBallTest></DualColoredBallTest>
        </div>
      </div>
    </div>
  );
};

export default App;
