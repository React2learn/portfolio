"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Taxi-Out Time per Runway"

interface TaxiOutData {
    runway: string;
    taxiOutTime: number;
}

const chartData: TaxiOutData[] = [
    { runway: '22R', taxiOutTime: 40 },
    { runway: '13L', taxiOutTime: 39 },
    { runway: '04L', taxiOutTime: 38 },
    { runway: '31L', taxiOutTime: 37.5 },
    { runway: '13R', taxiOutTime: 37 },
    { runway: '31R', taxiOutTime: 36.5 },
    { runway: '22L', taxiOutTime: 35.5 },
    { runway: '04R', taxiOutTime: 35 }
]

const chartConfig = {
    taxiOutTime: {
        label: "Taxi-Out Time (min)",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function TaxiOutTimeChart() {
    const totalFlights = React.useMemo(
        () => chartData.length,
        []
    )

    const averageTime = React.useMemo(
        () => {
            const total = chartData.reduce((acc, curr) => acc + curr.taxiOutTime, 0)
            return (total / chartData.length).toFixed(1)
        },
        []
    )

    return (
        <Card className="py-0 rounded-none">
            <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
                    <CardTitle>Average Taxi-Out Time per Runway</CardTitle>
                    <CardDescription>
                        Taxi-out time in minutes for different airport runways
                    </CardDescription>
                </div>
                <div className="flex">
                    <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
                        <span className="text-muted-foreground text-xs">
                            Total Runways
                        </span>
                        <span className="text-lg leading-none font-bold sm:text-3xl">
                            {totalFlights}
                        </span>
                    </div>
                    <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t border-l px-6 py-4 text-left sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
                        <span className="text-muted-foreground text-xs">
                            Average Time
                        </span>
                        <span className="text-lg leading-none font-bold sm:text-3xl">
                            {averageTime} min
                        </span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[350px] w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                            top: 20,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="runway"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            domain={[0, 45]}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tick={{ fontSize: 12 }}
                            label={{
                                value: 'Taxi-Out Time (min)',
                                angle: -90,
                                position: 'insideLeft',
                                style: { textAnchor: 'middle' }
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[180px]"
                                    labelFormatter={(label) => `Runway ${label}`}
                                    formatter={(value) => [`${value} min`, "Taxi-Out Time"]}
                                />
                            }
                        />
                        <Bar
                            dataKey="taxiOutTime"
                            fill="var(--bar-color)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}