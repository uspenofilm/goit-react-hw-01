import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr className={css.tableHead}>
          <th className={css.tableHeadItem}>Type</th>
          <th className={css.tableHeadItem}>Amount</th>
          <th className={css.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          console.log(item);
          return (
            <tr className={css.tableBody} key={item.id}>
              <td className={css.tableBodyItem}>{item.type}</td>
              <td className={css.tableBodyItem}>{item.amount}</td>
              <td className={css.tableBodyItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
