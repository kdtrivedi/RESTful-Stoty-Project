let express = require('express');
let route1 = express.Router();

route1.get("/",function(request,response)
{

  var education = [
                {
                  "schoolName": "Diwan Ballubhai School",
                  "degree": "matriculation",
                  "favoriteClass": "Science class in the 9th standard",
                  "favoriteMemory": "This was the class where our teacher used to do live projects to make us understand the physics behind every experiment and I was the class monitor at that time so I used to help him to do all those work which was a nice experience for me."
                },
                {
                  "schoolName": "SAL Institute of Technology",
                  "degree": "bachelorette",
                  "favoriteClass": "Prof. Mehta's clas",
                  "favoriteMemory": "I got to learn about main concepts of programming and got to expand my knowledge as well. That experience got an opportuninty to know how the IT industry works."
                },
                {
                  "schoolName": "NJIT",
                  "degree": "masters",
                  "favoriteClass": "The First Class",
                  "favoriteMemory": "This was the first lecture in the new country and I was very excited to study in new environment ."
                },
              ];
  response.json(education);
});

module.exports = route1;
