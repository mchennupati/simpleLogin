import React from "react";
import TickerForm from "./TickerForm";
import UserAccount from "./UserAccount";
import NewsBox from "./NewsBox";
import CalendarBox from "./CalendarBox";
import TickerBox from "./TickerBox";
import GraphBox from "./GraphBox";

export default function App() {
  return (
    <div>
      <header>
        <h3>Konudu</h3>
      </header>
      <UserAccount />
      <TickerForm />
      <GraphBox />
      <div className="flex-grid">
        <CalendarBox />
        <TickerBox />
      </div>
      <NewsBox />
    </div>
  );
}
