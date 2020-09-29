import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import serveIndex from 'serve-index'

/* Remove the 3 lines bellow when the global "__dirname" from node works */
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express()
const server = http.createServer(app)
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.use('/', express.static('public'), serveIndex('public', {
  'icons': true
}))

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
})

server.listen(port, () => {
    console.log(`> Server listening on port: ${port}`)
})