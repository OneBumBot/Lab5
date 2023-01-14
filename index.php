<html>
<head>
    <title>Сортировка</title>
</head>
<body>
	<form action="data.php" method="post">
		<input name="num" id = "num" placeholder="Введите число"><br>
		<button type="submit">Добавить</button><br>
	</form>
		<button onclick="getData()">Показать данные на сервере</button>
		<script src="sort.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</body>
</html>