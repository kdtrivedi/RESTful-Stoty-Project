# RESTful-Stoty-Project

JSON Routes
-
use a database.store your data right in routes.
routes
/about
When making a GET request to http://localhost:3000/about, this route will return JSON in the following structure

    {
      "name": "Your Name",
      "cwid": "Your CWID",
      "biography": "2 biography paragraphs separated by a new line character (\n).",
      "favoriteShows": ["array", "of", "favorite", "shows"],
      "hobbies": ["array", "of", "hobbies"]
    }
/story
When making a GET request to http://localhost:3000/story, this route will return the following JSON:

    {
      "storyTitle": "Story Title",
      "story": "Your story.\nSimply use line breaks for paragraphs.\nLike this."
    }
/education
When making a GET request to http://localhost:3000/education, this route will will return JSON in the following structure 

    [
        {
          "schoolName": "First School Name",
          "degree": "First School Degree",
          "favoriteClass": "Favorite class in school",
          "favoriteMemory": "A memorable memory from your time in that school"
        }
    ]
