const request = require('request');
const fs = require('fs')

const input = process.argv.splice(2)

request('http://www.example.edu', (error,_response, body) => {
if(error){
  console.log('error:', error); 
}  

  fs.writeFile(input[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
    const length = body.length
    console.log(`Downloaded and saved ${length} bytes to ${input[1]}`)
  })

});
