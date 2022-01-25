/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { BarChartContainer } from './LevelBar.styled';

const LevelBar = ({ index, level, skill, sublevel }) => {
  const [styles, setStyles] = useState({});

  const styleSkill = {
    width: 60,
    height: 20.5,
    background: '#B9E0D7',
    color: '#006B79',
  };

  const StyleEcosystem = {
    width: 85,
    height: 26,
    background: '#F9EBF4',
    color: '#BF3088',
  };

  const switcher = () => (skill ? setStyles(styleSkill) : setStyles(StyleEcosystem));

  const sublevels = {
    minus: -1 / 3,
    neutral: 0,
    plus: 1 / 3,
  };

  const totalLevel = level + sublevels[sublevel];
  const realLevel = Math.floor(totalLevel);
  const realSublevel = totalLevel - Math.floor(totalLevel);

  const data = [
    {
      name: 'level',
      skillLevel: 1,
    },
  ];

  useEffect(() => {
    switcher();
  }, [skill]);

  const fillBars = barIndex => {
    if (realLevel > barIndex) return [0, 'dataMax'];
    if (realLevel + 1 > barIndex && realSublevel > 0) return [0, dataMax => (dataMax * (1 / realSublevel))];
    return '';
  };

  return (
    <BarChartContainer data-cy={`skill-bars-${index}`}>
      {[...Array(4)].map((x, i) => (
        <BarChart
          key={i}
          data={data}
          height={styles.height}
          layout="vertical"
          margin={{
            top: 8,
            bottom: -2,
            right: 8,
          }}
          width={styles.width}
        >
          <YAxis hide radius={[10, 10, 10, 10]} type="category" />
          <XAxis hide domain={fillBars(i)} type="number" />
          <Bar
            alignmentBaseline="baseline"
            background={{ fill: styles.background, radius: 4 }}
            dataKey="skillLevel"
            fill={styles.color}
            height={25}
            radius={4}
          />
        </BarChart>
      ))}
    </BarChartContainer>
  );
};

LevelBar.propTypes = {
  index: PropTypes.number,
  level: PropTypes.number,
  skill: PropTypes.bool,
  sublevel: PropTypes.string,
};

LevelBar.defaultProps = {
  index: null,
  level: 0,
  skill: false,
  sublevel: 'neutral',
};

export default LevelBar;
