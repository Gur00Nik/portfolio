import styled from "styled-components";

type SpanPropsType = {
  text: string;
  color: string;
};

export const Span = (props: SpanPropsType) => {
  return <SpanText color={props.color}>{props.text}</SpanText>;
};

const SpanText = styled.span`
  color: ${(props) => props.color};
`;
