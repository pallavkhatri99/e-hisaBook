import React,{ Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(()=> import('./pages/home'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading..</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </Suspense> 
      
    </div>
  );
}

export default App;
