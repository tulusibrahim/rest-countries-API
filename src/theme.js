// 1. import `extendTheme` function
import { extendTheme, useColorModeValue } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

export const darkBg = 'hsl(207, 26%, 17%)'
export const lightBg = 'hsl(0, 0%, 98%)'

export const darkElement = 'hsl(209, 23%, 22%)'
export const lightElement = 'hsl(0, 0%, 100%)'

export const lightModeText = 'hsl(200, 15%, 8%)'
export const darkModeText = 'hsl(0, 0%, 100%)'

// export let bgColor = darkBg
// export let elementColor = darkElement
// export let textColor = darkModeText

export const fontSize = ['1em', '1.2em', '1.3em', '1.4em']


// const { toggleColorMode } = useColorMode()


export const CentralTheme = () => {
    let elementColor = useColorModeValue(lightElement, darkElement)
    let bgColor = useColorModeValue(lightBg, darkBg)
    let textColor = useColorModeValue(lightModeText, darkModeText)
    return {
        elementColor, bgColor, textColor
    }
    // toggleColorMode()
    // console.log('masuk')
    // let bg = localStorage.getItem('colormode')
    // console.log(bg)

    // if (bg === null) {
    //     console.log('masuk undefined')
    //     bgColor = lightBg
    //     elementColor = lightElement
    //     textColor = lightModeText
    //     localStorage.setItem('colormode', 'light')
    // }
    // else if (bg === 'dark') {
    //     console.log('masuk dark')
    //     bgColor = lightBg
    //     elementColor = lightElement
    //     textColor = lightModeText
    //     localStorage.setItem('colormode', 'light')
    // }
    // else if (bg === 'light') {
    //     console.log('masuk light')
    //     bgColor = darkBg
    //     elementColor = darkElement
    //     textColor = darkModeText
    //     localStorage.setItem('colormode', 'dark')
    // }
}

// export const themeColor = {
//     bgColor
// }