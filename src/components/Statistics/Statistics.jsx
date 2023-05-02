import { Section, Item, List, Label, Percentage } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2>Upload stats</h2>}

      <List>
        {stats.map(el => (
          <Item key={el.id}>
            <Label>{el.label}</Label>
            <Percentage>{el.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
