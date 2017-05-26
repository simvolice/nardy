/**
 * Created by simvolice on 27.02.2017 22:09
 */



module.exports = {

    checkProps:  (propName) => {




        const lenghtMax = 1000;





        if (propName === null) {



          return false;


        } else if (propName === undefined) {


          return false;


        } else if (propName === '') {


          return false;


        } else if (propName === {}) {


          return false;


        } else if (propName === []) {


          return false;


        } else if (propName >= lenghtMax) {


          return false;


        } else {


          return true;


        }



















    }
















};