const bashPath = "http://localhost:12306"
let config = {
    post : {
        login : bashPath + "/api/login"
    },
    get:{
        comment: bashPath + "/api/comment",
        articles:bashPath + "/api/home/articles",
        management: bashPath + "/api/management/post",
        username:bashPath + '/api/username'
    }
}
export default config