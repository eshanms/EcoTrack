import React from "react";

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold text-green-700 mb-4">Welcome to EcoTrack 🌱</h2>
      <p className="text-lg text-gray-700">
        Understand your carbon footprint, track it with our calculator, and get personalized tips to reduce it.
      </p>
      <img src="/logo.png" alt="EcoTrack Logo" className="mx-auto mt-6 w-40" />
    </div>
  );
}
