literbox = function(strfn){
    var x = 'var';
    for(v in window){
        x = x + ' ' + v + ',';
    }
    x = x.substring(0,x.length-1)+";";
    return eval('(function(){\n'+x+'\nreturn '+strfn+'\n}())');
}
