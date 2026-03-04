import type { Session } from "../data/mock";

const fmt = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 2 });

export default function KpiCards({ data }: { data: Session[] }) {
  const miles = data.reduce((a, s) => a + s.miles, 0);
  const kwh = data.reduce((a, s) => a + s.kwh, 0);
  const cost = data.reduce((a, s) => a + s.chargingCost, 0);
  const eff = miles > 0 ? (kwh / miles) * 100 : 0; // kWh/100mi

  const cards = [
    { label: "Total Miles", value: `${fmt(miles)} mi` },
    { label: "Energy Used", value: `${fmt(kwh)} kWh` },
    { label: "Avg Efficiency", value: `${fmt(eff)} kWh/100mi` },
    { label: "Charging Cost", value: `$${fmt(cost)}` },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
      {cards.map((c) => (
        <div key={c.label} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12 }}>
          <div style={{ fontSize: 12, opacity: 0.75 }}>{c.label}</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 6 }}>{c.value}</div>
        </div>
      ))}
    </div>
  );
}