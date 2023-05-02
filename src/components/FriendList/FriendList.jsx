import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            status={item.isOnline}
            avatar={item.avatars}
            name={item.name}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
