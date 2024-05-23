import { useEffect, useState } from "react";
import {useSelector} from "react-redux"

const useAuthStatus =()=>{
 const {user} = useSelector((state)=> state.auth)
 const [loggedIn , setLoggedIn] = useState(false)
 const [checkStatus , setCheckStatus] = useState(true)

 useEffect(()=>{
    if (user) {
        setLoggedIn(true)
    }else{
        setLoggedIn(false)
    }
    setCheckStatus(false)

 },[user]);

 return{loggedIn , checkStatus}

}

export default useAuthStatus;