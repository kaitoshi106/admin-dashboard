import { Fragment } from "react";
import styled from "styled-components";

import Topbar from "./components/topbar/Topbar";
import Sidebar from './components/sidebar/Sidebar';
import Home from "./pages/home/Home";

const Container = styled.section`
  display: flex;
`;
function App() {
  return (
    <Fragment>
      <Topbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </Fragment>
  );
}

export default App;
