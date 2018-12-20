import axios from "axios";
import config from './config';

function getHomeArticleData(){
    //params={page=0,count=4}
    return axios.get(config["get"]["articles"]+ "?page=0&count=4")
    .then(response =>{
        return [].slice.call(response.data);
    })
    .catch(err=>{
        console.log(err)
    })
}

let getData = {
    getHomeArticleData,
}
export default getData;