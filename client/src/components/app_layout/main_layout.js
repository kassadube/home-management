import React from 'react'

import AppHeader from './app_header';

export const MainLayout = (props) => {
    
    return(
        <div>
            <AppHeader />
            {props.children}
        </div>
    )
}

export default MainLayout