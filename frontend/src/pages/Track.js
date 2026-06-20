import React, { useState } from "react";

export default function Track() {
  const [carKm, setCarKm] = useState(0);
  const [flightHours, setFlightHours] = useState(0);
  const [diet, setDiet] = useState("meat-heavy");
  const [electricityKwh, setElectricityKwh] = useState(0);
  const [result, setResult] = useState(null);

  const calculate = async () => {
    const response = await fetch("http://localhost:5000/api/calculator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ carKm, flightHours, diet, electricityKwh })
    });
    const data = await response.json();
    setResult(data.total);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Track Your Footprint 🚗🍔🏠</h2>
      <div className="space-y-4">
        <input type="number" placeholder="Car km per week" value={carKm} onChange={e => setCarKm(e.target.value)} className="border p-2 w-full"/>
        <input type="number" placeholder="Flight hours per year" value={flightHours} onChange={e => setFlightHours(e.target.value)} className="border p-2 w-full"/>
        <select value={diet} onChange={e => setDiet(e.target.value)} className="border p-2 w-full">
          <option value="meat-heavy">Meat-heavy</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
        <input type="number" placeholder="Electricity kWh per month" value={electricityKwh} onChange={e => setElectricityKwh(e.target.value)} className="border p-2 w-full"/>
        <button onClick={calculate} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Calculate</button>
      </div>
      {result && <p className="mt-6 text-xl text-gray-800">Your footprint: <span className="font-bold">{result} kg CO₂/year</span></p>}
    </div>
  );
}
