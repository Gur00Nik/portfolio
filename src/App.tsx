import styled, { createGlobalStyle } from "styled-components";

import arrayColors from "./colors.tsx";

import { VerticalMediaBlock } from "./layout/VerticalMediaBlock.tsx";
import { Header } from "./layout/Header.tsx";

import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <VerticalMediaBlock />
      <LayoutPage>
        <Header />
      </LayoutPage>
    </Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  background-color: ${arrayColors.colorBlack};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${arrayColors.colorGray};
  font-family: "Fira Code";
}
a {
  text-decoration: none;
  color: ${arrayColors.colorGray};
}
a:active {
  color: ${arrayColors.colorWhite};
}
a:hover {
  color: ${arrayColors.colorWhite};
}
h1 {
  display: inline;
  font-size: 32px;
}
h2 {
  font-size: 24px;
}
h3 {
  font-size: 16px;
}
`;

const LayoutPage = styled.div`
  padding: 0 170px;
`;

export default App;
