import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart'
import { Pie } from 'react-chartjs-2'

ChartJs.register(ArcElement, Tooltip, Legend)

export const data = {

}

export default function PortfolioChart() {
    return <Pie data={data}/>
}