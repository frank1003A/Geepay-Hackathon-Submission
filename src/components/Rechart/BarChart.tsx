import { useState } from "react";
import {
  Bar,
  CartesianGrid,
  Cell,
  BarChart as RechartBarChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload) {
    return (
      <div
        className="relative mx-2"
        style={{
          transform: `translate(-60px,-110px)`,
        }}
      >
        <div className="bg-black text-white text-xs rounded py-[5px] px-4 right-0 bottom-full rounded-md">
          {`$ ${payload ? Number(payload[0].value).toFixed(0) : 0}.000`}
          <svg
            className="absolute text-black h-2 w-full left-0 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
    );
  }

  return null;
};

const BarChart = ({ data }: { data: { name: string; pv: number }[] }) => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartBarChart
        width={500}
        height={255}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5,
        }}
        barSize={20}
        style={{
          zIndex: "0 !important",
        }}
        onMouseMove={(state) => {
          if (state.activeTooltipIndex) {
            setActive(state.activeTooltipIndex);
          } else {
            setActive(null);
          }
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="30%" stopColor="#34CAA5" />
            <stop offset="80%" stopColor="rgba(52, 202, 165, 0.2)" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 10, right: 10 }}
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickMargin={10}
        />
        <YAxis
          fontSize={12}
          tickMargin={10}
          tickLine={false}
          axisLine={false}
          allowDecimals
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={false}
          allowEscapeViewBox={{ x: true, y: true }}
        />
        <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
        <Bar
          dataKey="pv"
          barSize={30}
          radius={[20, 20, 0, 0]}
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              className="transition"
              fill={
                entry.pv === Math.max(...data.map((d) => d.pv)) ||
                active === index
                  ? "url(#colorUv)"
                  : "rgba(52, 202, 165, 0.10)"
              }
            />
          ))}
        </Bar>
      </RechartBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
