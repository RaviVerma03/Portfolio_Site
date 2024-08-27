import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioItem from '../components/PortfolioItemPage';
import PortfolioPage from '../components/PortfolioPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path='/contact' Component={ContactPage}/>
                <Route path='/portfolio' Component={PortfolioPage}/>
                <Route path='/portfolio/:id' Component={PortfolioItem}/>
                <Route path='*' Component={NotFoundPage} />
            </Routes>
        </div>
    </BrowserRouter>
)

export default AppRouter