<?php
session_start();
include_once "./pages_for_labs/page_for_lab5.php";
$matrix = $_POST['matrix'];
$r_arr=explode("\n",$matrix);
$array_matrix = array();
foreach ($r_arr as $item){
    $array_matrix[] = explode(" ",$item);
}
$n=count($array_matrix);
$d=$array_matrix;
$error="";
for ($i=0; $i<=$n-1; $i++) {
    if(count($array_matrix[$i])!=$n){
        $error="Матрица должна быть в виде квадрата"."<br>";
    }
}
for ($i=0; $i<=$n-1; $i++) {
    for ($j = 0; $j <= $n - 1; $j++){
        if(is_numeric($array_matrix[$i][$j])==false && $j!=$n-1){
            $error.="Матрица должна состоять из цифр"."<br>";
            break;
        }
    }
    if(!empty($error)){
        break;
    }
}
if($n==1){
    $error.= "Поле быть заполнено матрицей смежности по примеру выше"."<br>";
}
if(empty($error) && $n!=1) {
    for ($i = 0; $i <= $n - 1; $i++) {

        for ($j = 0; $j <= $n - 1; $j++) {

            if ($i == $j) {

                $d[$i][$j] = 1;
            } else {

                if ($array_matrix[$i][$j] == 0) {

                    $d[$i][$j] = 0;
                } else {

                    $d[$i][$j] = 1;
                }
            }
        }
    }
    //Выполнение n итераций над матрицей

    for ($k = 0; $k <= $n - 1; $k++) {

        for ($i = 0; $i <= $n - 1; $i++) {

            for ($j = 0; $j <= $n - 1; $j++) {

                if ($d[$i][$j] == 0) {

                    if ($d[$k][$j] == 1 && $d[$i][$k] == 1) {

                        $d[$i][$j] = 1;
                    }
                }
            }
        }
    }
    foreach ($d as $ind => $val) {
        $mas1[] = implode(" ", $val);
        $mas = implode("<br>", $mas1);
    }
    echo "Матрица достижимости: " . "<br>";
    print_r($mas);
}
else{
    echo $error;
}