require('dotenv').config();
const app = require("./server");
require('./database');

const currentPort = app.get('port');
app.listen(currentPort, ()=>{
    console.log('Server on port  '+ currentPort)
})

