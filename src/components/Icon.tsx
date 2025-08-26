import styled from "styled-components";

import sprite from "../icons/sprite.svg";

type IconPropsType = {
  iconId: string;
  width: string;
  height: string;
  viewBox: string;
};

function Icon(props: IconPropsType) {
  return (
    <SvgLayout
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
    >
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </SvgLayout>
  );
}

const SvgLayout = styled.svg.attrs(({ viewBox, width, height }) => ({
  viewBox: viewBox,
  width: width,
  height: height,
}))``;

export default Icon;
