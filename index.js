const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors())
app.use(express.json())
const messages =[]
app.post('/messages',(req,res)=>{
    const {body} = req;
 messages.push(body);
 res.status(204).end()
});
app.get('/messages',(req,res)=>{

res.json(messages);

})
const subscribers={}
app.post('/long',(req,res)=>{
const{body}=req;
Object.keys(subscribers).forEach(id=>{
    subscribers[id].json(body)
    delete subscribers[id];
})
res.status(204).end();
// some logic to send all users


});

app.get('/long',(req,res)=>{
const id = Math.ceil(Math.random()*100000)

subscribers[id]=res;

})


app.listen(3000,()=>{

console.info('server listening on port 3000')

})