import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import HeaderForm from './components/HeaderForm';

import Home from './pages/Home/Home';
import Message from './components/Message';
import Table, { IUser } from './components/Table';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';



export enum StatusEnum {
  active ='active',
  expired = 'expired',
  banned ='banned'
}

function App() {
  const [users, setUsers] = useState <Array<IUser>>([]);
  const [newUser,setNewUser] = useState<IUser>();
  const [deletedUser,setDeletedUser] = useState<IUser>();

  function addUser(newUser: IUser) {
    newUser.id =(new Date()).getTime();
    const updated = [...users, newUser];
    setNewUser(newUser);
    setUsers(updated);
  }

  function deleteUser(userDel: IUser) {
    const updated = users.filter(user => user.id !== userDel.id);
    setUsers(updated);
    setDeletedUser(userDel);
  }

  return (
    <>
      <Header/>
      <Routes>
          <Route 
            path="/"
            element={<Home/>}
            />
      </Routes>

      <Routes>
          <Route 
            path="/AboutUs"
            element={<AboutUs/>}
            />
      </Routes>

      <HeaderForm addUser={addUser}/>
      {
        users.length === 0 &&
        <Message
          type="warning"
          showButton={false}
        >
          <div>
            No users to display
          </div>
          </Message>
      }
        <Message
          type="success"
          user={newUser}
          showButton={true}
        >
        New user: <span className='fw-bold'>
          {newUser?.name}
        </span>, has been added succrssfully.
        </Message>
      
        <Message
          type="info"
          user={deletedUser}
          showButton={true}
        >
       
        User <span className='fw-bold'>
          {deletedUser?.name}
        </span>, has been deleted.
        </Message>
      

      <Table users={users} deleteUser={deleteUser}/>
      {/* <Status/> */}
      <Home/>

      
      
    </>
  );
}

export default App;
