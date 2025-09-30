"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", contributions: 2500, expenses: 1200 },
  { month: "Feb", contributions: 3000, expenses: 1500 },
  { month: "Mar", contributions: 2200, expenses: 900 },
  { month: "Apr", contributions: 2800, expenses: 1300 },
  { month: "May", contributions: 3100, expenses: 1100 },
  { month: "Jun", contributions: 2600, expenses: 1400 },
];

const chartConfig = {
  contributions: { color: "var(--primary-color)" },
  expenses: { color: "var(--accent-color)" },
};

export function IddirChart() {
  return (
    <div>
      <Card className="w-full h-full flex flex-col">
        <CardHeader>
          <CardTitle>Galii fi Baasii</CardTitle>
          <CardDescription>Ilaalcha Galii fi Baasii Ji’oota</CardDescription>
        </CardHeader>

        <CardContent className="w-full h-[300px] md:h-[400px]">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
                <CartesianGrid vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient
                    id="fillContributions"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--primary-color)"
                      stopOpacity={0.5}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--primary-color)"
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                  <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--accent-color)"
                      stopOpacity={0.5}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--accent-color)"
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="contributions"
                  type="monotone"
                  fill="url(#fillContributions)"
                  stroke="var(--primary-color)"
                  stackId="a"
                />
                <Area
                  dataKey="expenses"
                  type="monotone"
                  fill="url(#fillExpenses)"
                  stroke="var(--accent-color)"
                  stackId="a"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>

        <CardFooter>
          <div className="flex w-full justify-between text-sm">
            <div className="flex items-center gap-2 font-medium">
              <TrendingUp className="h-4 w-4 text-primary" />
              Galiin dabalaa jira
            </div>
            <div className="flex items-center gap-2 font-medium">
              <TrendingDown className="h-4 w-4 text-amber-500" />
              Baasiin hir’achaa jira
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default IddirChart;
