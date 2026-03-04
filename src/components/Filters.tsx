type Props = { vehicle: string; setVehicle: (v: string) => void };

export default function Filters({ vehicle, setVehicle }: Props) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        Vehicle
        <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} style={{ padding: 8 }}>
          <option value="All">All</option>
          <option value="Model 3">Model 3</option>
          <option value="Model Y">Model Y</option>
          <option value="Cybertruck">Cybertruck</option>
        </select>
      </label>
    </div>
  );
}
