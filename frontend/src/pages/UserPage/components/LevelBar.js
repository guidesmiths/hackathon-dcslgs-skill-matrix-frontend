import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
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
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        width={150}
      >
        <XAxis hide domain={[0, 4]} type="number" />
        <YAxis hide type="category"/>
        <Bar
          background={{ fill: '#eee' }}
          dataKey="skillLevel"
          fill="#82ca9d"
          minPointSize={25}
        />
        <Tooltip cursor={false}/>
      </BarChart>
    </BarChartContainer>
  );
};

LevelBar.propTypes = {
  level: PropTypes.number.isRequired,
};

export default LevelBar;
