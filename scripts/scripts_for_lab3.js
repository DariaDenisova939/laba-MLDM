var mass_1;
var mass_2;
var mass_rel;
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
function functionality(str_relation){
    let res='Отношение является функцией';
    let el_mass0=0;
    let count=0;
    for(let i=0; i<str_relation.length; i++){
        count=0;
        for(let j=0; j<str_relation.length; j++) {
            if (mass[i][0] == mass[j][0] && mass[i][0] != mass[j][2]) {
                count++;
            }
        }
        if (count != 1) {
            res = 'Отношение не является функцией'
            break;
        }
    }
    return res;
}
function checkmass(str_relation, str_planty1, str_planty2){
    flag=true
    let count=0;
    for(let i=0; i<str_relation.length; i++){
        count=0;
        for(let j=0; j<str_planty1.length; j++){
            if(str_relation[i][0]===str_planty1[j]){
                count++;
            }
        }
        if(count==0) {
            error_text = 'Ошибка при вводе отношения, первого элемента пары: ' + str_relation[i] + ' нет в во множестве: ' + str_planty1 + '\n';
            flag = false;
            break;
        }
    }
    for(let i=0; i<str_relation.length; i++){
        count=0;
        for(let j=0; j<str_planty2.length; j++){
            if(str_relation[i][2]===str_planty2[j]){
                count++;
            }
        }
        if(count==0) {
            error_text += 'Ошибка при вводе отношения, второго элемента пары: ' + str_relation[i] + ' нет в во множестве: ' + str_planty2;
            flag = false;
            break;
        }
    }
    return flag;
}
function checkmass_plenty(str){
    mass=false;
    if(str.length){
        mass=str.toString().split(", ");
        for(let i=0; i<mass.length; i++){
            if(mass[i]>'9' || mass[i]<'0' || mass[i].length!=1){
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
function checkmass_relation(str){
    mass=false;
    if(str.length){
        mass=str.toString().split(", ");
        for(let i=0; i<mass.length; i++){
            if(mass[i][0]>'9' || mass[i][0]<'0' || mass[i][2]>'9' || mass[i][2]<'0' || mass[i].length!=3){
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
function calculation_l3() {
    let result="";
    let res="";
    var m1=document.getElementById('mass1')
    var m2=document.getElementById('mass2')
    var m_relation=document.getElementById('mass_relation')
    if((mass_1=checkmass_plenty(m1.value))==false){
        alert(error_text);
    }
    if((mass_2=checkmass_plenty(m2.value))==false){
        alert(error_text);
    }
    if((mass_rel=checkmass_relation(m_relation.value))==false){
        alert(error_text);
    }
    if((res=checkmass(mass_rel, mass_1, mass_2))===false){
        alert(error_text);
    }
    if((mass_1=checkmass_plenty(m1.value))!=false && (mass_2=checkmass_plenty(m2.value))!=false && (mass_rel=checkmass_relation(m_relation.value))!=false && (res=checkmass(mass_rel, mass_1, mass_2))!=false){
        result = 'Результат:'+ '\n' + functionality(mass_rel) ;
    }
    if(result!=""){
        document.getElementById('outresult_lab3').innerText = result;
    }
}