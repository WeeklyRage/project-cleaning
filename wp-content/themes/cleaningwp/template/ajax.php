 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
 	<title>Document</title>
 </head>
 <body>
 	
 </body>
 </html>
 <?php

	$street = $_POST['street'];
	$house__number =  $_POST['house__number'];
	$apartment__number =  $_POST['apartment__number'];
	$body__number =  $_POST['body__number'];
	$entrance__number =  $_POST['entrance__number'];
	$floor =  $_POST['floor'];
	$code =  $_POST['code'];
	$address_key =  $_POST['address_key'];
	$name =  $_POST['name'];
	$phone = $_POST['phone'];
	$email =  $_POST['email'];
	$comments =  $_POST['comments'];
	$price =  $_POST['price'];
	$type_payment = $_POST['type_payment'];

	$fridge__ajax = $_POST['fridge__ajax'];
	$microwave__ajax = $_POST['microwave__ajax'];
	$oven__ajax = $_POST['oven__ajax'];
	$hood__ajax = $_POST['hood__ajax'];
	$tableware__ajax = $_POST['tableware__ajax'];
	$kitchen__cabinets__ajax = $_POST['kitchen__cabinets__ajax'];
	$window__ajax = $_POST['window__ajax'];
	$balcony__ajax = $_POST['balcony__ajax'];
	$ironing__ajax = $_POST['ironing__ajax'];
	$tray__ajax = $_POST['tray__ajax'];
	$disinfection__ajax = $_POST['disinfection__ajax'];
	$steam_cleaner__ajax = $_POST['steam_cleaner__ajax'];
	$serive_type = $_POST['serive_type'];
	$select__title__ajax = $_POST['select__title__ajax'];
	$data = $_POST['data'];
	$time = $_POST['time'];
	$discounter_str = $_POST['discounter_str'];
	$rooms = $_POST['rooms'];

	$divanAjax =$_POST['divanAjax'];
	$uglovoiDivanAjax =$_POST['uglovoiDivanAjax'];
	$detskiyDivanAjax =$_POST['detskiyDivanAjax'];
	$kresloAjax =$_POST['kresloAjax'];
	$stulAjax =$_POST['stulAjax'];
	$matracAjax =$_POST['matracAjax'];
	$koverAjax =$_POST['koverAjax'];
	$kovrolinAjax =$_POST['kovrolinAjax'];
	$windowAjax =$_POST['windowAjax'];
	$panoramicWindowAjax =$_POST['panoramicWindowAjax'];
	$balconyWindowAjax =$_POST['balconyWindowAjax'];
	$roofWindowsAjax =$_POST['roofWindowsAjax'];

	var_dump($divanAjax);
	var_dump($uglovoiDivanAjax);
	var_dump($detskiyDivanAjax);
	var_dump($kresloAjax);
	var_dump($stulAjax);
	var_dump($matracAjax);
	var_dump($koverAjax);
	var_dump($kovrolinAjax);
	var_dump($windowAjax);
	var_dump($panoramicWindowAjax);
	var_dump($balconyWindowAjax);
	var_dump($roofWindowsAjax);

	var_dump($street);
	var_dump($house__number);
	var_dump($apartment__number);
	var_dump($body__number);
	var_dump($entrance__number);
	var_dump($floor);
	var_dump($code);
	var_dump($address_key);
	var_dump($name);
	var_dump($phone);
	var_dump($email);
	var_dump($comments);
	var_dump($price);
	var_dump($type_payment);

	var_dump($fridge__ajax);
	var_dump($microwave__ajax);
	var_dump($oven__ajax);
	var_dump($hood__ajax);
	var_dump($tableware__ajax);
	var_dump($kitchen__cabinets__ajax);
	var_dump($window__ajax);
	var_dump($balcony__ajax);
	var_dump($ironing__ajax);
	var_dump($tray__ajax);
	var_dump($disinfection__ajax);
	var_dump($steam_cleaner__ajax);
	var_dump($serive_type);
	var_dump($select__title__ajax);
	var_dump($data);
	var_dump($time);
	var_dump($discounter_str);
	var_dump($rooms);

   $to = "ikondratowitch@yandex.by";
   $subject = "Сообщение с сайта EvaModest.by";
   $name = $_POST['name'];
   $phone = $_POST['phone'];
   $mes = $_POST['message'];
   var_dump($mes);
   $message = '
   <html>
<head>
  <title>Обратная связь с сайта EvaModest</title>
