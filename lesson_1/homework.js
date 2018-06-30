var arr1 = ['black', 'silver', 'gold'];
var arr2 = ['black.png', 'silver.png', 'gold.png'];
var arr3 = ['64', '128', '256'];
var color = arr1[0];
var link = arr2[0];
var memory = arr3[0];
var obj1 = {'64':'200', '128': '400', '256': '800'};
var obj2 = {'black':'100', 'silver': '200', 'gold': '300'};
var error = false;
outer: while(true) {
    color = prompt('Color');
    if (color !== null) {
      for (i = 0; i < arr1.length; i++) {
            if (color === arr1[i])
            {
                link = arr2[i];
                break outer;
            }

        }
        if (color !== arr1[i])
   {
       alert('Такого цвета нет');
   }
    }
    else
    {
        error = 'no';
        break;
    }
}

if(color !== null) {
    outer: while (true) {
        memory = prompt('Memory');
        // memory = parseInt(memory, 10); - в число преобразуем
        if (memory !== null) {
            for (i = 0; i < arr3.length; i++) {
                if (memory === arr3[i])
                {
                    break outer;
                }
            }
            if (memory !== arr3[i])
            {
                alert('Такого телефона нет');
            }
        }
        else {
            error = 'no';
            break;
        }
    }
}

if(error === 'no')
{
    document.write('<h1>До свидания</h1>');

}else {
    document.write('<img width="200" src="img/'+link+'"> <div>'+((+obj2[color]) + (+obj1[memory]))+ ' криптогривень</div>' );
}
//if(!error){
//    document.write('<img width="200" src="img/'+img+'"> <div>'+price+' криптогривень</div>' );
//}else if(error === 'no'){
//    document.write('<h1>До свидания</h1>');
