<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <title>Добро пожаловать!</title>
    <link rel="stylesheet" href="../styles/css.css">
    <script type="text/javascript" src="/scripts/scripts_for_lab2.js"></script>

</head>
<body>
<h1>
    Лабораторная работа №2
</h1>
<div>
    Пример ввода: 2 3, 3 4, 2 4
</div>
<form>
    <table>
        <tr>
            <td> Пары элементов </td>
            <td><input type="text" id="mass" size="150"></td>
        </tr>
        <tr>
            <td> <input type="button" value="Выполнить" onclick="calculation_l2();"> </td>
        </tr>
    </table>
</form>
<div id="outresult_lab2"></div>
<button class="menu_button" onclick="window.location.href = '../index.php';">Вернуться на главную страницу</button>
</body>
</html>
