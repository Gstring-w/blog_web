import React, { Component } from "react";
import { Spin, Alert } from 'antd';

import ItemContent from './itemContent'
import getData from '../../../axios'
import "./index.scss";
import ItemDetails from "./itemDetails";
export class BlogContent extends Component {
  state = {
    isShowDetail:false,
    selectEdData:{},
    isLoadMoreData:false,
    dataCount: 4,
    data: []
  };
  async componentDidMount() {

    const { getHomeArticleData } = getData;
    this.bindEvent();
    let data = await getHomeArticleData();
    if(data && data.length !== 0){
      // 调试用的模拟错误的数据
      data = [{title:'error',content:'xxx'},{title:'11',content:'1111'},{title:'error',content:'xxx'},{title:'11',content:'1111'}]; 
    }
    this.setState({
        data:data,
    })
  }

  componentWillUpdate(props,state){
    let {data} = this.state;
    if(state.data.length  > data.length ){
      return true;
    }else {
      return false
    }
  }
  bindEvent = ()=>{
    this.lock = true;
    window.addEventListener('scroll',(e)=>{
      this.addDataHeight();
      let { dataHeight=1000 } = this.state;
      if(window.scrollY + 520 > dataHeight -100){
        if(this.lock){
          this.lock = false;
          this.setState({
            isLoadMoreData:true,
          })
          this.loadData();
        }
     }
    },false)
  }
  addDataHeight = ()=>{
    try {
      let dataHeight = +this.dataHeight.offsetHeight;
      this.setState({
        dataHeight,
      })
    } catch (error) {
      let dataHeight = 1000;
      this.setState({
        dataHeight,
      })
    }
 
  }
  loadData= () => {
    setTimeout(()=>{
      let {data} =this.state;
      data = data.concat([{title:'error',content:'xxx'},{title:'11',content:'1111'}])
      this.setState({
        data,
        isLoadMoreData:false,
      },()=>{
        this.lock = true
      })
    },10000)
  }
  linkToDetails = () =>{
    const {isShowDetail} = this.state;
    this.setState({
      isShowDetail:!isShowDetail
    })
  }
  render(){
    const { data,isLoadMoreData } = this.state;
    return (
      <div className='BlogContent'>
          {
            data.length === 0 ? this.renderNoData() : this.renderData()
          }
          {
            isLoadMoreData && this.renderNoData()
          }
      </div>
    )    
  }
  renderNoData(){
    return (
      <div className='center'>
        <Spin />
      </div>
    )
  }
  renderData() {
    const { isShowDetail } = this.state;
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
      <div className='BlogContent-select' onClick={this.linkToDetails} ref={dataHeight=>{this.dataHeight=dataHeight}} >
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
         <ItemDetails />
      </div>
    )
  }
}

export default BlogContent;
