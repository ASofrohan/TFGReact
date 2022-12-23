import { useEffect, useState } from "react"
import axios from "axios"

const FarmsList =  () => {

    const [farms,setFarms] = useState([])

    const fetchData = async()=>{
        try{
            const res = await axios.get("https://data.mongodb-api.com/app/data-fvlyw/endpoint/rGranjas")
            setFarms(res.data)
        }catch(error){
            console.log(error)
        }

    }

    useEffect(() =>{
        fetchData()
    }, [])

    return(
        farms.map((farm, index) => {
            return(
                <div className='farm' key={farm._id}>
                    <h3 className='farm_name'>Name: {farm.nombre}</h3>
                    <p className='farm_pos'>Pos1: {farm.pos[0]}</p>
                    <p className='farm_pos'>Pos2: {farm.pos[1]}</p>
                </div>
            )
        })
    )
}

export default FarmsList