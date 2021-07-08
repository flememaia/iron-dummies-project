import React from 'react';
import Chart from "chart.js/auto";
import axios from 'axios';

class ChartBoxBar extends React.Component {
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
                <h1>Componente ChartBoxBar</h1>
                <canvas id="chart" width="200"></canvas>
            </div>
        )
    }
}

export default ChartBoxBar