import ReactECharts from "echarts-for-react";
import type { Session } from "../data/mock";

export default function TripsChart({ data }: { data: Session[] }) {
  const byDate = [...data].sort((a, b) => a.date.localeCompare(b.date));
  const dates = byDate.map((s) => s.date);
  const miles = byDate.map((s) => s.miles);
  const efficiency = byDate.map((s) => (s.kwh / Math.max(s.miles, 1)) * 100);

  const option = {
    tooltip: { trigger: "axis" },
    legend: { data: ["Miles", "kWh/100mi"] },
    grid: { left: 40, right: 20, top: 40, bottom: 30 },
    xAxis: { type: "category", data: dates },
    yAxis: [{ type: "value", name: "Miles" }, { type: "value", name: "kWh/100mi" }],
    series: [
      { name: "Miles", type: "bar", data: miles },
      { name: "kWh/100mi", type: "line", yAxisIndex: 1, data: efficiency, smooth: true },
    ],
  };

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12 }}>
      <div style={{ fontWeight: 800, marginBottom: 8 }}>Trips & Efficiency</div>
      <ReactECharts option={option} style={{ height: 320 }} />
    </div>
  );
}