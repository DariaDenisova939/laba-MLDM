var mass_matrix;
var starting_vertex;
var final_vertex;
var error_text;
var vis;
function shortest_way(mass, s_vertex, f_vertex){
    let vertex;
    let vis2=" ";
        let infinity=1000;                     // Бесконечность
        let p = mass[0].length;				// Количество вершин в графе
        let arr=mass;  // Матрица смежности графа
        let start=parseInt(s_vertex);  // Номер исходной вершины
        let final = parseInt(f_vertex);// Номер конечной вершины
        let binary=[mass[0].length]; //Массив, содержащий единицы и нули для каждой вершины,
        // x[i]=0 - еще не найден кратчайший путь в i-ю вершину,
        // x[i]=1 - кратчайший путь в i-ю вершину уже найден
        let t=[mass[0].length];
        let h=[];
        let u;		    // Счетчик вершин
        for (u=0;u<p;u++) {
            t[u]=infinity;
            binary[u]=0;
        }
        h[start]=0;
        t[start]=0;
        binary[start]=1;
        vertex=start;

        while(1) {
            for (u = 0; u < p; u++) {
                if (parseInt(arr[vertex][u]) === 0) {
                    continue;
                }
                if (binary[u] === 0 && t[u] > parseInt(t[vertex]) + parseInt(arr[vertex][u]))
                {
                    t[u] = parseInt(t[vertex]) + parseInt(arr[vertex][u]);
                    h[u] = vertex;
                }
            }
            let w = infinity;
            vertex = -1;
            for (u = 0; u < p; u++)
            {
                if (parseInt(binary[u]) === 0 && parseInt(t[u]) < w) {
                    vertex = u;
                    w = parseInt(t[u]);
                }
            }


            if(vertex===-1)
            {
                vis="Нет пути из вершины "+start+" в вершину "+final+".";
                break;
            }
            if(vertex===final) {
                vis="Кратчайший путь из вершины "+start+" в вершину "+final+":" + '\n';
                u=final;
                while(u!==start)
                {
                    vis2+='->'+u+' ';
                    u=parseInt(h[u]);
                }
                vis2+=" "+start;
                break;
            }
            binary[vertex]=1;
        }
    let res=vis2.split(" ").reverse().toString();
    let res_out=vis;
        for(let j =0; j<res.length; j++){
            if(res[j]!==","){
                res_out+=res[j];
            }
        }
    res_out+=". Вес пути: "+t[final]+'.';
    return res_out;
    }
function checkmass(str){
    mass='fal';
    if(str.length){
        mass=str.split("\n");
        for(let i=0; i<mass.length; i++){
            for(let j=0; j<mass[i].length; j++) {
                if ((mass[i][j]>'9' || mass[i][j]<'0') && mass[i][j]!=='#' || mass.length!==mass[i].length || mass[i][j]!==mass[j][i]) {
                    error_text = 'Ошибка при вводе: '+ '\n' + str + '\n' +' в элементе: ' + mass[i][j];
                    mass = 'fal';
                    break;
                }
            }
        }

    }
    else {
        error_text="Вы не ввели массив"
    }
    return mass;
}
function calculation_l4() {
    let result="";
    var m_matrix=document.getElementById('mass1')
    var start=document.getElementById('mass2')
    var final=document.getElementById('mass3')
    if((mass_matrix=checkmass(m_matrix.value))=='fal'){
        alert(error_text);
    }
    if((final_vertex=checkmass(final.value))=='fal'){
        alert(error_text);
    }
    if((starting_vertex=checkmass(start.value))=='fal'){
        alert(error_text);
    }
    if((mass_matrix=checkmass(m_matrix.value))!='fal' && (final_vertex=checkmass(final.value))!='fal' && (starting_vertex=checkmass(start.value))!='fal'){
        result = 'Результат:'+ '\n' + shortest_way(mass_matrix, start.value, final.value);
    }
    if(result!=""){
        document.getElementById('outresult_lab4').innerText = result;
    }
}