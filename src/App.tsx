import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import HeaderForm from './components/HeaderForm';

import Home from './pages/Home/Home';

import Table, { IUser } from './components/Table';
import Message from './components/Message';


export enum StatusEnum {
  active ='active',
  expired = 'expired',
  banned ='banned'
}

function App() {
    const [users, setUsers] = useState <Array<IUser>>([]);
  const [newUser,setNewUser] = useState<IUser>();

  function addUser(newUser: IUser) {
    newUser.id =(new Date()).getTime();
    const updated = [...users, newUser];
    setUsers(updated);
    setNewUser(newUser);
  }

  function deleteUser(userId: number) {
    const updated = users.filter(user => user.id !== userId);
    setUsers(updated);
  }

  return (
    <>
      <Header/>
      <HeaderForm addUser={addUser}/>
      {
        users.length === 0 &&
        <Message
          type="warning"
        >
          <div>
            No users to display
          </div>
          </Message>
      }

      {
        newUser &&
        <Message
          type="success"
          
        >
        New user:
        <span className='fw-bold'>
          {newUser?.name}
        </span> , has been added succrssfully.
        </Message>
      }

      <Table users={users} deleteUser={deleteUser}/>
      {/* <Status/> */}
      <Home/>
      
    </>
  );
}

export default App;
