import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import styled from "styled-components";

const ChartWrapper = styled.section`
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 15%);
`;
const ChartTitle = styled.h3`
  margin-bottom: 20px;
`;

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <ChartWrapper>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#555" />
          <Line type="monotone" dataKey={ dataKey } stroke="#555" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#555" strokeDasharray= "5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
