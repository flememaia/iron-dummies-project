import React from "react"
// import { Link } from 'react-router-dom'

class Home extends React.Component{

    state = {
        id: ""
    }

render(){
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>PUXAR O NOME DO USUÁRIO</h2>
            <h2>PUXAR A PONTUAÇÃO</h2>
            <h3>New here? Please create an account for a better experience!</h3>
            {/* <Link 
                className="" 
                to={`/updateskills/${id}`}
                key={id}
                >Update your Skills
            </Link> */}
        </div>
    )
}
   
}

export default Home