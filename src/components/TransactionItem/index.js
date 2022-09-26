// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionItem, deleteItem} = props
  const {id, title, amount, type} = transactionItem

  const onDelete = () => {
    deleteItem(id, type, amount)
  }

  return (
    <li className="list-header-values">
      <p className="header-values">{title}</p>
      <p className="header-values">{amount}</p>
      <p className="header-values">{type}</p>
      <button
        className="delete-button"
        type="button"
        onClick={onDelete}
        testid="delete"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
