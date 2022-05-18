<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <title>Добро пожаловать!</title>
    <link rel="stylesheet" href="../styles/css.css">
    <script type="text/javascript" src="/scripts/scripts_for_lab4.js"></script>

</head>
<body>
<h1>
    Лабораторная работа №4
</h1>
<div>
    Пример ввода: <br>
    Матрица смежности:<br>
    00032<br>
    00150<br>
    01001<br>
    35002<br>
    20120<br>
    0 - отсутствие пути <br>
    Начальная вершина: 0<br>
    Конечная вершина: 2<br>
    Отсчет вершин начинается не с 1, а с 0<br>
</div>
<form>
    <table>
        <tr>
            <td> Матрица смежности </td>
            <td><textarea class="matrix" id="mass1"></textarea></td>
        </tr>
        <tr>
            <td> Начальная вершина </td>
            <td><input type="text" id="mass2" size="27"></td>
        </tr>
        <tr>
            <td> Конечная вершина </td>
            <td><input type="text" id="mass3" size="27"></td>
        </tr>
        <tr>
            <td> <input type="button" value="Выполнить" onclick="calculation_l4();"> </td>
        </tr>
    </table>
</form>
<div id="outresult_lab4"></div>
<button  class="menu_button" onclick="window.location.href = '../index.php';">Вернуться на главную страницу</button>
</body>
</html>
