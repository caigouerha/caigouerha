import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../home/index.jsx'
import './index.scss'
import Zc from "../ly_wock/html"
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
            </div>

        )
    }
}
