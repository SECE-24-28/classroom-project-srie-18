import { useState }  from 'react'
export default function Counter(){
    const [count,setcount] = useState(0)
     
    return(
      
        <>
        <p>THE VALUE IS:{count}</p>
        <button onClick = {() => setcount(count+1)} >TOUCH MEE </button>
        </>
    )
}