import React, { Component } from 'react'

import { BrowserRouter,NavLink,Route,} from 'react-router-dom'

import './index.scss'

export default class Article extends Component {
    render() {
        return (
            <div className='box'>
                <div className='xing'>
                    <div className='ao'>
                    LOFTER 
                    </div>
                    <select className='xiao'>
                        <option>喜欢的文章</option> 
                    </select>
                </div>
                <div className='qing'>
                    暂无内容
                </div>
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

            </div>
        )
    }
}
