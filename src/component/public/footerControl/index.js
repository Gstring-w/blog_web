import React, { Component } from 'react'
import './index.scss'
export class FooterControl extends Component {
  
    render() {
        const { comment,star,hot ,user} = this.props
        return (
            <div className='footerControl'>
                <span className='iconfont icon-gaojian-zuozhe icon'>
                    <span>{user}</span>
                </span>
                <span className='iconfont icon-pinglun icon'>
                    <span>{comment}</span>
                </span>
                <span className='iconfont icon-tubiao114 icon'>
                    <span>{star}</span>
                </span>
                <span className='iconfont icon-like icon'>
                    <span>{hot}</span>
                </span>
            </div>
        )
    }
}

export default FooterControl
