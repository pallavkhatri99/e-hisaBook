import React,{ Suspense, lazy } from 'react';
import { Navigate, Route, Routes  } from 'react-router-dom';
import { ConfigProvider, Spin, } from 'antd';
import './App.css';

const Home = lazy(()=> import('./pages/home'));
const Dashboard = lazy(()=> import('./pages/dashboard'));
const DashboardFeatures = lazy(()=> import('./components/mainComponent/dashboardFeatures'));
const Customers = lazy(()=> import('./pages/customers'));
const InDevelopment = lazy(()=> import('./pages/inDevelopment'));
const PageNotFound = lazy(()=> import('./pages/pageNotFound'));

const config = {
  theme:{
    token: {
      colorPrimary: "#52c41a",
      algorithm: "dark",
    },
    components: {
      Button: {
        algorithm: true
      }
    },
  }
}



function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spin fullscreen={true} style={{position:'fixed',top:'30%'}} tip="Loading...." size="large"><div className="content" /></Spin>}>
        <ConfigProvider {...config} >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/App' element={<Dashboard />} >
            <Route path='' element={<Navigate to="Dashboard" />} />
            <Route path='Dashboard' element={<DashboardFeatures />} />
            <Route path='Customers' element={<Customers />} />
            <Route path='Reports' >
              <Route index />
              <Route path='Sales' element={<InDevelopment />} />
              <Route path='Bill' element={<InDevelopment />} />
              <Route path='Record' element={<InDevelopment />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </ConfigProvider>
      </Suspense> 
    </div>
  );
}

export default App;
