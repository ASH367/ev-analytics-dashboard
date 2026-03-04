export type Session = {
    id: string;
    vehicle: "Model 3" | "Model Y" | "Cybertruck";
    date: string; // YYYY-MM-DD
    miles: number;
    kwh: number;
    chargingCost: number;
  };
  
  export const sessions: Session[] = [
    { id: "S-1001", vehicle: "Model 3", date: "2026-02-20", miles: 42, kwh: 11.2, chargingCost: 4.1 },
    { id: "S-1002", vehicle: "Model Y", date: "2026-02-21", miles: 31, kwh: 9.4, chargingCost: 3.35 },
    { id: "S-1003", vehicle: "Cybertruck", date: "2026-02-22", miles: 58, kwh: 19.8, chargingCost: 7.2 },
    { id: "S-1004", vehicle: "Model 3", date: "2026-02-23", miles: 25, kwh: 7.1, chargingCost: 2.55 },
    { id: "S-1005", vehicle: "Model Y", date: "2026-02-24", miles: 64, kwh: 18.0, chargingCost: 6.5 },
  ];