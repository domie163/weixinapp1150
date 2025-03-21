const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmm2jt0/",
            name: "ssmm2jt0",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmm2jt0/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "外卖小程序"
        } 
    }
}
export default base
