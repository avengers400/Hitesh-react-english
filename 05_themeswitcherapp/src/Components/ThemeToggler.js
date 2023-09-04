import React, {useContext} from 'react'
import ThemeContext  from '../Context/ThemeContext'

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext)

   //const themeMode = useContext(ThemeContext)[0]

    console.log(themeMode)
    
    return (
      <div 
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark": "light")
      }}
      >
         <span>{themeMode === "light" ? "Turn Off":"Lights On"}</span>
                   



      </div>




    )

}

export default ThemeToggler