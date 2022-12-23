import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react"
const Home = () => {

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() =>{
        console.log(location)
    }, [location])

    return(
         <div>
             <h1>HOME</h1>
             <p onClick={()=>{navigate("/anadir-granja")}}>Añadir granja</p>
         </div>
    )
 }
 
 
 export default Home;