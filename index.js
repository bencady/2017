console.log("Hello World");

const express = require('express')
const app = express()
const port = 1517

app.get('/hello', (req, res) => res.send('Hello JOSH!! WE ARE WATCHING YOU!! LOOK BEHIND YOU'))

app.use(express.static('public'));


app.get('/russia', function (req, res) {
	counter = counter + 1;
  res.send('Bye Moscow' + counter)
})



app.get('/Moscow', function (req, res) {
  res.send('3... 2... 1... Boom')
})
app.get('/date', function (req, res) {
	var d = Date();
  res.send(d)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))