import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        );
      })}
    </List>
  );
};

export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
