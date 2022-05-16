import express from 'express';

const app = express();
app.use(express.json());

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
    if(req.body.email === database.users[0].email 
        && req.body.password === database.users[0].password)
        res.json("recived");
    else {
        res.status(400).json('login error');
    }

})

app.post('/register', (req, res) => {
    const { name, email, password} = req.body;
    
    users.push({
        id: '126',
        name : name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    });
    res.json(users[users.length-1]);
    
})
app.listen(3000, ()=> {
    console.log('app is running on port 3000')
})