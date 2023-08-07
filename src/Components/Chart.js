import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Legend,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Category 1",
    value: 500,
    color: "#CB9488",
    fontSize: 6,
  },
  {
    name: "Category 2",
    value: 400,
    color: "#239B56",
  },
  {
    name: "Category 3",
    value: 200,
    color: "#FF5733",
  },
];

const CustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  return (
    <text x={380} y={y + 20} fill="#9F9F9F" textAnchor="middle" fontSize={12}>
      {value}
    </text>
  );
};

const customLegend = [
  {
    value: "Category 1",
    type: "circle",
    color: "#CB9488",
  },
  {
    value: "Category 2",
    type: "circle",
    color: "#239B56",
  },
  {
    value: "Category 3",
    type: "circle",
    color: "#FF5733",
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} layout="vertical" barCategoryGap="10%">
        <XAxis hide type="number" />
        <YAxis hide dataKey="name" type="category" />
        <Bar
          dataKey="value"
          fill="#8884d8"
          label={<CustomizedLabel />}
          barSize={35}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
        <Legend
          payload={customLegend}
          wrapperStyle={{
            fontSize: "12px",
            marginRight: "10px",
          }}
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
