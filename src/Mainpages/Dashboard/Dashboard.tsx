import React from 'react';
import {Link, Outlet} from "react-router-dom";
import NavBar from "../NavBar";


const Dashboard = () => {
    return (
        <>
            <header id="header">
                <NavBar>
                    <Link to='../Startseite'>Startseite</Link>
                    <Link to='../Dashboard/Badges'>Badges</Link>
                    <Link to='../Dashboard/Sammlung'>Dashboard</Link>
                </NavBar>
            </header>
            <body id="body">
            <section className="services section" id="services">
                <div className="container">
                    <Outlet/>
                </div>
            </section>
            </body>
        </>

    );
}

export default Dashboard;
