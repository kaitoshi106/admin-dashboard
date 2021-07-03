import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const FeaturedContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FeaturedItem = styled.div`
  flex: 1;
  padding: 30px;
  margin: 0 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 15%);
`;
const FeaturedTitle = styled.h3`
  font-size: 20px;
`;
const FeaturedMoneyContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const FeaturedMoney = styled.span`
  font-size: 32px;
  font-weight: 600;
  color: #555;
`;
const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: #008000;
  }
  .negative {
    color: #f44336;
  }
`;
const FeaturedSub = styled.span`
  font-size: 15px;
  color: #333;
`;

export default function FeaturedInfo() {
  return (
    <FeaturedContainer>
      {/* Revanue */}
      <FeaturedItem>
        <FeaturedTitle>Revanue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,53</FeaturedMoney>
          <FeaturedMoneyRate>
            -12.5 <ArrowDownward className="featuredIcon negative" />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      {/* sales */}
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,15</FeaturedMoney>
          <FeaturedMoneyRate>
            -8.5 <ArrowDownward className="featuredIcon negative" />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      {/* cost */}
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$1,13</FeaturedMoney>
          <FeaturedMoneyRate>
            +0.5 <ArrowUpward className="featuredIcon" />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </FeaturedContainer>
  );
}
