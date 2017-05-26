/**
 * Created by simvolice on 26.04.2017 1:49
 */



const fs = require('fs');


module.exports = {




  createAllDir: function () {




    let pathToPublicDir = './public/';

    let nameDir = [];






    nameDir.forEach(function (item) {

      fs.access(pathToPublicDir + item, fs.constants.F_OK, (err) => {


        if (err !== null) {

          fs.mkdir(pathToPublicDir + item, (errmkdir) => {


            console.log("\x1b[42m", errmkdir);



          });


        } else {

          console.log(err);

        }



      });


    });







  }






};