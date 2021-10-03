import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts'
const data = [
    { name: 'Jaunuary', uv: 400, pv: 450, amt: 2400 },
    { name: 'February', uv: 600, pv: 1000, amt: 2400 },

    { name: 'May', uv: 800, pv: 650, amt: 2400 },

    { name: 'July', uv: 400, pv: 900, amt: 2400 },

    { name: 'October', uv: 430, pv: 700, amt: 2400 },

    { name: 'December', uv: 250, pv: 1450, amt: 2400 },
]

const SLineChart = () => {
    return (
        <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
            <LineChart data={data}>
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#ef233c"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#2b2d42"
                    strokeWidth={2}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default SLineChart
