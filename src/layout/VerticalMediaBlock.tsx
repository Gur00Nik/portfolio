import styled from "styled-components";

import arrayColors from "../colors";

import { Icon } from "../components/Icon";

export const VerticalMediaBlock = () => {
  return (
    <VerticalMediaBlockWrapper>
      <VerticalLine />
      <Icon
        fill={arrayColors.colorGray}
        width="32px"
        height="32px"
        viewBox="0 0 23 23"
        iconId="git"
      />
      <Icon
        fill={arrayColors.colorGray}
        width="32px"
        height="32px"
        viewBox="0 0 14 20"
        iconId="figma"
      />
      <Icon
        fill={arrayColors.colorGray}
        width="32px"
        height="32px"
        viewBox="0 0 23 23"
        iconId="ball"
      />
    </VerticalMediaBlockWrapper>
  );
};

const VerticalMediaBlockWrapper = styled.div`
  position: absolute;
  left: 30px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const VerticalLine = styled.div`
  height: 200px;
  width: 1px;
  border: 0.5px solid;
  border-color: ${arrayColors.colorGray};
`;
