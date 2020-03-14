

import * as React from 'react';
import "./Global.scss";

const GlobalContainer:React.FC<{
    children: React.ReactNode
}> = ({ children }) => (
    <div className="container">
        { children }
    </div>
)

export default GlobalContainer