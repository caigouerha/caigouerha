import React, { Component } from 'react'

//引入样式
import  '../conent/index.css'

//引入路由
import { Route,Redirect } from 'react-router-dom'

//引入组件
import Zc from '../zc'
import Dl from '../dl'

export default class Conent extends Component {
    render() {
        return (
            <div className='conent_box'>
               <Route path='/zc'  component={Zc}/>
               <Route path='/dl' component={Dl}/>
               {/* <Redirect to='/zc' /> */}
            </div>
        )
    }
}
