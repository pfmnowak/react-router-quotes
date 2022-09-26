import { Navigate, Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/quotes" replace />} />
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
        <Route path="/quotes/:quoteId/comments" element={<Comments />} />
      </Route>
      <Route path="/new-quote" element={<NewQuote />} />
    </Routes>
  );
}

export default App;
