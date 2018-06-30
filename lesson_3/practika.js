
function map(fn, array){

    var arr = [];

    for(var i=0; i<array.length; ++i){

        arr.push(fn(array[i]))

    }

    return arr;

}

function fn(a)
{

    return a + 1;

}
document.write( map(fn, [-1,0])+'<br>');

var generator = sequence();
function sequence(start, step) {
    start = start - step;
if (!step && !start)
{
        step = 1;
        start =  0;
        start -= step;
        return function()
        {
            return start += step;
        }
}
    else{
    return function()
    {
            return start += step;
    }
    }
}
document.write(generator());
document.write(generator());


function take (gen, x)
{
    var array = [];
    for(var i=0; i < x; i++)
    {
        array[i] = gen();
    }
    return array;
}
var gen = sequence(0, 1);
document.write('<br> '+take(gen, 2)+' ');