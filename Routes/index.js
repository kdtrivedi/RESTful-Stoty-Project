let story1 = require('./story');
let education1 = require('./education');
let about1 = require('./about');


//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
let use = app =>{
    app.use('/about', about1);
    app.use('/education', education1);
    app.use('/story', story1);
    app.use('/', function(request,response)
      {
        response.json("Hey, Try adding /about OR /education OR /story");
      });
    app.use('/*', function(request,response)
      {
        response.json("Page Not found");
      });
};

module.exports = use;
