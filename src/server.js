const http = require('http')
const url = require('url')

function start(route, handle) {
  function onRequest(request, response) {
    const { pathname } = url.parse(request.url)
    console.log(`Request for ${pathname} received.`) // This will be called twice. 因為大部分伺服器都會在你存取 http://localhost:8888 /時嘗試讀取 http://localhost:8888/favicon.ico

    let postData = ''
    request.setEncoding('UTF-8')
    request.addListener('data', (postDataChunk) => {
      postData += postDataChunk
      console.log(`Received POST data chunk '${postDataChunk}'.`)
    })
    request.addListener('end', () => {
      route(handle, pathname, response, postData)
    })
  }
  http.createServer(onRequest).listen(8888)
  console.log('Server has started.')
}

exports.start = start
