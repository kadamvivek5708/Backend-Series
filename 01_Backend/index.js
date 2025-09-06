require ('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const github = {
  "login": "kadamvivek5708",
  "id": 144525243,
  "node_id": "U_kgDOCJ1Huw",
  "avatar_url": "https://avatars.githubusercontent.com/u/144525243?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kadamvivek5708",
  "html_url": "https://github.com/kadamvivek5708",
  "followers_url": "https://api.github.com/users/kadamvivek5708/followers",
  "following_url": "https://api.github.com/users/kadamvivek5708/following{/other_user}",
  "gists_url": "https://api.github.com/users/kadamvivek5708/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kadamvivek5708/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kadamvivek5708/subscriptions",
  "organizations_url": "https://api.github.com/users/kadamvivek5708/orgs",
  "repos_url": "https://api.github.com/users/kadamvivek5708/repos",
  "events_url": "https://api.github.com/users/kadamvivek5708/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kadamvivek5708/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vivek Kadam",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "I’m Vivek, a final-year AI & Data Science engineering student with a passion for using technology to solve real-world problems. ",
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-09-09T09:05:19Z",
  "updated_at": "2025-09-06T05:01:59Z"
}

app.get('/github' , (req,res) => {
    res.json(github)
})


app.get('/',(req,res) => {
    res.send("Hello Vivek How are you...?")
})

app.get('/twitter' , (req,res) => {
    res.send('Hi I am using twitter')
})

app.get('/login' , (req,res) => {
    res.send('<h1>Please Login</h1> </br> <button>Login</button>')
})

app.listen(process.env.PORT , () => {
    console.log(`Example app is listening on port ${port}`)
})