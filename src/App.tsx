import React from 'react';

import styled from 'styled-components';
import Header from './components/header';
import Main from './components/main';

const AppBlock = styled.div`
    margin: 10px 45px 0 45px;
`;

const App: React.FC = () => {
    return (
        <AppBlock>
            <Header />
            <Main />
        </AppBlock>
    );
};

export default App;
