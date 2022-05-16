import { useEffect } from 'react'
export const useTiitle = openItem =>{
    useEffect(()=>{
        document.title = openItem ? openItem.name : `MrDonald's`
    })
}