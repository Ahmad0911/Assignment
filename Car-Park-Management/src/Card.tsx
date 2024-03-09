import React, { useEffect, useState } from "react";
import data from "./data.json";
import "./Card.css";

export function Card() {
    const [users] = useState(data);
    // const nameValue = "first_name";

    useEffect(() => {
        console.log(users)
    }, []);

    return (
        <>
            {users.map((user) => {
                return (
                    <div className="card">
                        <div className="same">
                            <div className="dot">&#xFE19;</div>
                            <div className="tod">&#xf08d;</div>
                        </div>
                        <img src={user.picture.medium} alt="Avatar" style={{ width: "25%" }} />
                        <div className="container">
                            <h4>{user.name.title} {user.name.first} {user.name.last}</h4>
                            <p className="web">{user.location.country}, {user.location.state}, {user.location.city}</p>
                            <p>{user.cell}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>

                )
            })}

        </>


    )
}