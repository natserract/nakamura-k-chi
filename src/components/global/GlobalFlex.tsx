

import * as React from 'react';

interface Props {
    children: React.ReactNode,
    justifyContent: string,
}

const GlobalFlex:React.FC<Props>  = ({
    children,
    justifyContent
}) => {
    return (
        <div className="flex" style={{ justifyContent: `${justifyContent}` }}>
            { children }
        </div>
    )
}

export default GlobalFlex