import React from "react";
import styled from "styled-components";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

import {userData} from "../../components/chart/data-chart"
import HomeWidget from "../../components/widgets/Widget";

const HomeContainer = styled.article`
  flex: 4;
`;

export default function Home() {
  return (
    <HomeContainer>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" />
      <HomeWidget />
    </HomeContainer>
  );
}
