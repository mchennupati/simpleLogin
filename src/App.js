import React from "react";
import TickerForm from "./TickerForm";
import UserAccount from "./UserAccount";
import NewsBox from "./NewsBox";
import CalendarBox from "./CalendarBox";
import TickerBox from "./TickerBox";
import GraphBox from "./GraphBox";
import QuoteDay from "./QuoteDay";

export default function App() {
  return (
    <div>
      <div className="flex-grid-head">
        <header>
          <h3>K</h3>
        </header>
        <UserAccount />
      </div>

      <div className="searchQuote">
        <TickerForm />
        <QuoteDay />
      </div>

      <GraphBox />
      <NewsBox />
      <div className="flex-grid-body">
        <CalendarBox />
        <TickerBox />
      </div>
    </div>
  );
}
