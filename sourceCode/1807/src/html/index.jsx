import React, { Component } from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom'
=======

//引入路由
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'

//引入组件
>>>>>>> c0e20b7b9d95a05ea4c608c0e67a76c230b2be9d
import Home from '../home/index.jsx'
import Zc from "../ly_wock/html"
<<<<<<< HEAD
import About from '../about/index.jsx';
import Article from '../Article';
export default class Html extends Component {
    render() {
        return (
            <div className='quan'>
                <Router>
                    <Route path='/' exact component={() => {
                        return <Zc />
                    }} />
                    <Route path='/zc' component={() => {
                        return <Zc />
                    }} />
                    <Route path='/dl' component={() => {
                        return <Zc />
                    }} />
                    <Route path="/home" component={() => {
                        return <Home />
                    }} />
                    <Route path="/fb" component={() => {
                        return <About />
                    }}/>
                    <Route path="/xh" component={() => {
                        return <Article />
                    }}/>
                </Router>
=======

//引入样式
import './index.scss'

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
            </Router>
>>>>>>> c0e20b7b9d95a05ea4c608c0e67a76c230b2be9d
            </div>

        )
    }
}
