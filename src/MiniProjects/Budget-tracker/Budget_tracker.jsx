
import React, { useState } from 'react';
import "./Budget_tracker.css"

export default function BudgetTracker() {
    const [budget, setBudget] = useState(0);
    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState(0); // Initialized with 0
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (e) => {
        e.preventDefault();

        if (expenseName && expenseAmount > 0) {
            const newExpense = {
                id: expenses.length + 1,
                name: expenseName,
                amount: parseFloat(expenseAmount),
            };
            if (totalExpense + newExpense.amount > budget) {
                alert('Total expenses exceed the budget!');
                return;
            }
            setExpenses([...expenses, newExpense]);
            setExpenseName("");
            setExpenseAmount(0); 
        }
    };

    const handleRemoveExpense = (id) => {
        const updatedExpenses = expenses.filter(expense => expense.id !== id);
        setExpenses(updatedExpenses);
    };

    const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <div className="budget-tracker-container">
            <h1>Budget Tracker</h1>
            <div className="summary">
                <h2>Total Budget: ${isNaN(budget) ? '0' : budget.toFixed(2)}</h2>
                <h2>Total Expense: ${totalExpense.toFixed(2)}</h2>
                <h2>Remaining Amount: ${Math.max(budget - totalExpense, 0).toFixed(2)}</h2>
            </div>
            <div className="set-budget">
                <h3>Set Budget</h3>
                <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(parseFloat(e.target.value))}
                    placeholder="Enter the Budget"
                />
            </div>
            <form onSubmit={handleAddExpense}>
                <div className="add-expense">
                    <h3>Add Expense</h3>
                    <input
                        type="text"
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                        placeholder="Expense Name"
                    />
                    <input
                        type="number"
                        value={expenseAmount}
                        onChange={(e) => setExpenseAmount(parseFloat(e.target.value))}
                        placeholder="Expense Amount"
                    />
                    <button type="submit">Add Expense</button>
                </div>
            </form>
            <div className="expenses-list">
                <h3>Expenses List</h3>
                <ul>
                    {expenses.map((expense) => (
                        <li key={expense.id}>
                            {expense.name}: ${expense.amount.toFixed(2)}
                            <button onClick={() => handleRemoveExpense(expense.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
