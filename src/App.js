import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'

import gsap from 'gsap'

import "./styles/App.scss"

//Cmoponents
import Header from './components/header'
import Navigation from './components/navigation'





//pages
import Home from './pages/home'
import Development from './pages/development'
import MotionDesign from './pages/motionDesign'
import Audiovisual from './pages/audiovisual'
import About from './pages/about'



//routes

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/development', name: 'Development', Component: Development },
  { path: '/motion-design', name: 'Motion Design', Component: MotionDesign },
  { path: '/audiovisual', name: 'Audiovisual', Component: Audiovisual },
  { path: '/about', name: 'About', Component: About },
]


function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments)
    }, ms)
  }
}

function App() {

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {

    // Prevents flashing
    gsap.to('body', 0, { css: { visibility: "visible" } })



    let vh = dimensions.height * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)



    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }


  })



  return (
    <>

      <Header dimensions={dimensions} />

      <Navigation />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}


      </div>



    </>
  );
}

export default App;