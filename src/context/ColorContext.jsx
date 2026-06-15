import React, { createContext, useState, useContext, Children } from 'react';

const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
    const listcolor =[
        {   id:"white",
            value :"#e4e4e463"
        },
        {   id:"red",
            value :"#ff4f4fa3"
        },
        {   id:"blue",
            value :"#0000ff75"
        },
        {   id:"black",
            value :"#00000078"
        },
    ]
    const [theme,setTheme]=useState(listcolor[0].color);
    const handleChangeTheme =(colorId)=>{
        const selectedColor = listcolor.find((color)=> color.id==colorId )
        console.log(selectedColor.id)
        console.log(selectedColor.value)
        setTheme(selectedColor.value)
    }

    return <ThemeContext.Provider value={{theme,handleChangeTheme,listcolor}}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme=()=>{
    return useContext(ThemeContext)
}