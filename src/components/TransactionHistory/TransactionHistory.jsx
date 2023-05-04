import PropTypes from 'prop-types';
import {
  StatisticContainer,
  Table,
  TableHead,
  Tr,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <StatisticContainer>
      <Table>
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>

        <tbody>
          {items.map(item => (
            <Tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </StatisticContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
