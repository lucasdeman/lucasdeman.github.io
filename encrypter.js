function encode(str){
var encode = [
  ['~', '0'], ['q', '1'], [2, 'a'], ['f', '2'], ['z', '3'], ['s', '4'], ['d', '5'],
  ['g', '6'], ['l', '7'], ['Q', '8'], ['X', '9'], ['@', 'c'], ['8', 'd'], ['4', 'e'],
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

    var decode = [
      ['~', 0], ['q', 1], [2, 'a'], ['f', 2], ['z', 3], ['s', 4], ['d', 5],
      ['g', 6], ['l', 7], ['Q', 8], ['X', 9], ['@', 'c'], ['8', 'd'], ['4', 'e'],
      ['=', 'f'], ['*', 'g'], ['+', 'h'], ['-', 'i'], ['1', 'j'], ['3', 'k'], ['9', 'l'],
      ['7', 'm'], [':', 'n'], ['5', 'o'], ['4', 'p'], ['6', 'q'], ['|', 'r'], ['.', 's'],
      [',', 't'], ['!', 'u'], ['#', 'v'], ['$', 'w'], ['%', 'x'], ['_', 'y'], ['-', 'z'],
      ['a', '~']
  ];
    var x;
    var y = 0;
    var max = 15;
    var first;
    var input = window.location.href.slice(-max);
    for (x=0; x<input.length; x++){
      first = true;
      for (y=0; y<decode.length; y++){
        if (decode[y][0] == input[x] && first == true){
          input = replaceAt(x, decode[y][1], input);
          first = false;
        }
      }
  }
    var ww = input.slice(0, 10).replace(/~/g,'');
    var coins = input.slice(10, 15).replace(/~/g,'') * 1;



function goTo(target){
  var tussen = '';
  while (Math.floor(Math.log10(coins)) + tussen.length < 4 || (Math.floor(Math.log(coins)) < 5 && tussen == '')){
    tussen += '~';
  }
target += '?' + encode(ww) + tussen + encode(coins + '');
window.location.href = target;
}


    function replaceAt(pos, rep, str){
      var z;
      var echo = '';
      for (z=0; z<str.length; z++){
        if (z!=x){
          echo += str[z];
        }else{
          echo+=rep;
        }
      }
      return echo;
    }
