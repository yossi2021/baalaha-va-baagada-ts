import { createContext, useState } from 'react';
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

interface Context {
  userName: string;
  handleLogout: Function
  login: Function;
  isAdmin: boolean;
}

export const AppContext = createContext<Context | null>(null);

export enum StatusEnum {
  active ="פעיל",
  expired = "לא בתוקף",
  banned ="לא במערכת"
}

function App() {
  const [users, setUsers] = useState <Array<IUser>>([]);
  const [isAdmin, setIsAdmin] = useState(false);
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
            setIsAdmin(json.isAdmin);
            setUserName(json.name);
            navigate('/books');
            
        })
}
  
  return (
    <AppContext.Provider value={{
      userName,
       handleLogout,
        login,
        isAdmin
        }}>
      <Header />
      <ToastContainer />
      
      
      <Routes>
        {/* this is only for the deleteuser and adduser functions */}
        
          {/* <Route 
            path="/"
            element={<><HeaderForm addUser={addUser} 
            />
            {
        users.length === 0 &&
        <Message
          type="warning"
          showButton={false}
        >
          <div>
            אין משתמשים להצגה
          </div>
          </Message>
      }
        <Message
          type="success"
          user={newUser}
          showButton={true}
        >
        משתמש חדש: <span className='fw-bold'>
          {newUser?.name}
        </span>, נוסף בהצלחה
        </Message>
      
        <Message
          type="info"
          user={deletedUser}
          showButton={true}
        >
       
        משתמש <span className='fw-bold'>
          {deletedUser?.name}
        </span>, נמחק מהמערכת.
        </Message>
        <Table users={users} deleteUser={deleteUser}/>
        <Home />
            </>}
            
            /> */}
            
      
          <Route 
            path='/'
            element={<Home />}
            />
          <Route 
            path='/aboutUs'
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
            path='/books'
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
    
    </AppContext.Provider>
  );
}

export default App;
