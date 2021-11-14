Stack Used - NodeJS, MongoDB, Mongoose, ExpressJS, Bcrypt, JWT

Database - sportsacademy
Collections - 1) Credentials 2) Players

Data to populate Credentials collection NEEDS TO BE ADDED TO ACCESS THE COLLECTION
[{
    "username": "kapildev",
    "password": "$2a$10$NMUz8.a1mm5aEGldVPhNWu51QpUdtCzMod4PEdrg9A6weOc6a/ED.", 
    "role": "coach"
},
{
    "username": "mainman",
    "password": "$2a$10$neGjhSpBGu0DSvdSiAmD6O0xpnnHLm9JBjpR4.j33dc5YZh4VicyC",
    "role": "admin"
},
{
    "username": "pullela",
    "password": "$2a$10$3wSQxRx8fzaj5CT2TAZkiONBf4CIADQ5Ydk1a9vJ2XX63ewjWcfLG",
    "role": "coach"
}]

start application by 'npm start'
You can use postman collection from here on, postman collection json in this folder only...

Credentials to login
{
    "username": "kapildev",
    "password": "thebestcoach"
}
{
    "username": "mainman",
    "password": "bestadmin"
}
{
    "username": "pullela",
    "password": "bestcoach"
}

Data to populate Players collection
[{
  "_id": {
    "$oid": "619030fe289385205694de09"
  },
  "name": "Saina Nehwal",
  "matches_played": 50,
  "wins": 45,
  "losses": 4,
  "draws": 1,
  "sport": "Badminton",
  "coach_id": {
    "$oid": "61901e39405a17067c141e1a"
  },
  "created_date": {
    "$date": "2021-11-13T21:41:18.242Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "61904a19b9aa7706f2eee6cb"
  },
  "name": "Virat Kohli",
  "matches_played": 200,
  "wins": 125,
  "losses": 73,
  "draws": 2,
  "sport": "Cricket",
  "coach_id": {
    "$oid": "61901e39405a17067c141e1a"
  },
  "created_date": {
    "$date": "2021-11-13T23:28:25.600Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "61904a5eb9aa7706f2eee6cd"
  },
  "name": "Chirag Shetty",
  "matches_played": 100,
  "wins": 95,
  "losses": 5,
  "draws": 0,
  "sport": "Badminton",
  "coach_id": {
    "$oid": "61901e39405a17067c141e1a"
  },
  "created_date": {
    "$date": "2021-11-13T23:29:34.766Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "61904a83b9aa7706f2eee6cf"
  },
  "name": "Satwiksairaj Rankireddy",
  "matches_played": 50,
  "wins": 35,
  "losses": 10,
  "draws": 5,
  "sport": "Badminton",
  "coach_id": {
    "$oid": "61901e39405a17067c141e1a"
  },
  "created_date": {
    "$date": "2021-11-13T23:30:11.200Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "61904aadb9aa7706f2eee6d1"
  },
  "name": "Parupalli Kashyap",
  "matches_played": 75,
  "wins": 60,
  "losses": 10,
  "draws": 5,
  "sport": "Badminton",
  "coach_id": {
    "$oid": "61901e39405a17067c141e1a"
  },
  "created_date": {
    "$date": "2021-11-13T23:30:53.838Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "61904ac9b9aa7706f2eee6d3"
  },
  "name": "Rahul Dravid",
  "matches_played": 42,
  "wins": 40,
  "losses": 2,
  "draws": 0,
  "sport": "Cricket",
  "coach_id": {
    "$oid": "61901e39405a17067c141e1a"
  },
  "created_date": {
    "$date": "2021-11-13T23:31:21.362Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "61904d05891e3394a2d54dfe"
  },
  "name": "Sourav Ganguly",
  "matches_played": 500,
  "wins": 372,
  "losses": 101,
  "draws": 27,
  "sport": "Cricket",
  "coach_id": {
    "$oid": "61904b61405a17067c141e1c"
  },
  "created_date": {
    "$date": "2021-11-13T23:40:53.613Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "61904d4b891e3394a2d54e00"
  },
  "name": "Shubhash Kumar",
  "matches_played": 40,
  "wins": 37,
  "losses": 3,
  "draws": 0,
  "sport": "Badminton",
  "coach_id": {
    "$oid": "61904b61405a17067c141e1c"
  },
  "created_date": {
    "$date": "2021-11-13T23:42:03.416Z"
  },
  "__v": 0
}]