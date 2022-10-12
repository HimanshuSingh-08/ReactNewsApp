
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 6 ;
  apikey = process.env.REACT_APP_NEWS_API_KEY;
  
  render() {
    return (
      <div>

        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<News key="general" apikey={this.apikey} pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" apikey={this.apikey} pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" apikey={this.apikey} pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key="technology" apikey={this.apikey} pageSize={this.pageSize} country="in" category="technology" />} />
            <Route exact path="/health" element={<News key="health" apikey={this.apikey} pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" apikey={this.apikey} pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" apikey={this.apikey} pageSize={this.pageSize} country="in" category="sports" />} />


          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

