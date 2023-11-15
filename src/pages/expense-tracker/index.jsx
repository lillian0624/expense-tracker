import React, { useState } from 'react';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useGetTransaction } from '../../hooks/useGetTransaction';


export const ExpenseTracker = () => {
    
    const {addTransaction}= useAddTransaction();
    const {transactions}= useGetTransaction();

    const [description,setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType,setTransactionType]=useState("expense");

    const onSubmit=(e)=>{
        e.preventDefault()
        addTransaction({
            description,
            transactionAmount,
            transactionType,
        })
    };

  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1>Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            <h2>$0.00</h2>
          </div>
          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>$0.00</p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p>$0.00</p>
            </div>

            <form className="add-transaction" onSubmit={onSubmit}>
              <input 
               type="text" 
               placeholder="Description" 
               required
               onChange={(e) => setDescription(e.target.value)} />
              <input 
               type="number"
               placeholder="Amount" 
               required 
               onChange={(e) => setTransactionAmount(e.target.value)} 
              />
              <input
                type="radio"
                id="expense"
                name="transactionType"
                value="expense"
                required
                onChange={(e) => setTransactionType(e.target.value)} 
              />
              <label htmlFor="expense">Expense</label>
              <input
                type="radio"
                id="income"
                name="transactionType"
                value="income"
                required
                onChange={(e) => setTransactionType(e.target.value)} 
              />
              <label htmlFor="income">Income</label>

              <button type="submit">Add Transaction</button>
            </form>
          </div>
        </div>
      </div>
      <div className='transactions'>
        <h3>Transactions</h3>
        {transactions ? (
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <h4>{transaction.description}</h4>
                <p>
                  $ {transaction.transactionAmount}.{' '}
                  <label>{transaction.transactionType}</label>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions available.</p>
        )}
      </div>
    </>
  );
};
