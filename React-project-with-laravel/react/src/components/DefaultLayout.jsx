import React from "react";
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {

    const {user,token} = useStateContext();
    if(!token){

        return <Navigate to="/GuestLayout/login"/>
    }
    return (

        <div id="defaultLayout">
            <aside>
                <Link to="/users">Users</Link>
                <Link to="/dashboard">dashboard</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        User Info
                    </div>
                </header>
            </div>
            <Outlet/>
        </div>
    );
}
