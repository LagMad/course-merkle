import React from 'react'
import MainLayout from './layouts/MainLayout'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const App = () => {
  return (
    <MainLayout>
      <Hero/>
      <Projects/>
      <Contact/>
    </MainLayout>
  )
}

export default App