import {useQuery} from "@tanstack/react-query"
import Axios from "axios";


export const Cat =() =>{
    const { data, error, isLoading, refetch } = useQuery({
        data: 'catData',
        queryFn: ()=>{
            return Axios.get("https://catfact.ninja/fact")
            .then(res=>{
                return res.data
            })
        }
    });

        if(isLoading){
            return <h2>Loading...</h2>
        }

    return (
        <div className="cat-container">
            <h2>{data?.fact}</h2>
            <button onClick={()=>refetch()}>Did you know?</button>
        </div>
    )

}


