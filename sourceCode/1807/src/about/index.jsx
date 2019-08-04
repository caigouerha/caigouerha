import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink ,Redirect} from 'react-router-dom'
import './index.scss'
import Tp from './fb/tp'
import Wz from './fb/wz'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lieB: [
                {
                    id: 0,
                    name: '发布文字',
                    url: '/wz'
                },
                {
                    id: 1,
                    name: '发布图片',
                    url: '/tp'
                }

            ],
            c: true,
            xy: true
        }
    }
    xy = () => {
        this.setState({
            xy: !this.state.xy
        })
    }
    render() {
        return (
            <BrowserRouter>
                <div className='zhu'>
                    <div className='nei'>
                        {/* <select id="sex" >
                            <option><NavLink to='/fb'>{this.state.lieB.a}</NavLink></option>
                            <option><NavLink to='/tp'>{this.state.lieB.b}</NavLink></option>
                        </select> */}
                        <div className='top'>
                            <div className='top-l' onClick={this.xy}>
                                {/* <div>{this.state.lieB[0].name}</div> */}
                                <Redirect to='/wz'/>
                                <Route path="/:id"
                                    component={({ location }) => {
                                        if (location.id) {
                                            return <div className="HP-T-R-route">{this.state.lieB[`${location.id}`].name}</div>
                                        } else {
                                            return <div className="HP-T-R-route">发布文字</div>
                                        }
                                    }} />
                                <div className='aa' style={{ display: this.state.xy ? 'none' : 'block' }} >
                                    {
                                        this.state.lieB.map((item) => {
                                            return <p key={item.id} onClick={this.huany}>
                                                <NavLink to={{
                                                    pathname: `${item.url}`,
                                                    id: `${item.id}`
                                                }}
                                                    activeClassName='HP-T-R-navlist'
                                                >{item.name}</NavLink>
                                            </p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <main className='main'>
                            <Route path='/wz' component={(props) => {
                                return <Wz />
                            }}></Route>
                            <Route path='/tp' component={(props) => {
                                return <Tp />
                            }}></Route>
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
