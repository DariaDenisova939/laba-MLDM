<?php session_start(); ?>
<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <title>Добро пожаловать!</title>
    <link rel="stylesheet" href="../styles/css.css">

</head>
<body>
<h1>
    Лабораторная работа №5
    Нахождение матрицы достижимости
</h1>
<div>
    Пример ввода: <br>
    Матрица смежности:<br>
    1 2 3 0 5<br>
    4 5 6 7 0<br>
    0 0 0 0 0<br>
    4 5 6 0 0<br>
    4 5 0 0 4<br>
    0 - отсутствие пути <br>
</div>Матрица смежности:
    <form action="/for_lab5.php" method="POST" enctype="multipart/form-data">

        <textarea name="matrix" class="matrix" id="mass1"></textarea><br>
        <input type="submit" value="Выполнить">
    </form>
<button  class="menu_button" onclick="window.location.href = '../index.php';">Вернуться на главную страницу</button> <br>
</body>
</html>

