import React from "react";
import { Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Mik",
    text: "Learning React is great!",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <div className="centered">
        <p>No quote found!</p>
      </div>
    );
  }

  return (
    <>
      <HighlightedQuote {...quote} />

      <Outlet />
    </>
  );
};

export default QuoteDetail;
