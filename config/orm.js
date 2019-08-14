var connection = require('../config/connection.js')

//object to sql formatting function
function objToSql(obj) {
    var arr = [];
    for (var key in obj) {
      var value = obj[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(obj, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }  
    return arr.toString();
  }
  


var orm = {
    selectAll: function(tableInp, cb){
        var queryString = "SELECT * FROM ?? ;"
        connection.query(queryString,[tableInp],function(err, res){
        if (err) {
            throw err
        }
        cb(res)

        })
    },

    insertOne: function(table, col, val, cb){

      
        var queryString = "INSERT INTO ??(??) VAlUES (?);" 
        connection.query(queryString,[table,col,val], function(err, result){
            if (err) {
               throw err
            }
            cb(result)
        })
    },

    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table 
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString,function(err, result){
            if (err) {
                throw err
            }
            cb(result)
        })
    },

    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }

        cb(result);
    });
  }
}


module.exports = orm
//to burger model