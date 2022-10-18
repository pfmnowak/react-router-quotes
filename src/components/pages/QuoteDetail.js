import React, { useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return (
      <div className="centered">
        <p>No quote found!</p>
      </div>
    );
  }

  return (
    <>
      <HighlightedQuote {...loadedQuote} />
      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route
          path={"*"}
          element={
            <div className="centered">
              <Link
                className="btn--flat"
                to={`/quotes/${params.quoteId}/comments`}
              >
                Load Comments
              </Link>
            </div>
          }
        ></Route>
      </Routes>

      {/* <Outlet /> */}
    </>
  );
};

export default QuoteDetail;
