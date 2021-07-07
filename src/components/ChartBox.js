import React from 'react';
import Chart from "chart.js/auto";
// import axios from 'axios';

// import SelectForm from '../SelectForm';

class ChartBox extends React.Component {
    state = {
        // labels: [],
        // values: [],
        // filter: {
        //   startDate: "",
        //   endDate: "",
        //   currency: "",
        // },
        chart: null
    }

    componentDidMount = () => {
        this.renderChart();
    }
    // componentDidMount = async() => {
    //     try{
    //         const response = await axios.get(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`);
            
    //         this.setState({
    //             labels: Object.keys(response.data.skills),
    //             values: Object.values(response.data.skills),
    //           });
    //     } catch (err){
    //         console.error(err);
    //     }
    // }

    renderChart = () => {
        // if(this.state.chart){
        //     this.state.chart.destroy()
        // }
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
                    'DOM',
                    'Functional programming',
                    'Database managment',
                    'Plan and model database'
                ],
                  datasets: [{
                    label: 'My First Dataset',
                    // data: this.state.values,
                    data: [1, 0, 0, 3, 2, 5, 4],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                  }, 
                  {
                    label: 'My Second Dataset',
                    data: [1, 3, 2, 4, 3, 5, 5],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                  }
                ]
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
                <canvas id="chart" width="200"></canvas>
            </div>
        )
    }
}

export default ChartBox