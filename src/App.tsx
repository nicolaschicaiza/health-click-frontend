import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
