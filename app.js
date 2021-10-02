const express = require("express");
const bodyParser = require("body-parser"); 

let ejs = require('ejs'); 

// it will render the todo items on th epage and append any new item that into the array using post req
var items = ["Buy Food", "Make Food", "Eat Food"];

const app = express();

// setting ejs engine
app.set('veiw engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    var today = new Date();
    // var currentDay = today.getDay();
    // var day = "";

    // switch (currentDay) {
    //     case 0:
    //     day = "Sunday"
    //     break;
    //     case 1:
    //     day = "Monday"
    //     break;
    //     case 2:
    //     day = "Tuesday"
    //     break;
    //     case 3:
    //     day = "Wednesday"
    //     break;
    //     case 4:
    //     day = "Thursday"
    //     break;
    //     case 5:
    //     day = "Friday"
    //     break;
    //     case 6:
    //     day = "Saturday"
    //     break;
    //     default:
    //     console.log("Eroor Current Day is eqaul to" + currentDay);
    //     break;
    // }
    // now ofcourse we can shorten this long logic using javascript method as 

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    // key has to match what yout put in the template i.e in this case dayValue from list.ejs 
    res.render("list.ejs", {dayValue: day, newListItems: items});
});

app.post("/",function(req, res){
    var item = req.body.newItem;

    items.push(item)
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});