


 const ADMIN_PASSWORD = '123';
 let message = prompt("ADMIN_PASSWORD");

 if (message === null){
 message = 'скасовано користувачем';
} else if (message === "123") {
     message = 'Ласкаво просимо!';
 } else {
     message = 'Доступ заборонений, невірний пароль!';
 }
 alert(message);






