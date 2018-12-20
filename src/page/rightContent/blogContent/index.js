import React, { Component } from "react";
import { Spin, Alert } from 'antd';

import ItemContent from './itemContent'
import getData from '../../../axios'
import "./index.scss";
export class BlogContent extends Component {
  state = {
    dataCount: 4,
    data: []
  };
  async componentDidMount() {
    const { getHomeArticleData } = getData;
    let data = await getHomeArticleData();
    this.setState({
      data,
    })
  }
  render(){
    const { data } = this.state;
    return (
      <div className='BlogContent'>
          {
            data.length === 0 ? this.renderNoData() : this.renderData()
          }
      </div>
    )    
  }
  renderNoData(){
    return (
      <Spin tip="Loading...">
        <Alert
          message="正在加载中....."
          description="Further details about the context of this alert. "
          type="info"
        />
      </Spin>
    )
  }
  renderData() {
    const isShowDetail = false;
    return (
            <React.Fragment>
              {
                 isShowDetail ? this.renderDetails(): this.renderSelect()
              }
            </React.Fragment>
    );
  }
  renderSelect(){
    const { data } = this.state; 
    return (
      <div className='BlogContent-select'>
        {
          data.map((item,index)=>{
            return (
              <React.Fragment key={item + '' + index}>
                <ItemContent data={item}/>
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
  renderDetails(){
    return (
      <div className='BlogContent-content'>
          111
      </div>
    )
  }
}

export default BlogContent;
