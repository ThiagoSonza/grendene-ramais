import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import AppProvider, { AppContext } from './context/AppContext';
import Routers from './router';

function App() {

    const { menu, footer } = useContext(AppContext)

    return (
        <BrowserRouter>
            <AppProvider>

                {menu &&
                    <Menu />
                }
                <Menu />

                <Routers />

                {footer &&
                    <Footer />
                }
                <Footer />

            </AppProvider>
        </BrowserRouter>
    )

}

export default App