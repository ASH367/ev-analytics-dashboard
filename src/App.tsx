import { useMemo, useState } from "react";
import { sessions } from "./data/mock";
import Filters from "./components/Filters";
import KpiCards from "./components/KpiCards";
import TripsChart from "./components/TripsChart";

export default function App() {
  const [vehicle, setVehicle] = useState("All");

  const filtered = useMemo(
    () => (vehicle === "All" ? sessions : sessions.filter((s) => s.vehicle === vehicle)),
    [vehicle]
  );

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 20, fontFamily: "system-ui, Arial" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 26, fontWeight: 900 }}>EV Analytics Dashboard</div>
          <div style={{ opacity: 0.75, marginTop: 4 }}>React + TypeScript + ECharts • KPI + Charts</div>
        </div>
        <Filters vehicle={vehicle} setVehicle={setVehicle} />
      </div>

      <div style={{ marginTop: 16 }}>
        <KpiCards data={filtered} />
      </div>

      <div style={{ marginTop: 16 }}>
        <TripsChart data={filtered} />
      </div>
    </div>
  );
}