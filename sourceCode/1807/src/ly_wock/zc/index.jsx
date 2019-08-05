import React, { Component } from 'react'

//引入样式
import '../zc/index.css'

//引入js文件
import pd from '../tool/index.js'

export default class Zc extends Component {
    constructor(){
        super()
        this.state ={
            userName:'', 
            passWord:'',
            email:'',      
            passWordEnd:''
        }
    }
    zclink( pandName ){
        let data = pd(this.state,pandName)
        if(data.status){
            alert(data.msg)
        }else{
            alert('注册成功！')
            window.location.replace('/dl')
        }
    }
    onHandleChange = ({target}) =>{
        this.setState({
            [target.name]:target.value
        })
    }
    render() {
        return (
            <div className='zc_box'>
               <input type="text" onChange={this.onHandleChange} value={this.state.userName} name='userName' placeholder='手机号(中国大陆)'/>
               <input type="text" onChange={this.onHandleChange} value={this.state.email} name='email' placeholder='验证码'/>
               <input type="password" onChange={this.onHandleChange} value={this.state.passWord} name='passWord' placeholder='设置密码(6~16位)'/>
               <input type="password" onChange={this.onHandleChange} value={this.state.passWordEnd} name='passWordEnd' placeholder='确认密码'/>
               <p onClick={()=>this.zclink('zc')}>注册</p>
            </div>
        )
    }
}
