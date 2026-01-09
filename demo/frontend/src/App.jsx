import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, postUser } from './store/UserSlice';

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
      <button onClick={() => dispatch(postUser({ name: "New User" }))}>add User</button>
      <ul>
        {users?.items && users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;