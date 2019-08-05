import React, { Component } from 'react'

<<<<<<< HEAD
import { NavLink, Route, } from 'react-router-dom'

import './index.scss'
import Daoh from '../home/daoh'
=======
import { BrowserRouter,NavLink,Route,} from 'react-router-dom'

import './index.scss'
>>>>>>> c0e20b7b9d95a05ea4c608c0e67a76c230b2be9d

export default class Article extends Component {
    render() {
        return (
            <div className='box'>
<<<<<<< HEAD
                <div className='zheng'>
                    {/* logo */}
                    <div className='tou'>
                        <div className='logo'></div>
                    </div>
                    {/* 导航 */}

                    <Daoh />
=======
                <div className='xing'>
                    <div className='ao'>
                    LOFTER 
                    </div>
                    <select className='xiao'>
                        <option>喜欢的文章</option> 
                    </select>
>>>>>>> c0e20b7b9d95a05ea4c608c0e67a76c230b2be9d
                </div>
                <div className='qing'>
                    暂无内容
                </div>
<<<<<<< HEAD
                <ul className='mask'>
                    <li className='bad'>
                        <NavLink to='/home'>LOFTER首页</NavLink>
                    </li>
                    <li className='bad'>
                        <NavLink to='/signout'>退出</NavLink>
                    </li>
                    <li className='bad'>
                        <NavLink to='/pc'>PC视图</NavLink>
                    </li>
                </ul>
                <main>
                    <Route path='/home' component={() => <div>首页</div>} />
                    <Route path='/signout' component={() => <div>退出</div>} />
                    <Route path='/pc' component={() => <div>pc</div>} />
                </main>
=======
                <BrowserRouter>
                    <ul className='mask'>
                        <li className='bad'>
                           <NavLink to='/home'>LOFTER首页</NavLink> 
                        </li>
                        <li className='bad'>
                           <NavLink to='/signout'>退出</NavLink> 
                        </li>
                        <li className='bad'>
                           <NavLink to='/pc'>PC视图</NavLink> 
                        </li>
                    </ul>
                    <main>
                        <Route path='/home' component={()=><div>首页</div>} />
                        <Route path='/signout' component={()=><div>退出</div>} />
                        <Route path='/pc' component={()=><div>pc</div>} />
                    </main>
                </BrowserRouter>
>>>>>>> c0e20b7b9d95a05ea4c608c0e67a76c230b2be9d

            </div>
        )
    }
}
