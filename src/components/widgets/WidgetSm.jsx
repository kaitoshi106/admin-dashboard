import { Visibility } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const WidgetSmWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 20px;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 15%);
`;

const WidgetSmTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
`;
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const WidgetSmItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
const WidgetSmImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;
const WidgetSmUsername = styled.span`
font-weight: 600;
`;
const WidgetSmUserTitle = styled.span`
font-weight: 300;
`;
const WidgetSmButton = styled.span`
display: flex;
align-items: center;
border: none;
border-radius: 10px;
padding: 7px 10px;
background-color: #eeeef1;
color: #555;
cursor: pointer;
`;
const StyledVisibility = styled(Visibility)`
font-size: 16px;
margin-right: 5px;
`;

export default function WidgetSm() {
  return (
    <WidgetSmWrapper>
      <WidgetSmTitle>New Join Members</WidgetSmTitle>
      <WidgetSmList>
        <WidgetSmItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="avatar img"
          />
          <WidgetSmUser>
            <WidgetSmUsername>Minh Tran</WidgetSmUsername>
            <WidgetSmUserTitle>FrontEnd Dev</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <StyledVisibility />
            Display
          </WidgetSmButton>
        </WidgetSmItem>
        <WidgetSmItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="avatar img"
          />
          <WidgetSmUser>
            <WidgetSmUsername>Minh Tran</WidgetSmUsername>
            <WidgetSmUserTitle>FrontEnd Dev</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <StyledVisibility />
            Display
          </WidgetSmButton>
        </WidgetSmItem>
        <WidgetSmItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="avatar img"
          />
          <WidgetSmUser>
            <WidgetSmUsername>Minh Tran</WidgetSmUsername>
            <WidgetSmUserTitle>FrontEnd Dev</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <StyledVisibility />
            Display
          </WidgetSmButton>
        </WidgetSmItem>
        <WidgetSmItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="avatar img"
          />
          <WidgetSmUser>
            <WidgetSmUsername>Minh Tran</WidgetSmUsername>
            <WidgetSmUserTitle>FrontEnd Dev</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <StyledVisibility />
            Display
          </WidgetSmButton>
        </WidgetSmItem>
        <WidgetSmItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="avatar img"
          />
          <WidgetSmUser>
            <WidgetSmUsername>Minh Tran</WidgetSmUsername>
            <WidgetSmUserTitle>FrontEnd Dev</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <StyledVisibility />
            Display
          </WidgetSmButton>
        </WidgetSmItem>
        <WidgetSmItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/6533889/pexels-photo-6533889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="avatar img"
          />
          <WidgetSmUser>
            <WidgetSmUsername>Minh Tran</WidgetSmUsername>
            <WidgetSmUserTitle>FrontEnd Dev</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <StyledVisibility />
            Display
          </WidgetSmButton>
        </WidgetSmItem>
      </WidgetSmList>
    </WidgetSmWrapper>
  );
}
