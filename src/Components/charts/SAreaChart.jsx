import {
    AreaChart,
    Tooltip,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts'
const data = [
    { name: 'Jaunuary', uv: 100, pv: 450, amt: 2400 },
    { name: 'February', uv: 150, pv: 1000, amt: 2400 },

    { name: 'May', uv: 200, pv: 650, amt: 2400 },

    { name: 'July', uv: 180, pv: 900, amt: 2400 },

    { name: 'October', uv: 210, pv: 700, amt: 2400 },

    { name: 'December', uv: 250, pv: 1450, amt: 2400 },
]

const SAreaChart = () => {
    return (
        <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
            <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#2b2d42"
                    fill="#6f74b3"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default SAreaChart
