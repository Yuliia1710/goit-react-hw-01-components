import {
  ContainerProfile,
  Img,
  ListStats,
  Item,
  Username,
  Tag,
  Location,
} from './Profile.styled';

import PropTypes from 'prop-types';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ContainerProfile>
      <div className="description">
        <Img src={avatar} alt={`${username}avatar`} className={avatar} />

        <Username>{username}</Username>
        <Tag>{`@${tag}`}</Tag>
        <Location>{location}</Location>
      </div>

      <ListStats>
        <Item>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </Item>
        <Item>
          <span>Views</span>
          <span>{stats.views}</span>
        </Item>
        <Item>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </Item>
      </ListStats>
    </ContainerProfile>
  );
};

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object,
};
