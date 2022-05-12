<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <title>Добро пожаловать!</title>
    <link rel="stylesheet" href="../styles/css.css">
    <script type="text/javascript" src="/scripts/scripts_for_lab1.js"></script>

</head>
<body>
<h1>
    Лабораторная работа №1
</h1>
    <form>
        <table>
            <tr>
                <td> Первый массив</td>
                <td><input type="text" id="mass1" size="150"></td>
            </tr>
            <tr>
                <td> Второй массив </td>
                <td><input type="text" id="mass2" size="150"></td>
            </tr>
            <tr>
                <td colspan="2"> <input type="button" value="Выполнить" onclick="calculation();"> </td>
            </tr>
        </table>
    </form>
    <div id="outresult"></div>
<button class="menu_button" onclick="window.location.href = '../index.php';">Вернуться на главную страницу</button>
</body>
</html>
