import React from "react";
import styled from "styled-components";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

const TopbarSection = styled.section`
  width: 100%;
  height: 50%;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Topleft = styled.div``;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: darkblue;
`;

const TopbarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;
const TopIconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: 0;
  width: 15px;
  height: 15px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const TopAvatar = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
`;

const Topbar = () => {
  return (
    <TopbarSection>
      <TopbarWrapper>
        <Topleft>
          <Logo>logo</Logo>
        </Topleft>
        <TopRight>
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Settings />
          </TopbarIconContainer>
          <TopAvatar src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="minhtran" />
        </TopRight>
      </TopbarWrapper>
    </TopbarSection>
  );
};

export default Topbar;
