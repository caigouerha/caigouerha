import React, { Component } from 'react'

//引入组件
import Nav from '../nav'
import Home from '../home'
import Conent from '../conent'
import Footer from '../footer'


//结构路由
import { BrowserRouter } from 'react-router-dom'
import './index.scss'

export default class Html extends Component {
    render() {
        return (
        <div style={{background:"white"}} className='tt'>

            {/* 头部部分 */}
            <Nav />

            <BrowserRouter>
                {/* 路由导航部分 */}
                <Home/>

                {/* 路由内容部分 */}
                <Conent/>
            </BrowserRouter>

            {/* 底部部分 */}
            <Footer/>

        </div>
        )
    }
}
