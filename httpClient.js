const http = require('http');

const url = "http://www.columbia.edu/~fdc/sample.html" //url to get data
//perform GET request
http.get(url, (response) => {
    response.on('data',(chunk)=> { //on data event(we are getting data) //,perform the function
    console.log(chunk.toString('utf8'))
    })
    response.on('end' ,()=> { //all of the data has been recieved
    console.log("response has ended")
    })
    .on('error' , (error)=> { //error with the request
    console.log(error.message) //print error in case error received
    })
})


// const http = require('http')

// //Data we send
// const data = JSON.stringify({
//   todo: 'More posts'
// })

// const options = {
//   hostname: 'whatever.com',
//   port: 443,
//   path: '/todos',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)
//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.write(data)
// req.end()