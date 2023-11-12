import React, { useEffect, useState } from 'react';
import styles from './App.css';

export default function Transactions() {
  const [userTransactions, setTransactions] = useState([]);

   const apiURL = "http://localhost:4001/transactions"

  useEffect(() => {
  fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setTransactions(data)
  })
},[])
    
  return (
    <>
    <h1>User Transactions</h1>
    <ul>
     {userTransactions.map(transaction => (
       <li key={transaction.id}>
          <p>Date: {transaction.date}</p>
          <p>Description: {transaction.description}</p>
          <p>Category: {transaction.category}</p>
          <p>Amount: {transaction.amount}</p> 
          <hr />
       </li>
     ))}
    </ul>
    
    </>
  );

  }


