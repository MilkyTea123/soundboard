import React, { useState, useEffect } from 'react';
import { EnvironmentContext } from './contexts/EnvironmentContext/EnvironmentContext';
import { useWindowWidth } from './hooks/useWindowWidth';
import { MainPage } from './components/MainPage';

import "./App.css";

type AppProps = {
	firebase?: any
}

const App: React.FC<AppProps> = ({ firebase }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const windowWidth = useWindowWidth();

    const a = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    return <div className="App">
        <EnvironmentContext.Provider value={{ windowWidth }}>
            {/* <MainPage a={a} /> */}
            <p>Hello</p>
        </EnvironmentContext.Provider>
    </div>
}

export default App;