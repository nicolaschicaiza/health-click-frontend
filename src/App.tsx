import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
import { Template } from './templates/Template';

const HomePage = lazy(() => import('./pages/HomePage'));
const SummaryPage = lazy(() => import('./pages/SummaryPage'));
const ConsultationPage = lazy(() => import('./pages/ConsultationPage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const RadisysPage = lazy(() => import('./pages/RadisysPage'));
const SignInRegistrationPage = lazy(() => import('./pages/SignInRegistrationPage'));
const PerfilPage = lazy(() => import('./pages/PerfilPage'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Template><Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense></Template>} />
        <Route path="/summary" element={<Template><Suspense fallback={<div>Loading...</div>}><SummaryPage /></Suspense></Template>} />
        <Route path="/consultation" element={<Template><Suspense fallback={<div>Loading...</div>}><ConsultationPage /></Suspense></Template>} />
        <Route path="/download" element={<Template><Suspense fallback={<div>Loading...</div>}><DownloadPage /></Suspense></Template>} />
        <Route path="/radisys" element={<Template><Suspense fallback={<div>Loading...</div>}><RadisysPage /></Suspense></Template>} />
        <Route path="/perfil" element={<Template><Suspense fallback={<div>Loading...</div>}><PerfilPage /></Suspense></Template>} />
        <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><SignInRegistrationPage /></Suspense>} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
