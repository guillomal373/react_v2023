import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './HelloApp';

import './styles.css';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App title='Mi primer App en React' subTitle={123} status={true}/>
    </React.StrictMode>
);