import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'

export const App = () => {
  return (
    <div className='App'>
      <Link to='/' >Home</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/about' element={<AboutPageAsync/>}/>
            <Route path='/' element={<MainPageAsync/>}/>
          </Routes>
      </Suspense>
    </div>
  )
}


