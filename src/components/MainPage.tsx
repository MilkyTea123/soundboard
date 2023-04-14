import React, { useState, useEffect } from 'react';
// import styles from './HardCodedMainPage.module.css';

type MainPageProps = {
	a: () => void
}

export const MainPage: React.FC<MainPageProps> = ({
	a
}) => {
	return <>
        <div>
            <h1>Hello World</h1>
        </div>
    </>
}