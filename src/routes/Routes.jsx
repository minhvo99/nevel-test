import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
