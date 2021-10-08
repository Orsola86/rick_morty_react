import React, { useState } from "react";
import Characters from "./Characters";
import Navigation from "./Navigation";

function App() {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  return (
    <div className="App">
      <Navigation setPage={setPage} page={page} maxPage={maxPage} />
      <Characters page={page} setMaxPage={setMaxPage} />
    </div>
  );
}

export default App;
