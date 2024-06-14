const express = require('express');
const cors = require('cors');
const app = express ();
app.use(express.json());
app.use(cors());
var db = require('./db');


const PORT = process.env.PORT || 4600;

app.get("/outfit", (req, res) => {
  res.send("this is working");
});

app.get('/getquestions',function(req,res){
  try {
    var questionResults = null;
    const query = 'SELECT * FROM question; ';
    const listAnswer = "Select * from answer where question_id IN (?)";
   db.query(query,function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      var questionIDs = results.map(a => a.id);
      questionResults = results;
      db.query(listAnswer,[questionIDs] ,function (err2, results2, fields2) {
        const answertList = "Select * from correct_answer where question_id IN (?)";
        db.query(answertList, [questionIDs] ,function (err3, results3, fields3) {
          console.log(results2);
          console.log(results);
          console.log(results3);
          var returnObj = [];
          results.forEach(e => {
            var findAnswers = results2.filter(ans => ans.question_id === e.id);
            var findCorrectAnswer = results3.filter(ans => ans.question_id === e.id);
            // returnObj.question = e.content;
            e.answers = findAnswers;
            e.correctanswer = findCorrectAnswer;
            console.log(returnObj);
          });
          res.send(results)
        });
      });
      console.log(questionIDs);
      // res.send(questionIDs);
    } );
  } catch (err) {
    return []
  }
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });
