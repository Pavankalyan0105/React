import React , {useState} from 'react';
import Store from './Context'


const Provider = () => {

    const [mission,setMission] = useState({
        mname:"Go to Berlin",
        agent : 004,
        accept:"Not accepted"
    }) 
    return (
        <Store.Provider value = {{
            data:mission , 
            isMissionAccepted: ()=>{
                setMission(...mission ,accept = "ACCEPTED")
            }
        }}>

        </Store.Provider>
    )
}

export default Provider;