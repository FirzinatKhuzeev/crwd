import React from 'react';

import { Main } from './components/Main';
import { Header } from './components/Header';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin-left: 25px;
  margin-right: 25px;
`;

const App: React.FC = () => {
  return (
    <AppBlock>
      <Header />
      <Main />
    </AppBlock>
  );
}

export default App;
