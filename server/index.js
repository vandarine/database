const express = require('express')
// const cors = require('cors')
// const mysql = require('mysql2/promise')
// const config = require('./config')

const app = express();

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

const port = 3001

app.get("/", async function (req, res) {
    // try {
    //     const connection = await mysql.createConnection(config.db)
    //     const [result,] = await connection.execute('select * from task')

    //     if (!result) result=[] 
    //     res.status(200).json(result)
    // } catch (err) {
    //     res.status(500).json({error: err.message})
    // }

    res.status(200).json({message: "Node server is responding"})
})

// app.listen(port)
app.listen(port,() => {
    console.log(`Sever running on port ${port}`)
})