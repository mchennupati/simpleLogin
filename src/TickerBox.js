import React from "react";

export default function TickerBox() {
  return (
    <div className="tickerBox">
      {/* <h2>This is a set of Tickers</h2> */}
      <table>
        <tr>
          <th>date</th>
          <th>time</th>
          <th>event</th>
        </tr>

        <tr>
          <th>date1</th>
          <th>time1</th>
          <th>event1</th>
        </tr>
        <tr>
          <th>date2</th>
          <th>time2</th>
          <th>event2</th>
        </tr>
      </table>
    </div>
  );
}
