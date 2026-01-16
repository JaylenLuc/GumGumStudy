import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, postUser, findUser } from './store/UserSlice';

function App() {
  const dispatch = useDispatch();
  // in App.jsx
  const users = useSelector(state => state.users.items);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users from Spring Boot</h1>
      <button onClick={() => dispatch(fetchUsers())}>Refresh Users</button>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        dispatch(postUser({ name: username }));
      }}>
        <input type="text" name="username" placeholder="Enter username" defaultValue={"New User"} />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users && users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        dispatch(findUser({ name: username }));
      }}>
        <input type="text" name="username" placeholder="Enter username" defaultValue={"New User"} />
        <button type="submit">Find User</button>
      </form>
    </div>
  );
}

export default App;