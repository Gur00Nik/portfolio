import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Layout>
      <VerticalMediaBlock>
        <VerticalLine />
      </VerticalMediaBlock>
    </Layout>
  );
}

const Layout = styled.div`
  padding: 0 170px;
`;

const VerticalMediaBlock = styled.div`
  position: absolute;
  left: 20px;
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
}`;

export default App;
