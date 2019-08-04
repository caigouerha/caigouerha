import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from '../home/index'
import './index.scss'
import Fb from '../home/index'
import Xh from '../xh/index'

export default class Html extends Component {
    render() {
        return (
            <div className='quan'> 
            <Router>
                <Route path='/' exact component={()=>{
                    return <div>loging</div>
                }}/>
                <Route path="/home" component={()=>{
                    return <Home/>
                }} />
                <Route path='/fb' component={Fb}/>
                <Route path='/xh' component={Xh}/>

            </Router>
            </div>
            
        )
    }
}
