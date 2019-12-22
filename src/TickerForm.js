import React from "react";

export default function TickerForm() {
  return (
    <div className="tickerForm">
      <input
        class="mainSearch"
        type="text"
        placeholder="Argentina 100y Bond or US CPI or AAPL..."
        name="searchTicker"
      />
    </div>
  );
}
