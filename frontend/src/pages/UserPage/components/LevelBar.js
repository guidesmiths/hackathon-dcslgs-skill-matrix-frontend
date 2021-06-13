import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChartContainer } from './LevelBar.styled';
import Icon from '../../../app/commons/icon/icon';

const LevelBar = ({ level, handlePlusLevel, handleMinusLevel }) => {
  const data = [
    {
      name: 'level',
      skillLevel: level,
    },
  ];
  return (
    <BarChartContainer>
      <Icon height="5px" icon={'add'} width="5px" onClick={handlePlusLevel} />
      <BarChart
        data={data}
        height={30}
        layout="vertical"
        margin={{
          top: 0,
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
          minPointSize={25}
        />
        <Tooltip cursor={false} />
      </BarChart>
      <Icon height="5px" icon={'remove'} width="5px" onClick={handleMinusLevel} />
    </BarChartContainer>
  );
};

LevelBar.propTypes = {
  handleMinusLevel: PropTypes.func.isRequired,
  handlePlusLevel: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
};

export default LevelBar;
