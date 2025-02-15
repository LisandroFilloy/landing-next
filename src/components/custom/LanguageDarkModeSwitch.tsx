"use client"
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { useState } from "react";

interface LanguageDarkModeSwitchProps {
    className: string
}


export default function LanguageDarkModeSwitch (props: LanguageDarkModeSwitchProps) {
    const {className} = props;
    const [mode, setMode] = useState('light');

    const handleDarkMode = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }
    
    return <>
    <div onClick={handleDarkMode} className={`${className} rounded-lg shadow-lg p-4 fixed bottom-8 right-8 bg-white ${mode === 'light' ? 'dark:text-black bg-white hover:bg-gray-100' : 'text-white bg-black hover:bg-gray-800'}`}>
        {mode === 'light' ? <LuSun/> : <LuMoon />}
    </div>
    </>
}