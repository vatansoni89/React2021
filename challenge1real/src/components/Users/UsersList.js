import Card from "../UI/Card";
import styles from './UserList.module.css';

const UsersList = (props) => {
  return (
    <Card className={styles.users}> 
      <ul>
        {props.users.map((x) => (
          <li key={x.id}>
            Name: {x.name} Age: {x.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
