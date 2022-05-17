import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

const database= {
    users: [
        {
            id:'123', 
            name: 'John',
            email: 'john@example.com',
            password: 'password',
            entries: 0,
            joined: new Date()
        },
        {
            id:'1234', 
            name: 'ssa',
            email: 'ssa@example.com',
            password: 'password',
            entries: 0,
            joined: new Date()
        },
    ]
}
const {users} = database;
app.get('/', (req, res) => {

    res.send(users);
})

app.post('/signin', (req, res) => {
    bcrypt.hash(req.body.password,null,null, function (err,hash){
        bcrypt.compare(req.body.password, hash, function (err,result){
            ((req.body.email === database.users[0].email) &&  
            result)
            ?
            res.json("recived")
            :
            res.status(400).json('login error');
        });
    });
    
    
    

})

app.post('/register', (req, res) => {
    const { name, email, password} = req.body;
    bcrypt.hash(password,null,null, function (err,hash){
        users.push({
            id: '126',
            name : name,
            email: email,
            password: hash,
            entries: 0,
            joined: new Date()
        });
    });
   
    res.json(users[users.length-1]);
    
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    const found = database.users.find(element => element.id ===id)
    found ? res.json(found) : res.status(404).json('user not found')
})

app.put('/image', (req, res) => {
    const {id} = req.body;
    const found = database.users.find(element => element.id ===id)
    found ? res.json(found.entries++) : res.status(400).json('user not found')

})

bcrypt.hash("bacon",null,null, function (err,hash){

});

bcrypt.compare("bacon", null, function (err,res){

});

bcrypt.compare('veggies', null, function (err,res){

});
app.listen(3000, ()=> {
    console.log('app is running on port 3000')
});