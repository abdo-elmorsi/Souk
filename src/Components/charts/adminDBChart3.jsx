import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts'
const data = [
    { name: 'Jaunuary', uv: 400, pv: 450, av: 420, amt: 2400 },
    { name: 'February', uv: 600, pv: 1000, av: 800, amt: 2400 },

    { name: 'May', uv: 800, pv: 650, av: 200, amt: 2400 },

    { name: 'July', uv: 400, pv: 900, av: 420, amt: 2400 },

    { name: 'October', uv: 430, pv: 700, av: 920, amt: 2400 },

    { name: 'December', uv: 250, pv: 1450, av: 1120, amt: 2400 },
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
                    stroke="blue"
                    strokeWidth={2}
                />
                <Line
                    type="monotone"
                    dataKey="av"
                    stroke="green"
                    strokeWidth={2}
                />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default SLineChart
