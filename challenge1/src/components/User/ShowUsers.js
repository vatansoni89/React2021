import ShowUser from './ShowUser';

const Users = (props) => {
  const userList = props.users.map((x) => (
    <ShowUser key={x.id} id={x.id} name={x.name} age={x.age} />
  ));
  return <ul>{userList}</ul>;
};

export default Users;
