import React, { Component } from 'react'

//引入样式
import '../dl/index.css'

//引入js文件
import pd from '../tool/index.js'


export default class Dl extends Component {
    constructor(){
        super()
        this.state ={
            userName:'', 
            passWord:''
        }
    }
    zclink(pandName ){
        let data = pd(this.state,pandName)
        console.log(data)
        if(data.status){
            alert(data.msg)
        }else{
            window.location.replace('/home')
        }
    }
    onHandleChange = ({target}) =>{
        this.setState({
            [target.name]:target.value
        })
    }
    render() {
        return (
            <div className='dl_box'>
               <input type="text"  onChange={this.onHandleChange} value={this.state.userName} name='userName'  placeholder='手机号(中国大陆)'/>
               <input type="passWord"  onChange={this.onHandleChange} value={this.state.passWord} name='passWord'  placeholder='设置密码(6~16位)'/>
               <p onClick={()=>this.zclink('dl')}>登录</p>
            </div>
        )
    }
}
