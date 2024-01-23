const gateway = require('fast-gateway')
const cors = require("cors")

const server = gateway({
  routes: [
    {
    prefix: '/authentication-service',
    target: 'http://localhost:8082'
    }
    ,
    {
        prefix: '/user-service',
        target: 'http://localhost:8089'
    },
    {
        prefix: '/email-service',
        target: 'http://localhost:8085'
    },

    {
        prefix: '/course-service',
        target: 'http://localhost:8087'
    },
    {
        prefix: '/payment-service',
        target: 'http://localhost:8086'
    },
    {
        prefix: '/content-service',
        target: 'http://localhost:8084'
    },
    {
        prefix: '/qna-service',
        target: 'http://localhost:8888'
    },
    {
        prefix: '/cart-service',
        target: 'http://localhost:8083'
    },
    {
        prefix: '',
        target: 'http://localhost:3000'
    },
    
]
})

// server.use(cors({
//     origin:"*"
// }))

server.start(8080 , "localhost").then((ser) => {
    console.log("server is started http://localhost:8080")
}).catch(e => console.error(e)) 
