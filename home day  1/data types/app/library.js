module.exports = {
 
   dataTypes: function(arr){
  if(Object.prototype.toString.call(arr) === "[object String]"){
    return arr.length;
  }
  else if(Object.prototype.toString.call(arr)=== "[object Null]" || Object.prototype.toString.call(arr) === "[object Undefined]"){
    return "no value";
  }
  else if(Object.prototype.toString.call(arr)=== "[object Boolean]"){
    if(arr === true){
      return true;
    }
    else {
      return false
    }
  }
  else if(Object.prototype.toString.call(arr)=== "[object Number]"){
    if(arr === 100){
      return "equal to 100";
    }else if (arr > 100){
      return"more than 100";
    }else {
      return"less than 100";
    }
  }else if(Object.prototype.toString.call(arr)=== "[object Array]"){
   if(arr[2] === "undefined"){
     return "undefined";
   }
   else{
     return arr[2];
   }
  }else if(Object.prototype.toString.call(arr) === "[object Function]"){
    return arr(true);
  }
  else{
    return "no value";
  }
}

}