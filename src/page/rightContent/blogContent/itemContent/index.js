import React, { Component } from "react";
import FooterControl from '../../../../component/public/footerControl'
import "./index.scss";
export class ItemContent extends Component {
  state = {
    imgArr: []
  };
  componentDidMount() {
    this.dealImg(); // 提取文章中的图片
  }
  dealImg = () => {
    const { content } = this.props.data;
    const imgReg = /<img.*?(?:>|\/>)/gi;
    let imgArr = content.match(imgReg);
    // console.log(imgArr);
    if (imgArr !== null) {
      this.setState({
        imgArr
      });
    }
  };
  renderImgs() {
    const { imgArr } = this.state;

    return (
      <div className="itemContent-content-imgs">
        {imgArr.map((item, index) => {
          return (
            <div
              key={item + "" + index}
              className="itemContent-content-imgsWrap"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          );
        })}
      </div>
    );
  }
  parseTime(time) {
    const d = new Date(time); 
    const newDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' '
                    + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return newDate;
  }
  render() {
    const { data} = this.props;
    const {user,time,hot,comment,type,star} = data;
    const params = {
      user,time,hot,comment,type,star
    }
    const { imgArr } = this.state;
    return (
      <div className="itemContent">
        <div className="itemContent-title">{data.title}</div>
        <div className="itemContent-time">发表时间：{this.parseTime(time)}</div>
        <div className="itemContent-content">
          <div
            className="itemContent-content-words"
            dangerouslySetInnerHTML={{ __html: data.content.substring(0,200)+ '......' }}
          />
          {imgArr.length !== 0 && this.renderImgs()}
        </div>
        <div className="itemContent-footer" >
          <FooterControl {...params}/>
        </div>
      </div>
    );
  }
}

export default ItemContent;
