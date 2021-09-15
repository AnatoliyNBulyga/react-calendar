// core
import React, {FC, useEffect} from 'react';
// components
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
// ant
import {Layout} from "antd";
//styles
import './App.css';
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";


const App: FC = () => {

  const {setIsAuth, setUser} = useActions();
  useEffect(() => {
      if(localStorage.getItem('auth')) {
        setUser({username: localStorage.getItem('username' || '')} as IUser);
        setIsAuth(true);
      }
  }, [setUser, setIsAuth]);
  return (
    <div className="App">
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    </div>
  );
}

export default App;
