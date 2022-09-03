const express = require('express')
const app = express()

app.use(express.static('./src'))


const mysql = require('mysql')

//middleware
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: false }))

const 


const morgan = require('morgan')
const { query } = require('express')
app.use(morgan('short'))


app.post('/user_create', (req, res) => {
    console.log("new request success")

    console.log("first name: " + req.body.create_name)
    console.log("last name: " + req.body.last_name)
    const name = req.body.create_name;
    const type = req.body.last_name;
    const querystring2 = " INSERT INTO monked(type, name) values(? , ?)"
    getconnection().query(querystring2, [type, name], (err, results, fields) => {
        var sike = 5;
        for (var i = 0; i < 12; i++) {
            sike++
        }

        //  getconnection().query("UPDATE monked SET TYPE = ? WHERE name= ?", [type, name])

        if (err) {
            console.log("failed to insert now 20 push ups.." + err)
            res.status(500)
            return
        }
        console.log("insertion successful", results.insertedId);
        res.end()
    })




    //res.end();
})

app.get("/", (req, res) => {
    console.log("server resopnsed..")
    res.send("ahh uhh ahh thalaivre")
})

app.get("/monke1/:monkez", (req, res) => {
    res.send("nodemon running sucessfully...")
})

app.get("/user/all", (req, res) => {
        const querystring3 = "select * from monked"
        const connectionx = getconnection()

        connectionx.query(querystring3, (err, rows, fields) => {

            if (err) throw err;

            res.json(rows)

        })


    })
    //dbs
app.get("/user/:monkez", (req, res) => {

        console.log("server changed to get mode... durrr" + req.params.monkez)

        const connection = mysql.createConnection({

            host: 'localhost',
            user: 'retr0',
            port: 3306,
            database: 'monke',
            password: 'Sakthiharish@10'


        })
        var userid = req.params.id;

        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");


        });

        const querystring = "SELECT * FROM monked WHERE id = ?"




        connection.query(querystring, [userid], (err, rows, fields) => {
            if (err) {
                console.log("recheck query or else you gay ")
                res.sendStatus(500)
                res.end()
                return
                //throw err 
            }

            console.log("ok we got users added")

            const users = rows.map((row) => {
                return { name: row.name }
            })

            res.json(rows)
        })

        var userid = req.params.id
            //res.end()

    })
    //dbs dt uptdt
function getconnection() {
    return mysql.createConnection({

        host: 'localhost',
        user: 'retr0',
        port: 3306,
        database: 'monke',
        password: 'Sakthiharish@10'


    })
}

app.get("add/:id", (req, res) => {
    const connection = getconnection()
})

app.get("/monke2", (req, res) => {
    var user = { name: "monke", type: "primate" }
    const userx = { name: 32, type: "poda jumni" }
    res.json([user, userx])

})




//localhost:3003
app.listen(3003, () => {
    console.log(`Server is ready http://localhost:3003/user/4`)

    //console.log(`Server is ready http://localhost:3003/user/${userid}`)
})