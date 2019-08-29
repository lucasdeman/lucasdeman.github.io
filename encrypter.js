function encode(str){
  var encode = [
    ['~', 0], ['q', 1], [2, 'a'], ['f', 2], ['z', 3], ['s', 4], ['d', 5],
    ['g', 6], ['l', 7], ['Q', 8], ['X', 9], ['@', 'c'], ['8', 'd'], ['4', 'e'],
    ['=', 'f'], ['*', 'g'], ['+', 'h'], ['-', 'i'], ['1', 'j'], ['3', 'k'], ['9', 'l'],
    ['7', 'm'], [':', 'n'], ['5', 'o'], ['4', 'p'], ['6', 'q'], ['|', 'r'], ['.', 's'],
    [',', 't'], ['!', 'u'], ['#', 'v'], ['$', 'w'], ['%', 'x'], ['_', 'y'], ['-', 'z']
];
var returning;
var first = true;
var x;
var y;
for (x=0; x<str.length; x++){
first = true;
  for (y=0; y<encode.length; y++){
    if (str[x] == encode[y][1] && first == true){
      first = false;
      str = replaceAtGRHF(x, encode[y][0], str);
      console.log(str);
    }
  }
}
return str;
}
function replaceAtGRHF(pos, rep, str){
  var z;
  var echo = '';
  for (z=0; z<str.length; z++){
    if (z!=pos){
      echo += str[z];
    }else{
      echo+=rep;
    }
  }
  return echo;
}


