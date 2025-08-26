import "./App.css";

import styled from "styled-components";

import Icon from "./components/Icon";

function App() {
  return (
    <Layout>
      <VerticalMediaBlock>
        <VerticalLine />
        <Icon
          width={"32px"}
          height={"32px"}
          viewBox={"0 0 23 23"}
          iconId={"git"}
        ></Icon>
        <Icon
          width={"32px"}
          height={"32px"}
          viewBox={"0 0 14 20"}
          iconId={"figma"}
        ></Icon>
        <Icon
          width={"32px"}
          height={"32px"}
          viewBox={"0 0 23 23"}
          iconId={"ball"}
        ></Icon>
      </VerticalMediaBlock>
    </Layout>
  );
}

const Layout = styled.div`
  padding: 0 170px;
`;

const VerticalMediaBlock = styled.div`
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
  border: 0.5px solid var(--color--gray);
`;
export default App;
