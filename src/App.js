import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';

import Home from './pages/Home/index';

function App() {

    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    )

}

export default App;
