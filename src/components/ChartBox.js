import React from 'react';
import Chart from "chart.js/auto";
import axios from 'axios';
import { Link } from 'react-router-dom';

class ChartBox extends React.Component {
    state = { //SUGESTÃO PEDRO PUXAR OBJETO SKILL INTEIRO
        // labels: [],
        values_m1: [],
        values_m2: [],
        values_m3: [],
        chart: null
    }

    // componentDidMount = () => {
    //     this.renderChart();
    // }

    componentDidMount = async() => {
        try{
            const response = await axios.get(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`);
            console.log(response.data)

            this.setState({
                // labels: Object.keys(response.data.skills),
                // values_m1: Object.values(response.data.skills),
                values_m1: [
                    response.data.functions_m1, 
                    response.data.basic_algorithms_m1, 
                    response.data.data_types_m1,
                    response.data.oop_basics_m1, 
                    response.data.functional_programming_m1, 
                    response.data.dom_m1, 
                    response.data.event_handling_m1,
                    response.data.component_development_m1,
                    response.data.state_management_m1,
                    response.data.props_m1,          
                    response.data.frontend_routing_m1,        
                    response.data.api_integration_m1,     
                    response.data.lifting_stateup_m1,
                    response.data.database_managment_m1, 
                    response.data.plan_and_model_database_m1,
                    response.data.implement_restful_apis_m1,
                    response.data.security_basics_m1,
                    response.data.persistente_login_m1 
                ],
                values_m2: [
                    response.data.functions_m2, 
                    response.data.basic_algorithms_m2, 
                    response.data.data_types_m2,
                    response.data.oop_basics_m2, 
                    response.data.functional_programming_m2, 
                    response.data.dom_m2, 
                    response.data.event_handling_m2,
                    response.data.component_development_m2,
                    response.data.state_management_m2,
                    response.data.props_m2,          
                    response.data.frontend_routing_m2,        
                    response.data.api_integration_m2,     
                    response.data.lifting_stateup_m2,
                    response.data.database_managment_m2, 
                    response.data.plan_and_model_database_m2,
                    response.data.implement_restful_apis_m2,
                    response.data.security_basics_m2,
                    response.data.persistente_login_m2 
                ],
                values_m3: [
                    response.data.functions_m3, 
                    response.data.basic_algorithms_m3, 
                    response.data.data_types_m3,
                    response.data.oop_basics_m3, 
                    response.data.functional_programming_m3, 
                    response.data.dom_m3, 
                    response.data.event_handling_m3,
                    response.data.component_development_m3,
                    response.data.state_management_m3,
                    response.data.props_m3,          
                    response.data.frontend_routing_m3,        
                    response.data.api_integration_m3,     
                    response.data.lifting_stateup_m3,
                    response.data.database_managment_m3, 
                    response.data.plan_and_model_database_m3,
                    response.data.implement_restful_apis_m3,
                    response.data.security_basics_m3,
                    response.data.persistente_login_m3 
                ]
              });
            this.renderChart();
        } catch (err){
            console.error(err);
        }
    }

    renderChart = () => {
        if(this.state.chart){
            this.state.chart.destroy()
        }
        const ctx = document.getElementById("chart").getContext("2d");
        const chartInstance = new Chart( ctx, {
            type: 'radar',
            data: {
                //ATUALIZAR DADOS DE ACORDO COM DADOS DA API
                // labels: this.state.labels,
                labels: [
                    'Functions',
                    'Basic algorithms',
                    'Data types',
                    'OOP basics',
                    'Functional programming',
                    'DOM',
                    'Event Handling',
                    'Component Development',
                    'State Management',
                    'Prop',
                    'Front-end Routing',        
                    'API Integration',
                    'Lifting State-Up',
                    'Database managment',
                    'Plan and model database',
                    'Implement Restful APIs',
                    'Security Basics',
                    'Persistente Login'
                ],
                datasets: [{
                    label: 'Module 1',
                    data: this.state.values_m1,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                },
                {
                    label: 'Module 2',
                    data: this.state.values_m2,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                },
                {
                    label: 'Module 3',
                    data: this.state.values_m3,
                    fill: true,
                    backgroundColor: 'rgba(27, 139, 61, 0.2)',
                    borderColor: 'rgb(27, 139, 61)',
                    pointBackgroundColor: 'rgb(27, 139, 61)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(27, 139, 61)'
                }
            ], 
            },
            options: {
                elements: {
                line: {
                    borderWidth: 3
                }
                }
            },
        })

        this.setState({ chart: chartInstance });
  };
    
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/h">
                        IronDummies
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/forumbasics">
                            Basics
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forumfrontend">
                            WebDev Front
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forumbackend">
                            WebDev Back
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forumhavenoidea">
                            Have no idea
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >
                            Track Your Progress
                            </Link>
                            <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                            <Link className="dropdown-item" to={`/updateskills/${this.state._id}`}>
                                Update Your Skills M1!
                            </Link>
                            <Link
                                className="dropdown-item"
                                to={`/updateskills_m2/${this.state._id}`}
                            >
                                Update Your Skills M2!
                            </Link>
                            <Link
                                className="dropdown-item"
                                to={`/updateskills_m3/${this.state._id}`}
                            >
                                Update Your Skills M3!
                            </Link>

                            <Link 
                                className="dropdown-item"
                                to={`/chart/${this.state._id}`}
                            >
                                Generate Your Report
                            </Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </nav>
                <h1>Componente ChartBox</h1>
                <canvas id="chart" width="200"></canvas>
            </div>
        )
    }
}

export default ChartBox