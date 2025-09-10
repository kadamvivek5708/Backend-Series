import express from 'express';

const app = express();
const port = process.env.PORT || 3000    //  <---- if present on server then serve othervise on local 

// app.get('/', (req,res) => {
//     res.send('Hello You are on main Page');
//     }
// );

app.get('/api/jokes' , (req,res) => {
    const jokes = [
        {
            id : 1,
            title : 'A joke',
            joke : 'THIS IS A JOKE'
        },
        {
            id : 1,
            title : 'A 2nd joke',
            joke : 'THIS IS A 2nd JOKE'
        },
        {
            id : 1,
            title : 'A 3rd joke',
            joke : 'THIS IS A 3rd JOKE'
        },
        {
            id : 1,
            title : 'A 4th joke',
            joke : 'THIS IS A 4th JOKE'
        },
        {
            id : 1,
            title : 'A 5th joke',
            joke : 'THIS IS A 5th JOKE'
        },
    ];
    res.send(jokes);
    
})

app.listen(port , () => {
    console.log(`server is running on port http://localhost:${port}`);
    }
);     