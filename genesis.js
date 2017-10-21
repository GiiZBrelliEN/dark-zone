var express = require('express');
var app = express();
var path =  require('path');
// app.set('views', path.join(__dirname, '/dist'));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log('==== > Application running on port :: '+app.get('port'));
});