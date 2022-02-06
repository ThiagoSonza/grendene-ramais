import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const NotFound = React.lazy(() => import('./pages/NotFound'))
const Login = React.lazy(() => import('./pages/Login'))
const ContatosExternos = React.lazy(() => import('./pages/ContatosExternos'))
const ContatosInternos = React.lazy(() => import('./pages/ContatosInternos'))
const NovoContato = React.lazy(() => import('./pages/NovoContato'))
const Importacao = React.lazy(() => import('./pages/Importacao'))
const Exportacao = React.lazy(() => import('./pages/Exportacao'))

function Routers() {

    return (
        <Routes>
            <Route path="/" element={<React.Suspense fallback={<>...</>}> <ContatosInternos /> </React.Suspense>} />
            <Route path="/login" element={<React.Suspense fallback={<>...</>}> <Login /> </React.Suspense>} />
            <Route path='/contatosInternos' element={<React.Suspense fallback={<>...</>}> <ContatosInternos/> </React.Suspense>} />
            <Route path='/contatosExternos' element={<React.Suspense fallback={<>...</>}> <ContatosExternos/> </React.Suspense>} />
            <Route path='/contatos/:id' element={<React.Suspense fallback={<>...</>}> <NovoContato/> </React.Suspense>} />
            <Route path='/novoContato' element={<React.Suspense fallback={<>...</>}> <NovoContato/> </React.Suspense>} />
            <Route path='/importacao' element={<React.Suspense fallback={<>...</>}> <Importacao/> </React.Suspense>} />
            <Route path='/exportacao' element={<React.Suspense fallback={<>...</>}> <Exportacao/> </React.Suspense>} />
            
            <Route path="*" element={<React.Suspense fallback={<>...</>}> <NotFound /> </React.Suspense>} />
        </Routes>
    )

}

export default Routers