</head>
<body>

  <table>
    <tr>
        <td>Имя:</td><td>'.$name.'</td>

    </tr>
    <tr>
        <td>Телефон:</td><td>'.$phone.'</td>
    </tr>
    <tr>
        <td>Сообщение:</td><td>'.$mes.'</td>
    </tr>
  </table>
</body>
</html>
   
   
   
   
   ';
   $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 


   mail ($to, $subject, $message, $headers);
   
   
?>




 <table>
        <div style="font-size: 25px; font-weight: bold; border-bottom: 2px solid black; font-family: unset; color: #71d16f;">
            На сайте xdelo.by был оформлен заказ!
        </div>
         <tr>
            <td>Улица:</td><td>'.$street.'</td>
    
        </tr>
         <tr>
             <td>Дом:</td><td>'.$house__number.'</td>
         </tr>
         <tr>
             <td>Квартира:</td><td>'.$apartment__number.'</td>
         </tr>
          <tr>
             <td>Корпус:</td><td>'.$body__number.'</td>
         </tr>
          <tr>
             <td>Подъезд</td><td>'.$entrance__number.'</td>
         </tr>
          <tr>
             <td>Этаж</td><td>'.$floor.'</td>
         </tr>
          <tr>
             <td>Код от домофона:</td><td>'.$code.'</td>
         </tr>
          <tr>
             <td>Доставить ключи:</td><td>'.$address_key.'</td>
         </tr>
          <tr>
             <td>Имя:</td><td>'.$name.'</td>
         </tr>
          <tr>
             <td>Телефон:</td><td>'.$phone.'</td>
         </tr>
          <tr>
             <td>Email:</td><td>'.$email.'</td>
         </tr>
          <tr>
             <td>Дополнительная информация о заказе:</td><td>'.$comments.'</td>
         </tr>
        <tr> <td>Дополнительные услуги:</td></tr>
          
          <tr>
             <td>'.$fridge__ajax.'</td>
         </tr>
          <tr>
             <td>'.$microwave__ajax.'</td>
         </tr>
          <tr>
            <td>'.$oven__ajax.'</td>
         </tr>
          <tr>
            <td>'.$hood__ajax.'</td>
         </tr>
          <tr>
            <td>'.$tableware__ajax.'</td>
         </tr>
          <tr>
            <td>'.$kitchen__cabinets__ajax.'</td>
         </tr>
          <tr>
            <td>'.$balcony__ajax.'</td>
         </tr>
          <tr>
            <td>'.$ironing__ajax.'</td>
         </tr>
          <tr>
            <td>'.$tray__ajax.'</td>
         </tr>
          <tr>
            <td>'.$disinfection__ajax.'</td>
         </tr>
          <tr>
            <td>'.$steam_cleaner__ajax.'</td>
         </tr>
          <tr>
           <td>'.$divanAjax.'</td>
         </tr>
          <tr>
           <td>'.$uglovoiDivanAjax.'</td>
         </tr>
          <tr>
           <td>'.$detskiyDivanAjax.'</td>
         </tr>
          <tr>
           <td>'.$kresloAjax.'</td>
         </tr>
          <tr>
           <td>'.$stulAjax.'</td>
         </tr>
          <tr>
           <td>'.$matracAjax.'</td>
         </tr>
          <tr>
           <td>'.$koverAjax.'</td>
         </tr>
          <tr>
           <td>'.$kovrolinAjax.'</td>
         </tr>
          <tr>
           <td>'.$windowAjax.'</td>
         </tr>
          <tr>
           <td>'.$panoramicWindowAjax.'</td>
         </tr>
          <tr>
           <td>'.$balconyWindowAjax.'</td>
         </tr>
          <tr>
           <td>'.$roofWindowsAjax.'</td>
         </tr>
          <tr>
            <td>'.$serive_type.'</td>
         </tr>
          <tr>
           <td>'.$select__title__ajax.'</td>
         </tr>
          <tr>
            <td>'.$data.'</td>
         </tr>
          <tr>
            <td>'.$time.'</td>
         </tr>
          <tr>
           <td>'.$discounter_str.'</td>
         </tr>
          <tr>
           <td>'.$rooms.'</td>
         </tr>
         <tr>
            <td>'.$type_payment.'</td>
         </tr>
         <tr>
             <td>Цена:</td><td style="font-weight: bold; border-top: 2px solid black;">'.$price.'</td>
         </tr>
       </table>






       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.4533746212323!2d20.988897515696696!3d52.25331167976458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb6074188d51%3A0xb0dc15281a6e6060!2sTechTag!5e0!3m2!1sru!2sby!4v1613464581713!5m2!1sru!2sby" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
