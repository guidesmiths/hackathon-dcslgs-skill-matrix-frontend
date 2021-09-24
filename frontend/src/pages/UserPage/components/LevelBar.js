import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { BarChartContainer } from './LevelBar.styled';

const LevelBar = ({ level, field }) => {
  const [styles, setStyles] = useState({});

  const switcher = () => {
    switch (field) {
      case 'skill':
        setStyles({
          width: 60,
          height: 20,
          background: '#B9E0D7',
          color: '#006B79',
        });
        return;
      default:
        setStyles({
          width: 85,
          height: 25,
          background: '#F9EBF4',
          color: '#BF3088',
        });
    }
  };
  const data = [
    {
      name: 'level',
      skillLevel: level,
    },
  ];
  useEffect(() => {
    switcher();
  }, [field]);
  return (
    <BarChartContainer>
      {[...Array(4)].map((x, i) =>
        <BarChart
          data={data}
          height={ styles.height }
          layout="vertical"
          margin={{
            top: 8,
            bottom: -2,
            right: 8,
          }}
          width={styles.width}
          key={i}
        >
          <YAxis hide type="category" radius={[10, 10, 10, 10]}/>
          <XAxis hide domain={ level > i ? [0, 'dataMax'] : ''} type="number" />
          <Bar
            background={{ fill: styles.background }}
            dataKey="skillLevel"
            fill= { styles.color }
            radius={[10, 10, 10, 10]}
            height={25}
            alignmentBaseline="baseline"
            // minPointSize={25}
          />
        </BarChart>,
      )}
    </BarChartContainer>
  );
};

LevelBar.propTypes = {
  level: PropTypes.number.isRequired,
  field: PropTypes.number.isRequired,
};

export default LevelBar;
