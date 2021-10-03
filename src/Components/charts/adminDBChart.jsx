import {
    BarChart,
    Bar,
    ResponsiveContainer,
} from 'recharts'
const data = [
    { name: 'Jaunuary', uv: 100, pv: 450, amt: 2400 },
    { name: 'February', uv: 150, pv: 800, amt: 2400 },

    { name: 'May', uv: 200, pv: 650, amt: 2400 },

    { name: 'July', uv: 180, pv: 900, amt: 2400 },

    { name: 'October', uv: 210, pv: 700, amt: 2400 },

    { name: 'December', uv: 250, pv: 850, amt: 2400 },
]

const SBarChart = () => {
    return (
        <ResponsiveContainer width="50%" aspect={4.0 / 3.0}>
            <BarChart data={data}>
                <Bar dataKey="pv" fill="#ef233c" />
                <Bar dataKey="uv" fill="green" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default SBarChart
