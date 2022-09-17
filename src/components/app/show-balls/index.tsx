import React, { FC } from 'react';

export interface IPropsShowBalls {
  data: Array<{
    num: number;
    color: string;
  }>;
}

const ShowBalls: FC<IPropsShowBalls> = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              color: item.color,
              border: '2px solid',
              borderColor: item.color,
              width: 30,
              height: 30,
              lineHeight: '30px',
              textAlign: 'center',
              fontSize: '18px',
              borderRadius: '50%',
            }}
          >
            {item.num}
          </div>
        );
      })}
    </div>
  );
};

/** 展示一组球形 */
export default React.memo(ShowBalls);
