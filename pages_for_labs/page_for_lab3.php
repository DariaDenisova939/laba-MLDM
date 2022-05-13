<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <title>Добро пожаловать!</title>
    <link rel="stylesheet" href="../styles/css.css">
    <script type="text/javascript" src="/scripts/scripts_for_lab3.js"></script>

</head>
<body>
<h1>
    Лабораторная работа №3
</h1>
<div>
    Пример ввода: <br>
    Элементы первого множества: 1, 2, 3, 4, 5 <br>
    Элементы второго множества: 3, 7, 8, 1, 9 <br>
    Отношение(пары элементов): 2 8, 3 9, 1 7 <br>
</div>
<form>
    <table>
        <tr>
            <td> Элементы первого множества </td>
            <td><input type="text" id="mass1" size="150"></td>
        </tr>
        <tr>
            <td> Элементы второго множества </td>
            <td><input type="text" id="mass2" size="150"></td>
        </tr>
        <tr>
            <td> Пары элементов </td>
            <td><input type="text" id="mass_relation" size="150"></td>
        </tr>
        <tr>
            <td> <input type="button" value="Выполнить" onclick="calculation_l3();"> </td>
        </tr>
    </table>
</form>
<div id="outresult_lab3"></div>
<button  class="menu_button" onclick="window.location.href = '../index.php';">Вернуться на главную страницу</button>
</body>
</html>
