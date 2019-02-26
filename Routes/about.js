    let express = require('express');
    let route1 = express.Router();

    route1.get('/', (request, response) => {
      about = {
          "name": "Kunjan Trivedi",
          "cwid": "10441789",
          "biography": "My name is Kunjan Trivedi. I am from India. Currently I am pursuing my Graduation at Stevens Institute of Technology. I did my Undergraduate studies at Gandhinagar Institute of Technology -Information Technology. \
                        I am a music enthusiast. I worked at TCS for 13 months before coming to US for further studies. I am excited to learn new technologies.I want to work as a full stack developer./n \
                        I like to work on new technologies. I go to concerts ans sometimes I do my own concerts as well. Music is the closest thing I have in my life. Music has been part of my life for more than 16 years.",
          "favoriteShows": ["Suits","Khichdi","How I met your mother"," F.R.I.E.N.D.S", "Game Of Thrones"],
          "hobbies": ["Cricket", "Coding", "Pool/Billiards", "Reading History", "Badminton"]
      };
      response.json(about);
    });
    module.exports = route1;
