const experess = require('express');
const path = require('path');
const app = experess();

app.use(express.static('./dist/E-shopAppTeamBackEnd'));

app.get('/*',(req,res)=>
res.sendFile('index.html',{root:'dist/E-shopAppTeamBackEnd'}),
);

app.listen(process.env.Port|| 4200);