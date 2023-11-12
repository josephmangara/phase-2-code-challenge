
import React, { useState, useEffect } from "react";

function App() {
  const [userTransactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTransactions(Transactions);
      });
  }, []);

  return 
  <div>
    {userTransactions}
  </div>;
}

export default App;