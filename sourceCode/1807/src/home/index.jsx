import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//引入数据
import as from './index.json'

//引入样式
import './index.scss'

//引入组件
// import  from ''

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    onClick = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    
    render() {
        // console.log(as.data1)
        return (
            <div>
                <div className='zheng'>
                    {/* logo */}
                    <div className='tou'>
                        <div className='logo'></div>
                    </div>
                    {/* 导航 */}
                    <div className='nav-daohang'>
                        <div className='nav-dh-tou' onClick={this.onClick}>
                            LOFTER首页
                        <span className='nav-dh-xia'>▼</span>
                        </div>
                        <div className='nav-dh-yin' style={{ display: this.state.isShow ? "block" : "none" }}>
                            <ul>
                                {
                                   as.data.map((item,index) => {
                                        return <li key={index}>
                                            <NavLink to={item.linkUrl}>{item.name}</NavLink>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='shou-xia'>
                    <div className='shou-xia-z'>
                        <p>LOFTER元氣客服醬</p>
                        <span>小嘤回忆之---西北甘肃自驾游</span>
                    </div>
                    <div className='zi-zheng'>
                        <p className='zi-yi'>
                            <p className='zi-yi-tu'></p>
                            前几天小嘤收到了一份惊喜的礼物，是一个兰州小伙伴特地寄过来的手抓羊肉，超级好吃的！！
                            <br/>
                        </p>
                        <p className='zi-er'>
                            说起这个兰州的小伙伴，就不得不说起我的西北之旅，那是小嘤记忆中一次值得纪念的自驾游。 <br/>
                            记得那个时候我们是从上海出发，直飞兰州的，小嘤这边为了给大家更方便介绍以及分享这次旅行，特地整理了下当时的行程。
                        </p>
                        <p className='zi-san'>Day1:</p>
                        <p>上海浦东飞兰州中川</p>
                        <p>兰州是一个直形城市,所有建筑都是一字往外排开,因此机场到市中心路...</p>
                    </div>
                </div>
            </div>
        )
    }
}
