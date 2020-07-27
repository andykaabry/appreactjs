import React, { useState, createContext, useReducer, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
import HooksReducer from './Component/Hooks/Functional/HooksReducer';
import Tagihan from './Component/Hooks/Functional/Tagihan';
import MenuComp from './Component/MenuComp';
import HomeComp from './Component/HomeComp';
import RegisterComp from './Component/RegisterComp';
import LoginComp from './Component/LoginComp';
import Home from './Component/Fungsional/Home';
import Supplier from './Component/Class/Supplier';
import TambahSupplier from './Component/Class/TambahSupplier';
import EditSupplier from './Component/Class/EditSupplier';

// import BootstrapComp from './Component/Class/BootstrapComp';
//import Parent from './Component/Class/Parent';
// import logo from './logo.svg';
// import './App.css';
// import Home from './Component/Fungsional/Home';
// import Beranda from './Component/Class/Beranda';

//Context
export const AuthContext = createContext()

//Inisiasi state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state

  }
}

export const keranjangContext = createContext()

const App = (props) => {

  const [value, setValue] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <switch>

        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <NavbarComp />
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/dashboard"
              }}
            />
          }

          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/barang" component={ListComp} />
          <Route exact path="/barang/tambahbarang" component={TambahComp} />
          <Route exact path="/barang/editbarang" component={EditComp} />
          <Route exact path="/supplier" component={Supplier} />
          <Route exact path="/supplier/tambahsupplier" component={TambahSupplier} />
          <Route exact path="/supplier/ubahsupplier" component={EditSupplier} />
          <Route exact path="/produk" component={ProductComp} />
          <Route exact path="/reducer" component={HooksReducer} />

          {/*<Route exact path="/detail/:id" component={DetailComp} />
            <Route exact path="/kelas" component={KelasComp} />
            <Route exact path="/hooks" component={HooksComp} />
            <Route exact path="/useeffects" component={HooksUseEffects} />
            <Route exact path="/tagihan" component={Tagihan} />*/}


        </AuthContext.Provider>
      </switch>
    </BrowserRouter>
  );
}

export default App;
