"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

type DataPoint = {
  hour: number;
  time: number;
};

const data: DataPoint[] = [
  { hour: 0, time: 37.5 },
  { hour: 1, time: 40.5 },
  { hour: 2, time: 42.0 },
  { hour: 3, time: 43.5 },
  { hour: 4, time: 43.5 },
  { hour: 5, time: 41.5 },
  { hour: 6, time: 40.0 },
  { hour: 7, time: 41.0 },
  { hour: 8, time: 35.0 },
  { hour: 9, time: 30.0 },
  { hour: 10, time: 27.0 },
  { hour: 11, time: 22.5 },
  { hour: 12, time: 19.0 },
  { hour: 13, time: 23.0 },
  { hour: 14, time: 20.0 },
  { hour: 15, time: 24.5 },
  { hour: 16, time: 28.0 },
  { hour: 17, time: 28.5 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const value = payload[0].value as number;
    const hour = Number(label);
    const timeDisplay =
      hour === 0
        ? "12:00 AM"
        : hour < 12
          ? `${hour}:00 AM`
          : hour === 12
            ? "12:00 PM"
            : `${hour - 12}:00 PM`;

    return (
      <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-xl ring-1 ring-gray-200/40 text-sm">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
          <p className="font-medium text-gray-900">{timeDisplay}</p>
        </div>
        <p className="text-blue-600 font-semibold text-base">{value} min</p>
        <p className="text-xs text-gray-700 mt-0.5">Avg taxi-out time</p>
      </div>
    );
  }
  return null;
};

export default function TaxiOutChart() {
  const formatXAxisLabel = (hour: number) => {
    if (hour % 3 === 0) {
      return hour === 0
        ? "12AM"
        : hour < 12
          ? `${hour}AM`
          : hour === 12
            ? "12PM"
            : `${hour - 12}PM`;
    }
    return "";
  };

  return (
    <div className="w-full h-[380px] sm:h-[420px] p-4 sm:p-6 bg-zinc-800 from-slate-50 to-blue-50/30 dark:from-zinc-900 dark:to-zinc-800 shadow  border border-gray-100 dark:border-zinc-700">
      <div className="mb-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 text-zinc-400">
          Average Taxi-Out Time by Hour
        </h2>
        <p className="text-zinc-400 dark:text-gray-400 text-xs sm:text-sm">
          Aircraft ground delay patterns throughout the day
        </p>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data} margin={{ top: 10, right: 25, left: 35, bottom: 35 }}>
          <CartesianGrid strokeDasharray="2 4" stroke="#e2e8f0" strokeOpacity={0.6} vertical={false} />

          <XAxis
            dataKey="hour"
            type="number"
            domain={[0, 17]}
            tick={{ fontSize: 10, fill: "#64748b" }}
            tickLine={{ stroke: "#94a3b8", strokeWidth: 1 }}
            axisLine={{ stroke: "#cbd5e1", strokeWidth: 1 }}
            tickFormatter={formatXAxisLabel}
            interval={0}
            height={30}
            label={{
              value: "Time of Day",
              position: "insideBottom",
              offset: -5,
              style: { fontSize: "12px", fill: "#475569", fontWeight: 500 },
            }}
          />

          <YAxis
            domain={[15, 45]}
            tick={{ fontSize: 10, fill: "#64748b" }}
            tickLine={{ stroke: "#94a3b8", strokeWidth: 1 }}
            axisLine={{ stroke: "#cbd5e1", strokeWidth: 1 }}
            tickFormatter={(v) => `${v}m`}
            label={{
              value: "Taxi-Out Time",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: "12px", fill: "#475569", fontWeight: 500 },
            }}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#3b82f6", strokeWidth: 1, strokeDasharray: "4 4", strokeOpacity: 0.4 }} />

          <Line
            type="monotone"
            dataKey="time"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={{
              fill: "#fff",
              stroke: "#3b82f6",
              strokeWidth: 2,
              r: 4,
            }}
            activeDot={{
              r: 6,
              fill: "#1d4ed8",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />

          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-6 text-[11px] sm:text-xs text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          Peak: 3–4 AM
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Optimal: 12 PM
        </div>
      </div>
    </div>
  );
}
