import React, {useContext, useState} from 'react'
import ThemeContext from '../Context/ThemeContext'
import ThemeToggler from './ThemeToggler'
import Apptheme from '../Color'

const  HeroSection = () => {
  
    const theme = useContext(ThemeContext)[0]
    const [Theme, setTheme] = useState(theme)
    console.log(theme)
    
    const currentTheme = Apptheme[Theme]
  return (
    <div style={{padding: "1rem", backgroundColor: `${currentTheme.backgroundColor}`, color: `${currentTheme.textColor}`, textAlign: "center"}}>
      <h1>Context API theme toggler</h1>
      <p>This is a nice paragraph</p>
      <button onClick={() => {setTheme(Theme === "light" ? "dark":"light")}} style={{backgroundColor: "#26ae60", padding: "10px 150px"
    , fontSize: "20px", color: "#FFF", border: `${currentTheme.border}`}}>{Theme === "light"?"Enable Dark mode":"Enable Light mode"}</button>


    </div>
  )
}

export default HeroSection