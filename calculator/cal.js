function inp(input_data){
    if (input_data == 'C'){
        document.getElementById('display').value = '';
    }else if (input_data == 'R'){
        var old_data = document.getElementById('display').value
        var arr1  = ''
        for(var i = 0;i < (old_data.length-1);i++){
            arr1+=old_data[i]
        }
        console.log('olddata'+old_data)
        console.log('new'+arr1)
        document.getElementById('display').value = arr1;
    }else if (input_data == '.'){
        x = document.getElementById('display').value;
        if(x == ''){
            document.getElementById('display').value += '0'+input_data;
        }else{
            document.getElementById('display').value += input_data;
        }
    }else if (input_data === '00'){
        var y = document.getElementById('display').value;
        var possible = 0;
        for(var i in y){
            if(y[i] == '.'){
                possible+=1;
            }
        }
        if(y != '' && eval(y) != 0 || possible == 1){
            document.getElementById('display').value += '00' ;
        }
    }else if (input_data == '0'){
        var y = document.getElementById('display').value;
        var possible = 0;
        //for(var i = 0;i< (y.length);i++){
        for(var i in y){
            if(y[i] == '.'){
                possible+=1;
            }
        }
        if(eval(y) != 0 || possible==1){
            document.getElementById('display').value += input_data;
        }    
    }else if (input_data == '='){
        x = document.getElementById('display').value;
        document.getElementById('display').value = eval(x);
    }else{
        document.getElementById('display').value += input_data;
    }
}