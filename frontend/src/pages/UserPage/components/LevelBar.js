import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { BarChartContainer } from './LevelBar.styled';

const LevelBar = ({ level }) => {
  const data = [
    {
      name: 'level',
      skillLevel: level,
    },
  ];
  return (
    <BarChartContainer>
      <BarChart
        data={data}
        height={30}
        layout="vertical"
        margin={{
          top: 10,
          right: 20,
          left: 20,
          bottom: 0,
        }}
        width={200}
      >
        <XAxis hide domain={[0, 4]} type="number" />
        <YAxis hide type="category" />
        <Bar
          background={{ fill: '#eee' }}
          dataKey="skillLevel"
          fill="#82ca9d"
          // minPointSize={25}
        />
      </BarChart>
    </BarChartContainer>
  );
};

LevelBar.propTypes = {
  level: PropTypes.number.isRequired,
};

export default LevelBar;
