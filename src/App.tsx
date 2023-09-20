import React, { Fragment } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import './ui/_global.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactUs from './pages/ContactUs'
import Offerings from './pages/Offerings'
import Portfolio from './pages/Portfolio'
import About from './pages/About'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/offerings/*' element={<Offerings />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Fragment>
  )
}

export default App
