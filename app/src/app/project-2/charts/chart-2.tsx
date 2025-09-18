"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Taxi-Out Time per Airline";

interface AirlineData {
  airline: string;
  taxiOutTime: number;
}

const airlineData: AirlineData[] = [
  { airline: "AAL", taxiOutTime: 44 },
  { airline: "SWA", taxiOutTime: 42 },
  { airline: "UAL", taxiOutTime: 41 },
  { airline: "AKJ", taxiOutTime: 40 },
  { airline: "AI", taxiOutTime: 40 },
  { airline: "BAW", taxiOutTime: 39 },
  { airline: "AFR", taxiOutTime: 39 },
  { airline: "IGO", taxiOutTime: 38 },
  { airline: "EVA", taxiOutTime: 38 },
  { airline: "SDA", taxiOutTime: 37 },
  { airline: "RYR", taxiOutTime: 37 },
  { airline: "KLM", taxiOutTime: 37 },
  { airline: "DAL", taxiOutTime: 36 },
  { airline: "TAP", taxiOutTime: 36 },
  { airline: "SAS", taxiOutTime: 36 },
  { airline: "CPA", taxiOutTime: 35 },
  { airline: "VTI", taxiOutTime: 35 },
  { airline: "ANA", taxiOutTime: 35 },
  { airline: "ETD", taxiOutTime: 34 },
  { airline: "JAL", taxiOutTime: 34 },
  { airline: "UAE", taxiOutTime: 33 },
  { airline: "JBU", taxiOutTime: 33 },
  { airline: "VIR", taxiOutTime: 33 },
  { airline: "ACA", taxiOutTime: 32 },
  { airline: "EZY", taxiOutTime: 32 },
  { airline: "SIA", taxiOutTime: 32 },
  { airline: "QTR", taxiOutTime: 31 },
  { airline: "DLH", taxiOutTime: 31 },
  { airline: "THY", taxiOutTime: 30 },
  { airline: "QFA", taxiOutTime: 30 },
];

const chartConfig = {
  taxiOutTime: {
    label: "Taxi-Out Time (min)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AirlineTaxiOutChart() {
  const totalAirlines = React.useMemo(() => airlineData.length, []);
  const averageTime = React.useMemo(() => {
    const total = airlineData.reduce((acc, curr) => acc + curr.taxiOutTime, 0);
    return (total / airlineData.length).toFixed(1);
  }, []);

  return (
    <Card className="py-0 rounded-none">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle>Average Taxi-Out Time per Airline</CardTitle>
          <CardDescription>
            Taxi-out time in minutes for different airlines
          </CardDescription>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
            <span className="text-muted-foreground text-xs">Total Airlines</span>
            <span className="text-lg leading-none font-bold sm:text-3xl">
              {totalAirlines}
            </span>
          </div>
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t border-l px-6 py-4 text-left sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
            <span className="text-muted-foreground text-xs">Average Time</span>
            <span className="text-lg leading-none font-bold sm:text-3xl">
              {averageTime} min
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[350px] w-full">
          <BarChart
            accessibilityLayer
            data={airlineData}
            margin={{ left: 12, right: 12, top: 20, bottom: 20 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="airline"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              domain={[0, 50]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12 }}
              label={{
                value: "Taxi-Out Time (min)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[180px]"
                  labelFormatter={(label) => `Airline ${label}`}
                  formatter={(value) => [`${value} min`, "Taxi-Out Time"]}
                />
              }
            />
            <Bar dataKey="taxiOutTime" fill="var(--bar-color)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
