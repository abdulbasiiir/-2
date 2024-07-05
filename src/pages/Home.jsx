import { useState, useEffect } from "react";
import axios from 'axios';


const Home = () => {
    const [users, setUsers] = useState([]);

        useEffect(()=>{
            axios('https://jsonplaceholder.typicode.com/users')
            .then(({data}) =>{
                setUsers(data);
            })
        }, [])
    return (
        
        <div>
            <h1>Home</h1>
            {
                users.map(item=>{
                    return <h1 key={item.id}>{item.name}</h1>
                })
            }
        </div>
    )
}

export default Home;