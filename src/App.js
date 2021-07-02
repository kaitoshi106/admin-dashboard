import { Fragment } from "react";
import styled from "styled-components";
import Topbar from "./components/topbar/Topbar";

import Sidebar from './components/sidebar/Sidebar';

const Container = styled.div`
  display: flex;
`;
function App() {
  return (
    <Fragment>
      <Topbar />
      <Container>
        <Sidebar />
      </Container>
    </Fragment>
  );
}

export default App;
