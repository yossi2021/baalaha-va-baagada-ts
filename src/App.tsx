import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import Signup from './auth/Signup';
import Login from './auth/Login';
import RouetGuard from './auth/RouteGuard';
import AdminOnly from './auth/AdminOnly';
import { setToken } from './auth/tokenMgmt';
import { postRequest } from './services/apiService';

interface ILoginData{
  email: string;
  password: string;
}

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

  const [userName, setUserName] = useState('');

  const navigate= useNavigate();

  // useEffect(() => {
  //     const name = localStorage.getItem('user');
  //     if (!name) return;
  //     setUserName(name);
  // }, []
  // )

      function handleLogout(){
          localStorage.clear();
          setUserName('')
          navigate('/login');
      }

      function login(data: ILoginData){
        const res = postRequest(
            'users/login',
            data,
            false
        );

        if (!res) return;
    
        res.then(response => response.json())
        .then(json => {
            setToken(json.token);
            localStorage.setItem('admin', json.isAdmin)
            // localStorage.setItem('user', json.name)
            setUserName(json.name);
            navigate('/books');
            
        })
}
  
  return (
    <>
      <Header 
        userName={userName}
        handleLogout={handleLogout}
      />
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
            path='/AboutUs'
            element={<AboutUs />}
            />
          <Route 
            path='/order'
            element={<Order  />}
            />
          <Route 
            path='/offers'
            element={<Offers  />}
            />
          <Route 
            path='/Books'
            element={
              <RouetGuard>
                <Books />
              </RouetGuard>}
            />
          <Route 
            path='/edit/:id'
            element={
              <RouetGuard>
                <Edit />
              </RouetGuard>
            }
            />
          <Route 
            path='/signup'
            element={<Signup />}
            />
          <Route 
            path='/login'
            element={<Login handler={login}/>}
            />
          <Route 
            path='/admin'
            element={<AdminOnly />}
            />
            
      </Routes>
    
    </>
  );
}

export default App;
