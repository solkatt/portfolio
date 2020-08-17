import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'

import gsap from 'gsap'

import "./styles/App.scss"

//Cmoponents
import Header from './components/header'
import Navigation from './components/navigation'





//pages
import Home from './pages/home'
import Work from './pages/work'
import Approach from './pages/approach'
import Services from './pages/services'
import About from './pages/about'



//routes

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/work', name: 'Work', Component: Work },
  { path: '/about', name: 'About', Component: About },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/approach', name: 'Approach', Component: Approach },
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


      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />



    </>
  );
}

export default App;