var mass_1;
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
function MaxEl(mass){
    let max = 0;
    for(let i=0; i<mass.length; i++){
        for(let j=0; j<mass.length; j++){
            if(mass[i][0]>max){
                max=mass[i][0];
            }
            if(mass[i][2]>max){
                max=mass[i][2];
            }
        }
    }
    return max;
}
function reflexivity(mass){
    let res='Не рефлексивно';
    let count = 0;
    for(let i=0; i<mass.length; i++){
        if(mass[i][0]==mass[i][2]){
            count++;
        }
    }
    if(count==MaxEl(mass)){
        res='Рефлексивно';
    }
    return res;
}
function symmetry(mass){
    let el_mass_0=0;
    let el_mass_2=0;
    let res='Не симметрично';
    let count = 0;
    for(let i=0; i<mass.length; i++){
        el_mass_0=mass[i][0];
        el_mass_2=mass[i][2];
        for(let j=0; j<mass.length; j++){
            if(mass[j][0]==el_mass_2 && mass[j][2]==el_mass_0){
                count++;
            }
        }
    }
    if(count==mass.length){
        res='Симметрично';
    }
    return res;
}
function antisymmetry(mass){
    let el_mass_0=0;
    let el_mass_2=0;
    let res='Кососимметрично';
    for(let i=0; i<mass.length; i++){
        el_mass_0=mass[i][0];
        el_mass_2=mass[i][2];
        for(let j=0; j<mass.length; j++){
            if(mass[j][0]==el_mass_2 && mass[j][2]==el_mass_0 && mass[j][0]!=mass[j][2]){
                res='Не кососимметрично';
                break;
            }
        }
    }
    return res;
}
function transitivity(mass){
    let res='';
    let el_mass0=0;
    let el_mass2=0;
    for(let i=0; i<mass.length; i++){
        for(let j=0; j<mass.length; j++){
            if(mass[i][2]==mass[j][0] && mass[i][0]!=mass[j][2]){
                el_mass0=mass[i][0];
                el_mass2=mass[j][2];
                for(let a=0; a<mass.length; a++){
                    if(mass[a][0]==el_mass0 && mass[a][2]==el_mass2){
                        res='Транзитивно';
                        break;
                    }
                }
                if(res!='Транзитивно'){
                    res='Не транзитивно';
                    break;
                }
            }
        }
        if (res=='Не транзитивно'){
            break;
        }
    }
    return res;
}
function checkmass(str){
    mass=false;
    if(str.length){
        mass=str.toString().split(", ");
        for(let i=0; i<mass.length; i++){
            if(mass[i][1]!= " " || mass[i][0]>'9' || mass[i][0]<'0'|| mass[i][2]>'9' || mass[i][2]<'0' || mass[i].length!==3){
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
function calculation_l2() {
    let result="";
    var m1=document.getElementById('mass')
    if((mass_1=checkmass(m1.value))==false){
        alert(error_text);
    }
    if((mass_1=checkmass(m1.value))!=false){
        result = 'Результат: ' + '\n' +reflexivity(mass_1) + ', ' + symmetry(mass_1) + ', ' + antisymmetry(mass_1)+', ' + transitivity(mass_1) +'\n';
    }
    if((mass_1=checkmass(m1.value))!=false) {
        document.getElementById('outresult_lab2').innerText = result;
    }
}