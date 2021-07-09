import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar"
import ForumList from "./forum/ForumList"

class Home extends React.Component{

render(){
    return (
        <div>
            <Navbar />
            <h1 className="my-5"> Feel free to browse the community forum, your dumb question might be the same as mine!</h1>
            <div className="container container-md">
                <div className="d-flex justify-content-between justify-content-md-around">
                <Link 
                    to={`/login`}>
                    <button type="submit" className="btn btn-primary">
                        Log In
                    </button>
                </Link>
            
                <Link 
                    to={`/newdummy`}>
                    <button type="submit" className="btn btn-primary">
                        Become a Dummy!
                    </button>
                </Link>
                </div>
            </div>
            < ForumList/>
        </div>
    )
}   
}

export default Home;
