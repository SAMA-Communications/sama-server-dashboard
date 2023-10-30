import {
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export const LineChartComponent = ({
  data,
  value,
  name,
  lineColor,
  gradientColor,
}) => {
  const renderCustomizedLabel = (props) => {
    const { x, y, value } = props;

    return value ? (
      <g transform={`translate(${x},${y})`}>
        <text
          x={`${value}`.length * 4}
          y={0}
          dy={-5}
          textAnchor="end"
          fill="#666"
        >
          {value}
        </text>
      </g>
    ) : null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
      >
        <defs>
          <linearGradient
            id={`colorUv${gradientColor}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor={gradientColor} stopOpacity={0.7} />
            <stop offset="95%" stopColor={gradientColor} stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis dataKey={name} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={value}
          stroke={lineColor}
          fillOpacity={1}
          fill={`url(#colorUv${gradientColor})`}
        >
          <LabelList dataKey={value} content={renderCustomizedLabel} />
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};
