import { NavLink } from "react-router-dom";
import { StyledTab, StyledTabText } from "../styledcomponents/styledcomponents";
import styled from "styled-components";

const StyledTabLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textSecondary};

  &.active {
    color: ${(props) => props.theme.colors.primary};
  }
`;

function StyledSelectionTab() {
  return (
    <StyledTab>
      <StyledTabLink to="/bulletin" end>
        <StyledTabText>1:1 문의</StyledTabText>
      </StyledTabLink>
      <StyledTabText>|</StyledTabText>
      <StyledTabLink to="/bulletin/chat" end>
        <StyledTabText>AI 채팅</StyledTabText>
      </StyledTabLink>
    </StyledTab>
  );
}

export default StyledSelectionTab;
