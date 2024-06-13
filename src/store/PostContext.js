import { createContext, useState } from "react";

export const postContext=createContext(null)

export default function PostDetails({children}){ // its a component,starts with cap
    const [postData,setPostData]=useState(null)
    return(
        <postContext.Provider value={{postData,setPostData}}>
            {children}
        </postContext.Provider>
    )
}

