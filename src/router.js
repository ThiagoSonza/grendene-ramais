import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import PrivateRoute from './privateRoute';

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
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<React.Suspense fallback={<Loading />}> <ContatosInternos /> </React.Suspense>} />
                <Route path='/contatosInternos' element={<React.Suspense fallback={<Loading />}> <ContatosInternos /> </React.Suspense>} />
                <Route path='/contatosExternos' element={<React.Suspense fallback={<Loading />}> <ContatosExternos /> </React.Suspense>} />
                <Route path='/contatos/:id' element={<React.Suspense fallback={<Loading />}> <NovoContato /> </React.Suspense>} />
                <Route path='/novoContato' element={<React.Suspense fallback={<Loading />}> <NovoContato /> </React.Suspense>} />
                <Route path='/importacao' element={<React.Suspense fallback={<Loading />}> <Importacao /> </React.Suspense>} />
                <Route path='/exportacao' element={<React.Suspense fallback={<Loading />}> <Exportacao /> </React.Suspense>} />
            </Route>

            <Route path="/login" element={<React.Suspense fallback={<Loading />}> <Login /> </React.Suspense>} />
            <Route path="*" element={<React.Suspense fallback={<Loading />}> <NotFound /> </React.Suspense>} />
        </Routes>
    )

}

export default Routers