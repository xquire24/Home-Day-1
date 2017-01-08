module.exports = {
 
   dataTypes: function(arr){
  //checking for data type "string"
  if(Object.prototype.toString.call(arr) === "[object String]"){
    return arr.length;
  }
  //checking for null and undefined data types
  else if(Object.prototype.toString.call(arr)=== "[object Null]" || Object.prototype.toString.call(arr) === "[object Undefined]"){
    return "no value";
  }
  //checking for boolean data types
  else if(Object.prototype.toString.call(arr)=== "[object Boolean]"){
    if(arr === true){
      return true;
    }
    else {
      return false
    }
  }
  //checking for number data types
  else if(Object.prototype.toString.call(arr)=== "[object Number]"){
    if(arr === 100){
      return "equal to 100";
    }else if (arr > 100){
      return"more than 100";
    }else {
      return"less than 100";
    }
    //checking for array data types
  }else if(Object.prototype.toString.call(arr)=== "[object Array]"){
   if(arr[2] === "undefined"){
     return "undefined";
   }
   else{
     return arr[2];
   }
   //checking for function data type
  }else if(Object.prototype.toString.call(arr) === "[object Function]"){
    return arr(true);
  }
  else{
    return "no value";
  }
}

}