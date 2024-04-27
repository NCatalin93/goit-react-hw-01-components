import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <div className={styles.friends}>
      <ul className={styles.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={styles.friendsItem} key={id}>
            <span
              className={`${styles.friendsStatus} ${styles[isOnline]}`}
            ></span>
            <img className={styles.avatar} src={avatar} alt={name} />
            <p className={styles.friendsName}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
