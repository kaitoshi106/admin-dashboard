import React from "react";
import styled from "styled-components";

const WidgetLgWrapper = styled.div`
  flex: 2;
  padding: 20px;
  margin-right: 20px;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 15%);
`;
const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const WidgetLgTr = styled.tr``;
const WidgetLgTh = styled.th`
  text-align: left;
`;
const WidgetLgTd = styled.td`
  &.widgetLgUser {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  &.widgetLgDate,
  .widgetLgAmount {
    font-weight: 300;
  }
`;
const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const WidgetLgName = styled.span``;

const WidgetLgBtn = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  &.Approved {
    background-color: #e5faf2;
    color: #4d3bb0;
  }
  &.Declined {
    background-color: #f3e6e7;
    color: #ff0c0c;
  }
  &.Pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
`;

export default function WidgetLg() {
  const SetWidgetLgBtn = ({ type }) => {
    return <WidgetLgBtn className={type}>{type}</WidgetLgBtn>;
  };

  return (
    <WidgetLgWrapper>
      <WidgetLgTitle>Latest transactions</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTr>
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgTd className="widgetLgUser">
            <WidgetLgImg
              src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="avatar img"
            />
            <WidgetLgName>Ngoc Luong</WidgetLgName>
          </WidgetLgTd>
          <WidgetLgTd className="widgetLgDate">3 Jun 2021</WidgetLgTd>
          <WidgetLgTd className="widgetLgAmount">$120</WidgetLgTd>
          <WidgetLgTd>
            <SetWidgetLgBtn type="Approved" />
          </WidgetLgTd>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgTd className="widgetLgUser">
            <WidgetLgImg
              src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="avatar img"
            />
            <WidgetLgName>Ngoc Luong</WidgetLgName>
          </WidgetLgTd>
          <WidgetLgTd className="widgetLgDate">3 Jun 2021</WidgetLgTd>
          <WidgetLgTd className="widgetLgAmount">$120</WidgetLgTd>
          <WidgetLgTd>
            <SetWidgetLgBtn type="Declined" />
          </WidgetLgTd>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgTd className="widgetLgUser">
            <WidgetLgImg
              src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="avatar img"
            />
            <WidgetLgName>Ngoc Luong</WidgetLgName>
          </WidgetLgTd>
          <WidgetLgTd className="widgetLgDate">3 Jun 2021</WidgetLgTd>
          <WidgetLgTd className="widgetLgAmount">$120</WidgetLgTd>
          <WidgetLgTd>
            <SetWidgetLgBtn type="Approved" />
          </WidgetLgTd>
        </WidgetLgTr>
      </WidgetLgTable>
    </WidgetLgWrapper>
  );
}
