import React from 'react';
import style from './style.module.css';
import { Line } from 'react-chartjs-2';
import getProduct from '../../../product/api/getProduct';
const ProductWidget = ({ }) => {
    const [chartData, setChartData] = React.useState();
    const [labels, setLabels] = React.useState();
    const data = {
        labels: labels,
        datasets: [
            {
                label: '',
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
        let total;
        let data = []
        let label = []
        for (let product of products) {
            label.push(new Date(product.created_at).toLocaleString('default', { month: 'long' }))
            data.push(total += 1);
        }
        setLabels(label)
        // setChartData(data);

    }
    React.useEffect(() => {
        getProduct({ skip: 0, limit: 30 })
            .then(response => handleProduct(response.result))
    })
    return (
        <div className={style.wrapper}>
            <h3>Product</h3>
            <Line
                data={data}
                width={"100%"}
                height={180}
                options={options} />
        </div>
    )
}

export default ProductWidget;