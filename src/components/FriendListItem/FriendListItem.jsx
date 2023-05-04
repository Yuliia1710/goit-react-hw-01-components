import PropTypes from 'prop-types';
import { Items, Status } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <Items key={id}>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Items>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
