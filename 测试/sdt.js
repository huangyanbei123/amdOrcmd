(function () {
    if(typeof define === "function" && define.amd){
      define(function(){
        return{
            a:"define",
            b:"yes"
        }
      })
    }
    else{
    window.ss = {
    a:3000,
    b:2000
    }
}    // body...
})()