import { useGlobalStore } from '../../../provider/povider'
import styled from 'styled-components'


import { Moon , Sun } from '../../Icons/index'

const ThemeSwitcher = () => {
    const { theme , setTheme } = useGlobalStore()

    const handleTheme = () => {
        if(theme == "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    const customStyle = {
        backgroundColor: theme == "light" ? "white" : 'black'
    };

    return (
        <ThemeSwitchButton style={customStyle} onClick={handleTheme}>    
            { theme == "light" ? <Sun /> : <Moon/>} 
        </ThemeSwitchButton>
    )
}

export default ThemeSwitcher

const ThemeSwitchButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 5;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid white;

    &:hover{
        transform: scale(1.1)
    }
`