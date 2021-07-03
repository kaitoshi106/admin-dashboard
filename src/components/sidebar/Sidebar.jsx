import React from "react";
import styled from "styled-components";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";

const SidebarSection = styled.article`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: #f8f8f8;
  position: sticky;
  top: 50px;
`;

const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

const SidebarTitle = styled.h3`
  font-size: 14px;
  color: #333;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

const SidebarItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: #e5e5e5;
  }
  svg {
    font-size: 20px;
  }
  .SidebarIcon {
    margin-right: 5px;
  }
  ${(props) => (props.active ? "background-color: #e5e5e5" : "")};
`;

export default function Sidebar() {
  const active = true;

  return (
    <SidebarSection>
      <SidebarWrapper>
        {/* Dashboard */}
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <SidebarItem active={active}>
              <LineStyle className="SidebarIcon" />
              Home
            </SidebarItem>
            <SidebarItem>
              <Timeline className="SidebarIcon" />
              Analytics
            </SidebarItem>
            <SidebarItem>
              <TrendingUp className="SidebarIcon" />
              Sales
            </SidebarItem>
          </SidebarList>
        </SidebarMenu>
        {/* Quick Menu */}
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
            <SidebarItem>
              <PermIdentity className="SidebarIcon" />
              Users
            </SidebarItem>
            <SidebarItem>
              <Storefront className="SidebarIcon" />
              Products
            </SidebarItem>
            <SidebarItem>
              <AttachMoney className="SidebarIcon" />
              Transactions
            </SidebarItem>
            <SidebarItem>
              <BarChart className="SidebarIcon" />
              Reports
            </SidebarItem>
          </SidebarList>
        </SidebarMenu>
        {/* Notifications */}
        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>
            <SidebarItem>
              <MailOutline className="SidebarIcon" />
              Mail
            </SidebarItem>
            <SidebarItem>
              <DynamicFeed className="SidebarIcon" />
              Feedback
            </SidebarItem>
            <SidebarItem>
              <ChatBubbleOutline className="SidebarIcon" />
              Messages
            </SidebarItem>
          </SidebarList>
        </SidebarMenu>
        {/* Staff */}
        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>
            <SidebarItem>
              <WorkOutline className="SidebarIcon" />
              Manage
            </SidebarItem>
            <SidebarItem>
              <Timeline className="SidebarIcon" />
              Analytics
            </SidebarItem>
            <SidebarItem>
              <Report className="SidebarIcon" />
              Reports
            </SidebarItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarSection>
  );
}
