<?php
// -----конфигурация----- // 
 
$adminemail="gyrynax@mail.ru"; //.", "."papaboneq@gmail.com";  e-mail админа  
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="../index.html";  // На какую страничку переходит после отправки письма 
 
//-------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$email=$_POST['email']; 

$phone=$_POST['phone']; 
 
$msg=$_POST['message']; 
 
  
 
// Проверяем валидность e-mail - устрело
 
if (!1) 
 
 { 
 
  echo 
"<center>Вернитесь</center> <a 
href='javascript:history.back(1)'><B>назад</B></a>. Вы 
указали неверные данные!"; 
 
  } 
 
 else 
 
 { 
 
 
$full_msg=" 

<p>Имя: $name</p>  
<p>E-mail: $email</p> 
<p>Телефон: $phone</p>
<p>Сообщение: $msg</p> 
 
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name", "$full_msg"); 
 
  
 
// Сохраняем в базу данных (файл в паке php)
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Сообщение от $name"); 
 
fwrite($f,"\n $full_msg "); 
 
fwrite($f,"\n ------------------------------"); 
 
fclose($f); 
 
  
 
// Выводим сообщение пользователю 
 
echo "<script> 
alert('Ваше сообщение отправлено!');
function reload() {location = \"$backurl\"}; setTimeout('reload()', 0.001); 
</script> 
 ";  
exit; 
 
 } 
 
?>