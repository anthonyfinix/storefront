import style from './style.module.css';
import { Bar, Line } from 'react-chartjs-2';
const ProductWidget = ({ }) => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className={style.wrapper}>
            <Line
                data={data}
                width={100}
                height={100}
                options={options} />
        </div>
    )
}

export default ProductWidget;