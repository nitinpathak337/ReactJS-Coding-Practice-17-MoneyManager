// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expense} = props

  return (
    <>
      <li className="list-item-money-details balance">
        <img
          className="money-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="para-money">Your Balance</p>
          <p className="money" testid="balanceAmount">
            Rs {income - expense}
          </p>
        </div>
      </li>
      <li className="list-item-money-details income">
        <img
          className="money-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="para-money">Your Income</p>
          <p className="money" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="list-item-money-details expenses">
        <img
          className="money-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="para-money">Your Expenses</p>
          <p className="money" testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
