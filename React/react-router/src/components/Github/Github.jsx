import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Github()
{
    const {githubId} = useParams()

    return (
        <>
            <div className="bg-slate-600 text-2xl text-center text-white py-3">
                <h1>
                    Github Followers: {data.followers}
                </h1>
            </div>
        </>
    )
}

export default function infoLoader()
{
    const [data,setData] = useState({})
    useEffect(() =>{
        fetch(`https://api.github.com/users/${githubId}`)
        .then((res) => res.json())
        .then((data) => {setData(data)
    console.log(data.followers)}
    )
    }, [])
}