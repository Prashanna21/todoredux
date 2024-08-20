import React , {useState, useContext} from "react";
import UserContext from "../context/UserContext";

export default function Login()
{   

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return( <>
        <h2>
            Login
        </h2>

        <input type="text" placeholder="Username" value={username} 
        onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </>)
}