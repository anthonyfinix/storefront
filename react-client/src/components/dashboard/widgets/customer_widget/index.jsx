import React from 'react';
import style from './style.module.css';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import getCustomer from '../../../customer/api/getCustomer';
const CustomerWidget = ({ }) => {
    const [chartData, setChartData] = React.useState();
    const [labels, setLabels] = React.useState();
    const data = {
        labels: labels,
        datasets: [
            {
                data: chartData,
                fill: true,
                tension: 0.3,
                backgroundColor: '#4793eb',
                borderColor: '#2873d6',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type:'time',
                grid: {
                    display: false
                },
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };
    const handleProduct = (products) => {
        console.log(products)
        let total = 0;
        let data = []
        let label = []
        for (let product of products) {
            label.push(new Date(product.created_at))
            data.push(total += 1);
        }
        setLabels(label)
        setChartData(data);

    }
    React.useEffect(() => {
        getCustomer({ skip: 0, limit: 30 })
            .then(response => handleProduct(response.result))
    }, [])
    return (
        <div className={style.wrapper}>
            <h3>Customer</h3>
            <Line
                data={data}
                width={"100%"}
                height={180}
                options={options} />
        </div>
    )
}

export default CustomerWidget;