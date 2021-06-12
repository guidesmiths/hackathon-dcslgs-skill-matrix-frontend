import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const LevelBar = ({ level }) => {
  const data = [
    {
      name: 'level',
      skillLevel: level,
    },
  ];
  return (
    <BarChart
      data={data}
      height={10}
      layout="vertical"
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      width={100}
    >
      <XAxis hide domain={[0, 4]} type="number" />
      <YAxis hide type="category"/>
      <Tooltip />
      <Bar
        background={{ fill: '#eee' }}
        dataKey="skillLevel"
        fill="#82ca9d"
        minPointSize={1}
      />
    </BarChart>
  );
};

LevelBar.propTypes = {
  level: PropTypes.number.isRequired,
};

export default LevelBar;
