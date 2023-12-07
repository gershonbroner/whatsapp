import { useEffect,useState  } from "react";

interface prop {
key: string,
initialValue: number | null | Function,
}

const PREFIX = 'whatsapp-clone-';

export default function useLocalStorage ({key, initialValue}:prop){
   const prefixedKey = PREFIX + key ;
   const [value,setValue] = useState(()=>{
    const jsonValue =localStorage.getItem(prefixedKey)
    if(jsonValue != null) return JSON.parse(jsonValue)
    if(typeof initialValue === 'function'){

    return initialValue()

    }else{

   return initialValue

    }

   })
   useEffect(()=>{
localStorage.setItem(prefixedKey,JSON.stringify(value))
   },[prefixedKey,value])

return  [value,setValue]

}