/*
* Author: Md. Sholayman
* Description: This is the file where the app is running.
* Date : 23 December 2023
* */

const app = require("./app");

app.listen(`${process.env.RUNNING_PORT}`,()=>{
    console.log(`App is running on PORT ${process.env.RUNNING_PORT}`)
})
