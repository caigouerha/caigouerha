import React from 'react'
import { NavLink } from 'react-router-dom'
import as from './index.json'
import './index.scss'

export default class Daoh extends React.Component {
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
        return (
            <div className='nav-daohang' onClick={this.onClick}>
                <div className='nav-dh-tou'>
                    LOFTER首页
                        <span className='nav-dh-xia'>▼</span>
                </div>
                <div className='nav-dh-yin' style={{ display: this.state.isShow ? "block" : "none" }}>
                    <ul>
                        {
                            as.data.map((item, index) => {
                                return <li key={index}>
                                    <NavLink to={item.linkUrl}>{item.name}</NavLink>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>

        )
    }

}