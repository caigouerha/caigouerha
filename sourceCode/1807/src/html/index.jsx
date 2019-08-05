import React, { Component } from 'react'

//引入路由
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'

//引入组件
import Home from '../home/index.jsx'
import Zc from "../ly_wock/html"

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
            </div>
            
        )
    }
}
