import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Projects from '../pages/projects/Projects';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Home />
    </BrowserRouter>
  );
};

export default Router;
