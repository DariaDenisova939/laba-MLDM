var mass_1, mass_2;
var error_text;
function uniqueness(m, element_m){
    let count=0;
    for(let i=0; i<m.length; i++){
        if(m[i]==element_m){
            count++;
        }
    }
    return count;
}
function checkmass(str){
    mass=false;
    if(str.length){
        mass=str.split(" ");
        for(let i=0; i<mass.length; i++){
            if(mass[i][0]>'9' || mass[i][0]<'0' || mass[i][1]%2!=0 || mass[i][2]%2==0 || mass[i][3]<'a' || mass[i][3]>'z' || mass[i].length!=4){
                error_text='Ошибка при вводе массива: ' + str + ' в элементе: ' + mass[i];
                mass=false;
                break;
            }
        }
        for(let i=0; i<mass.length; i++){
            if(uniqueness(mass, mass[i])>1){
                mass.splice(i, 1);
                i--;
            }
        }
    }
    else {
        error_text="Вы не ввели массив"
    }
    return mass
}
function unification(m1, m2){
    let result="";
    result=m1.join(", ");
    for(let i=0; i<m2.length; i++){
        if(m1.indexOf(m2[i])==-1){
            result+=", "+m2[i];
        }
    }
    return result;
}
function intersection(m1, m2){
    let result="";
    for(let i=0; i<m2.length; i++){
        if(m1.indexOf(m2[i])!=-1){
            result+=", "+m2[i];
        }
    }
    result=result.replace(",", " ");
    return result;
}
function addition_AB(m1, m2){
    let result="";
    for(let i=0; i<m2.length; i++){
        if(m1.indexOf(m2[i])==-1){
            result+=", "+m2[i];
        }
    }
    result=result.replace(",", " ");
    return result;
}
function addition_BA(m1, m2){
    let result="";
    for(let i=0; i<m1.length; i++){
        if(m2.indexOf(m1[i])==-1){
            result+=", "+m1[i];
        }
    }
    result=result.replace(",", " ");
    return result;
}

function calculation() {
    let result="";
    var m1=document.getElementById('mass1')
    var m2=document.getElementById('mass2')
    if((mass_1=checkmass(m1.value))==false){
        alert(error_text);
    }
    if((mass_2=checkmass(m2.value))==false){
        alert(error_text);
    }
    if((mass_1=checkmass(m1.value))!=false && (mass_2=checkmass(m2.value))!=false){
        result='Объединение массивов: ' + unification(mass_1, mass_2)+'\n';
        result+='Пересечение массивов: ' + intersection(mass_1, mass_2)+'\n';
        result+='Дополнение массива A до массива B: ' + addition_AB(mass_1, mass_2)+'\n';
        result+='Дополнение массива B до массива A: ' + addition_BA(mass_1, mass_2)+'\n';
        result+='Симметрическая разность масивов A и B: ' + addition_BA(mass_1, mass_2)+','+addition_AB(mass_1, mass_2)+'\n';
    }
    if((mass_1=checkmass(m1.value))!=false && (mass_2=checkmass(m2.value))!=false) {
        document.getElementById('outresult').innerText = 'Результат выполнения операций над массивами:' + '\n' + result;
    }
}