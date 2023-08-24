import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import HeaderForm from './components/HeaderForm';

import Home from './pages/Home/Home';
import Message from './components/Message';
import Table, { IUser } from './components/Table';

import AboutUs from './pages/AboutUs';
import Order from './pages/Order';
import Offers from './pages/Offers/Offers';
import { ToastContainer } from 'react-toastify';
import Books from './pages/Books/Books';
import Edit from './pages/Edit';



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
      <Header />
      <ToastContainer />
      
      
      <Routes>
          <Route 
            path="/"
            element={<><HeaderForm addUser={addUser} />
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
        <Home />
            </>}
            
            />
            
      
          <Route 
            path="/AboutUs"
            element={<AboutUs />}
            />
          <Route 
            path="/order"
            element={<Order  />}
            />
          <Route 
            path="/offers"
            element={<Offers  />}
            />
          <Route 
            path="/Books"
            element={<Books  />}
            />
          <Route 
            path="/edit/:id"
            element={<Edit  />}
            />
            
      </Routes>
    
    </>
  );
}

export default App;
