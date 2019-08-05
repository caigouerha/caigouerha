import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Home from '../home/index.jsx'
import './index.scss'
import Zc from "../ly_wock/html"
export default class Html extends Component {
    render() {
        return (
            <div className='quan'> 
            <Router>
            <Route path='/zc'  component={()=>{
                    return <Zc/>
                }}/>
                <Route path='/dl'  component={()=>{
                    return <Zc/>
                }}/>
                <Route path="/home" component={()=>{
                    return <Home/>
                }} />
                <Route path='/' exact  component={()=>{
                    return <Zc/>
                }}/>
                {/* <Redirect to="/zc" /> */}
            </Router>
            </div>
            
        )
    }
}
