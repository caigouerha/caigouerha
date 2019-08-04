import React, { Component } from 'react'
import '../index.scss'

export default class Wz extends Component {
    constructor() {
        super()
        this.state = {
            xia: true
        }
    }
    xia = () => {
        this.setState({
            xia: !this.state.xia
        })
    }
    render() {
        return (
            <div className='wz-box'>
                <form action="" className='wz-zheng'>
                    <div htmlFor="" className='wz-shang'>
                        <label htmlFor="" >
                            <input className='wz-wz' type="text" name="" id="" placeholder='文章标题' />
                        </label>
                        <label htmlFor="">
                            <input className='wz-zw' type="text" name="" id="" placeholder='正文' />
                        </label>
                    </div>
                    <div className='xia-xx'>
                        <div className='xia-xx-zi' onClick={this.xia}>选项</div>
                        <div className='xia-fb' style={{ display: this.state.xia ? 'none' : 'block' }}>
                            <label htmlFor="">
                                <label htmlFor="">
                                    <p className='xia-fb-s'>发布到：</p>
                                    <select name="" id="">
                                        <option value="">z13333084654的博客</option>
                                    </select>
                                </label>
                                <label htmlFor="">
                                    <p>设置：</p>
                                    <select name="" id="">
                                        <option value="">立即保存</option>
                                        <option value="">保存草稿</option>
                                        <option value="">仅自己可见</option>
                                    </select>
                                </label>
                                <label htmlFor="">
                                    <p>标签：</p>
                                    <input type="text" placeholder='添加标签，用逗号或者回车分隔' name="" id="" />
                                </label>
                            </label>
                        </div>
                        <label htmlFor="">
                            <button className='btn'>发布</button>
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}
