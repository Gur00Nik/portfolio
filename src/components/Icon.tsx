import styled from "styled-components";

import sprite from "../assets/icons/sprite.svg";
import arrayColors from "../colors.tsx";

type IconPropsType = {
  iconId: string;
  width: string;
  height: string;
  viewBox: string;
  fill: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <SvgLayout
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill={props.fill}
    >
      <SvgId xlinkHref={`${sprite}#${props.iconId}`} />
    </SvgLayout>
  );
};

const SvgLayout = styled.svg.attrs(({ viewBox, width, height, fill }) => ({
  viewBox: viewBox,
  width: width,
  height: height,
  fill: fill,
}))`
  transition: 0.2s;

  &:hover {
    fill: ${arrayColors.colorPink};
  }
`;
const SvgId = styled.use.attrs(({ xlinkHref }) => ({
  xlinkHref: xlinkHref,
}))``;
