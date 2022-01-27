import { useEffect, useState } from "react"

const useData=()=>{
    const [services,setServices]=useState([])
    useEffect(()=>{
       fetch("https://warm-island-11598.herokuapp.com/services")
       .then(res=>res.json())
       .then(data=>setServices(data))
    },[])

    return [services,setServices]
}
export default useData