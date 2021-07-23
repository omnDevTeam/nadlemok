import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Topbar from "../components/Topbar";
import Main from "../components/Main"
import Request from "../components/Request"
import './Home.css';



function Home ({match}){

    return(
        
        <div className="home">
            <div className="topbar">
                <Topbar></Topbar>
            </div>
            <div className="main">
               <Switch>

               <Route
                    path={match.path + 'request'}
                    render={props=> <Request {...props}/>}
                />

                <Route
                    path={match.path}
                    render={props=> <Main {...props}/>}
                />
                    
               </Switch>
            </div>

        </div>

    )


}

export default Home;