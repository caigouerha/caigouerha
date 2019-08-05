import React, { Component } from 'react'

//引入样式
import  '../home/index.css'

//引入路由
import { NavLink } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div className='home_box'>
               <ul className='ul'>
                   <li>
                       <NavLink to='/zc'>注册</NavLink>
                   </li>
                   <li>
                       <NavLink to='/dl'>登录</NavLink>
                   </li>
               </ul>
            </div>
        )
    }
}
