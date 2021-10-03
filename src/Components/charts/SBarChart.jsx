import {
    BarChart,
    Legend,
    Tooltip,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
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
        <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#ef233c" />
                <Bar dataKey="uv" fill="#2b2d42" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default SBarChart
