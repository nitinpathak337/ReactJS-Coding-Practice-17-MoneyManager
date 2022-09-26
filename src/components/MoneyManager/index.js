import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: 'Income',
    income: 0,
    expense: 0,
  }

  title = event => {
    this.setState({title: event.target.value})
  }

  amount = event => {
    this.setState({amount: event.target.value})
  }

  type = event => {
    this.setState({type: event.target.value})
  }

  add = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    if (title !== '' && amount !== '') {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount,
        type,
      }
      if (type === 'Income') {
        this.setState(prevState => ({
          transactionList: [...prevState.transactionList, newTransaction],
          title: '',
          amount: '',
          type: 'Income',
          income: parseInt(prevState.income) + parseInt(amount),
        }))
      } else {
        this.setState(prevState => ({
          transactionList: [...prevState.transactionList, newTransaction],
          title: '',
          amount: '',
          type: 'Income',
          expense: parseInt(prevState.expense) + parseInt(amount),
        }))
      }
    }
  }

  deleteItem = (id, type, amount) => {
    const {transactionList} = this.state

    if (type === 'Income') {
      this.setState(prevState => ({
        transactionList: transactionList.filter(eachItem => eachItem.id !== id),
        income: parseInt(prevState.income) - parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        transactionList: transactionList.filter(eachItem => eachItem.id !== id),
        expense: parseInt(prevState.expense) - parseInt(amount),
      }))
    }
  }

  render() {
    const {transactionList, title, amount, type, income, expense} = this.state

    return (
      <div className="bg">
        <div className="welcome-card">
          <h1 className="heading-name">Hi, Richard</h1>
          <p className="para">
            Welcome back to your
            <span className="span-para"> Money Manager</span>
          </p>
        </div>
        <ul className="money-details-container">
          <MoneyDetails income={income} expense={expense} />
        </ul>
        <div className="transaction-history-container">
          <form className="add-transaction-form">
            <h1 className="form-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              className="input-el"
              type="text"
              placeholder="TITLE"
              onChange={this.title}
              value={title}
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              className="input-el"
              type="text"
              value={amount}
              placeholder="AMOUNT"
              onChange={this.amount}
            />
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <select className="input-el" onChange={this.type} value={type}>
              {transactionTypeOptions.map(eachItem => (
                <option key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="form-button" onClick={this.add}>
              Add
            </button>
          </form>
          <ul className="history-container">
            <h1 className="history-heading">History</h1>
            <li className="list-header" key={uuidv4()}>
              <p className="header">Title</p>
              <p className="header">Amount</p>
              <p className="header">Type</p>
            </li>
            {transactionList.map(eachItem => (
              <TransactionItem
                key={eachItem.id}
                transactionItem={eachItem}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
