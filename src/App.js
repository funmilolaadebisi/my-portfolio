import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


const App = () => {
    return (
    <>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
        <footer></footer>
    </>
    )
}

export default App