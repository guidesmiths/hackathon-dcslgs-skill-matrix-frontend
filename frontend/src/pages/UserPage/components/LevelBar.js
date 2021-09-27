import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { BarChartContainer } from './LevelBar.styled';

const LevelBar = ({ level, skill }) => {
  const [styles, setStyles] = useState({});
  const styleSkill = {
    width: 60,
    height: 20,
    background: '#B9E0D7',
    color: '#006B79',
  };
  const StyleEcosystem = {
    width: 85,
    height: 25,
    background: '#F9EBF4',
    color: '#BF3088',
  };

  const switcher = () => (skill ? setStyles(styleSkill) : setStyles(StyleEcosystem));
  const data = [
    {
      name: 'level',
      skillLevel: level,
    },
  ];
  useEffect(() => {
    console.log(skill);
    switcher();
  }, [skill]);
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
  level: PropTypes.any.isRequired,
  skill: PropTypes.bool.isRequired,
};

export default LevelBar;
