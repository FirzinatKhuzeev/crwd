import React from 'react';

import styled from 'styled-components';
import Header from './components/header';
import Main from './components/main';

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
};

export default App;
