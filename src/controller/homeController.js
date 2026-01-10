const send = require("send")

const getHomepage =(req,res)=>{
 res.send('Hello World! with PTTP and NHTD')
}
const getABC = (req,res) => {
    res.send ('đã đến được phần này bao gồm việc render ra hàm của một controller')
}
module.exports = {
    getHomepage, 
    getABC
}