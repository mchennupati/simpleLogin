import React from "react";

export default function TickerForm() {
  return (
    <div className="tickerForm">
      <input
        type="text"
        placeholder="Argentinian 100y Bond or US CPI or AAPL or any text really..."
        name="searchTicker"
      />
    </div>
  );
}
