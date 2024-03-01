import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import Alerts from './Component/Alerts/Alerts';
import Layout from './Component/Layout/Layout';

export default function App() {
  return <>
      <Navbar/>
      <Layout/>
  </>
}
