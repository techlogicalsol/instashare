import React, { useEffect, useState } from "react";
import { projectFirestore } from "../Firebase/Config";

function useFireStore(collection){


    const [docs, setDocs] = useState([])

    useEffect(()=>{
       const unsub = projectFirestore.collection(collection)

        .orderBy('createdAt', 'desc')
        .onSnapshot((snap)=>{
            let document = []
            snap.forEach(doc =>{
                document.push({...doc.data(), id: doc.id})
            });
            setDocs(document)
        })

        return () => unsub()

    },[collection])

   

    return {docs}

    return(
        <>

        </>
    )
}

export default useFireStore