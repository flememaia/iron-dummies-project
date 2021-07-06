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
            <h1>TEXTO INICIAL ARRUMAR</h1>
            
            <Link 
                to={`/login`}
                ><button type="submit" className="btn btn-primary">
                    Log In
                </button>
            </Link>
            <Link 
                to={`/newdummy`}
                ><button type="submit" className="btn btn-primary">
                    Become a Dummy!
                </button>
            </Link>
            {/* <form onSubmit={this.handleSubmit}> */}
                
            {/* </form> */}
        </div>
    )
}
   
}

export default Home