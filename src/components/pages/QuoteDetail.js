import React from "react";
import { Outlet, useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>

      <Outlet />
    </>
  );
};

export default QuoteDetail;
