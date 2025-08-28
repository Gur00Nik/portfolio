import styled from "styled-components";

import { Span } from "../components/Span";
import { Icon } from "../components/Icon";

import arrayColors from "../colors";

export const Header = () => {
  return (
    <header>
      <HeaderBlock>
        <LogoBlock>
          <Icon
            fill={arrayColors.colorWhite}
            width="20px"
            height="20px"
            viewBox="0 0 52 52"
            iconId="logo"
          />
          <Span color={arrayColors.colorWhite} text="Nikita Gurlov" />
        </LogoBlock>
      </HeaderBlock>
    </header>
  );
};

const HeaderBlock = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const LogoBlock = styled.div`
  display: flex;
  gap: 8px;
  color: ${arrayColors.colorWhite};
  fill: ${arrayColors.colorWhite};
`;
