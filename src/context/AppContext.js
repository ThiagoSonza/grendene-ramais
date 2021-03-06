import React, { Children, createContext, useState } from 'react';

export const AppContext = createContext({});

function AppProvider({ children }){

    const [menu, setMenu] = useState(true)
    const [footer, setFooter] = useState(true)

    return (
        <AppContext.Provider
            value={
                menu,
                footer
            }>

            {children}

        </AppContext.Provider>
    )

}

export default AppProvider;