import React, { useState, useEffect } from "react";

export default function QuoteDay() {
  const [quoteText, setQuoteText] = useState("");

  const getQuotes = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(res => {
        const quote = res.content;
        const quoteAuthor = res.author;
        console.log(quote);
        setQuoteText(quote + " - " + quoteAuthor);
      });
  };
  useEffect(getQuotes, []);

  return <div className="quoteDay">{quoteText}</div>;
}
