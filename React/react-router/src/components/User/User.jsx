import React from "react";
import { useParams } from "react-router-dom";

export default function User()
{
    const {userId} = useParams()
    return (<>
        <div className=" text-center bg-orange-600 text-white text-3xl py-3">
            User: {userId}
        </div>
    </>)
}