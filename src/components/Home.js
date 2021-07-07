import React from "react"
import { Link } from 'react-router-dom'

class Home extends React.Component{

    // state = {
    //     id: ""
    // }

    // handleSubmit = (event) =>{
    //     event.preventDefault();
    // }

render(){
    return (
        <div>
            <h1 className="my-5">TEXTO INICIAL ARRUMAR</h1>
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
            
            {/* <form onSubmit={this.handleSubmit}> */}
                
            {/* </form> */}
        </div>
    )
}
   
}

export default Home