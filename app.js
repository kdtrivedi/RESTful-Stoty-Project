let express = require('express');
let app = express();
let route1 = require("./route");

route1(app);
app.listen(3000, function()
{
    console.log("Server has Started");
})
