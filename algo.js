var wordPattern = function(pattern, str) {
    str = str.toUpperCase();
    var compare = "";
    var array = pattern.split("");
    var array2 = str.split(" ");
    var object = {};
    for(x in array){
        object[array[x]] = array2[x];
        
    }
  console.log(array2, object)
    for(y in array2){
        for(i in object){
            if(array2[y] == object[i]){
                array2[y] = i;
            }
        }
    }
    console.log(array2 + " after change");
    for(z in array2){
        compare = compare + array2[z];
        
    }
   
    if(pattern == compare){
        return true;
    }
    else{
        return false;
    }
};