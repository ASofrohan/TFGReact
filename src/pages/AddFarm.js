import axios from "axios"
import { useEffect, useState } from "react"
import FarmsList from "../components/FarmsList";
import { useLocation } from "react-router-dom";

function AddFarm(props) {

    const [name,setName] = useState("")
    const [pos1,setPos1] = useState("")
    const [pos2,setPos2] = useState("")


    const location = useLocation()
    console.log("viva el pan")

    useEffect(() =>{
        console.log("useEffect")
    }, [location])

    const onSubmit = async (e) => {
        e.preventDefault()
        
        const res = await axios.post("https://data.mongodb-api.com/app/data-fvlyw/endpoint/aGranja", {
            "nombre": name, "pos": [pos1,pos2]
        })
        console.log(res)
    }

   return(
        <div>
            <h2>Add farm</h2>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
                <input type="number" placeholder="Position 1" onChange={e=>setPos1(e.target.value)}/>
                <input type="number" placeholder="Position 1" onChange={e=>setPos2(e.target.value)}/>
                <button type="submit">Añadir</button>
            </form>
            <h2>All farms</h2>
            <FarmsList/>
        </div>
   )
}


export default AddFarm;