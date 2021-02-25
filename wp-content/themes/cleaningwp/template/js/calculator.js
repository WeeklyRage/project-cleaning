
   	console.log(document.querySelector('.amount'));
   		let modalItemOpen = document.querySelectorAll('.modal-item');
   		let modalItemService = document.querySelectorAll('.modal-item__service');
   		let modalItemClose = document.querySelectorAll('.modal-item__close');

   		for (let i=0; i <modalItemOpen.length; i++) {
   			modalItemOpen[i].addEventListener('click' , function() {
   				modalItemService[i].classList.add('in');

   			});

   			modalItemClose[i].addEventListener('click', function() {
   				modalItemService[i].classList.remove('in');
   			});


   			
   		}

   		let modalItemActive = document.querySelectorAll('.modal-item__wrapper');
   		let modalItemVisibleCounter = document.querySelectorAll('.modal-item__counter');
   		let modalItemFocus = document.querySelectorAll('.modal-item__column'); 
   		let cleaner = document.querySelectorAll('.modal-item__focus');
   		let itemServiceTest = document.querySelectorAll('.modal-item__service');


   		for (let j = 0; j < modalItemFocus.length; j++) {
   			


   			modalItemFocus[j].querySelector('.modal-item__wrapper').addEventListener('click', function() {

   				modalItemVisibleCounter[j].classList.toggle('modal-item__active');
   				modalItemFocus[j].classList.toggle('modal-item__focus');
   			
   				let discountModalDelet;
   				if (document.querySelector('.active__discount__item')) {
	   				discountModalDelet = Number(document.querySelector('.active__discount__item').children[0].innerHTML.trim().split('%')[0]);
	   				
	   				if (discountModalDelet != 0) {
	   					discountModalDelet *= -1;
	   					console.log(discountModalDelet);
	   				}else {
	   					discountModalDelet;
	   					console.log(discountModalDelet);
	   				}
			   			
		   		}else {
		   				discountModalDelet = 0;
		   		}
   				if (modalItemFocus[j] == modalItemFocus[0]) {
   					
   						
   						if (!modalItemFocus[0].classList.contains('modal-item__focus')) {
   							document.querySelector('.payment__price').innerHTML  = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__divan').innerText.trim()).split(' ')[2]) - Number((document.querySelector('.check__list__add__divan').innerText.trim()).split(' ')[2]) * (discountModalDelet /100))).toFixed(2) + " " + "руб";
   							document.querySelector('.check__list__add__divan').innerHTML = '';
	   					
   						}
   					
   					
   				}
   				if (modalItemFocus[j] == modalItemFocus[1]) {

   						if (!modalItemFocus[1].classList.contains('modal-item__focus')) {
   							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__uglovoi-divan').innerText.trim()).split(' ')[3]) - Number((document.querySelector('.check__list__add__uglovoi-divan').innerText.trim()).split(' ')[3]) * (discountModalDelet / 100))).toFixed(2) + " " + "руб"; 
   							 document.querySelector('.check__list__add__uglovoi-divan').innerHTML = '';
   						
   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[2]) {

   						if (!modalItemFocus[2].classList.contains('modal-item__focus')) {
   							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__detskiy-divan').innerText.trim()).split(' ')[3]) - Number((document.querySelector('.check__list__add__detskiy-divan').innerText.trim()).split(' ')[3]) * (discountModalDelet / 100))).toFixed(2) + " " + "руб";
   							document.querySelector('.check__list__add__detskiy-divan').innerHTML = "";
   						
   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[3]) {

   						if (!modalItemFocus[3].classList.contains('modal-item__focus')) {
   							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) -  (Number((document.querySelector('.check__list__add__kreslo').innerText.trim()).split(' ')[2]) - Number((document.querySelector('.check__list__add__kreslo').innerText.trim()).split(' ')[2]) * (discountModalDelet / 100))).toFixed(2)+ " " + "руб"; 
   							document.querySelector('.check__list__add__kreslo').innerHTML = "";
   							
   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[4]) {

   						if (!modalItemFocus[4].classList.contains('modal-item__focus')) {
   							document.querySelector('.payment__price').innerHTML =  (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - ( Number((document.querySelector('.check__list__add__stul').innerText.trim()).split(' ')[3]) - Number((document.querySelector('.check__list__add__stul').innerText.trim()).split(' ')[3]) * (discountModalDelet / 100))).toFixed(2) + " " + "руб";
   							document.querySelector('.check__list__add__stul').innerHTML = "";
   							
   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[5]) {

   						if (!modalItemFocus[5].classList.contains('modal-item__focus')) {
   							
 							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__matrac').innerText.trim()).split(' ')[4]) - (Number((document.querySelector('.check__list__add__matrac').innerText.trim()).split(' ')[4]) * (discountModalDelet / 100) ))).toFixed(2) + " " + "руб";
   					 		document.querySelector('.check__list__add__matrac').innerHTML = "";
   							
   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[6]) {

   						if (!modalItemFocus[6].classList.contains('modal-item__focus')) {
   							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__kover').innerText.trim()).split(' ')[3]) - ( Number((document.querySelector('.check__list__add__kover').innerText.trim()).split(' ')[3]) * (discountModalDelet / 100)))).toFixed(2) + " " + "руб";
							document.querySelector('.check__list__add__kover').innerHTML = "";
 							
   						
   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[7]) {

   						if (!modalItemFocus[7].classList.contains('modal-item__focus')) {
   							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__kovrolin').innerText.trim()).split(' ')[3]) - ( Number((document.querySelector('.check__list__add__kovrolin').innerText.trim()).split(' ')[3]) * (discountModalDelet / 100)))).toFixed(2) + " " + "руб";
   							document.querySelector('.check__list__add__kovrolin').innerHTML = "";
 
   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[8]) {

   						if (!modalItemFocus[8].classList.contains('modal-item__focus')) {
   							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__window').innerText.trim()).split(' ')[4]) - Number((document.querySelector('.check__list__add__window').innerText.trim()).split(' ')[4]) * (discountModalDelet / 100))).toFixed(2) + " " + "руб";
							document.querySelector('.check__list__add__window').innerHTML = "";

   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[9]) {

   						if (!modalItemFocus[9].classList.contains('modal-item__focus')) {
 							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__panoramic_window').innerText.trim()).split(' ')[4]) - Number((document.querySelector('.check__list__add__panoramic_window').innerText.trim()).split(' ')[4]) * (discountModalDelet / 100))).toFixed(2) + " " + "руб";
							document.querySelector('.check__list__add__panoramic_window').innerHTML = "";
   							
   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[10]) {

   						if (!modalItemFocus[10].classList.contains('modal-item__focus')) {
 							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__balcony_window').innerText.trim()).split(' ')[5]) - Number((document.querySelector('.check__list__add__balcony_window').innerText.trim()).split(' ')[5]) * (discountModalDelet / 100))).toFixed(2) + " " + "руб";

							document.querySelector('.check__list__add__balcony_window').innerHTML = "";
   							
   						}
   					
   					
   				}

   				if (modalItemFocus[j] == modalItemFocus[11]) {

   						if (!modalItemFocus[11].classList.contains('modal-item__focus')) {
 							document.querySelector('.payment__price').innerHTML = (Number(document.querySelector('.payment__price').innerHTML.split(' ')[0]) - (Number((document.querySelector('.check__list__add__roof_windows').innerText.trim()).split(' ')[4]) - Number((document.querySelector('.check__list__add__roof_windows').innerText.trim()).split(' ')[4]) * (discountModalDelet / 100))).toFixed(2) + " " + "руб";
							document.querySelector('.check__list__add__roof_windows').innerHTML = "";
   						
   						}
   					
   					
   				}



   			});

   		}

   		let btnPlus = document.querySelectorAll('.modal-item__plus');
   		let btnMinus = document.querySelectorAll('.modal-item__minus');
   		let labelNumber = document.querySelectorAll('#modal-item__number');
   		
   		for (let a = 0; a < btnPlus.length; a++) {
   			btnPlus[a].addEventListener('click', function() {

   				labelNumber[a].innerHTML++;

   			});
   			btnMinus[a].addEventListener('click', function() {

   				if (labelNumber[a].innerHTML != 1) {
   					labelNumber[a].innerHTML--;
   				}
   			});
   		}




   		let modalItemBtn = document.querySelectorAll('.modal-item__btn');
   		
		

		let discountModal;

		let itemService = document.querySelectorAll('.modal-item__service');
		let itemService1 = document.querySelectorAll('.modal-item__service');

	   	let addFridgePrice;
		let addMicrowavePrice; 
		let addOvenPrice;
		let addHoodPrice;
		let addTablewarePrice; 
		let addKitchenPrice; 
		let addWindowPrice; 
		let addBalconyPrice; 
		let addIroningPrice;
		let addTrayPrice;
		let addDisinfectionPrice; 
		let addSteamCleanerPrice; 
		let addDivanPrice;
		let addUglovoiDivanPrice; 
		let addDetskiyDivanPrice; 
		let addKresloPrice;
		let addStulPrice;
		let addMatracPrice;
		let addKoverPrice;
		let addKovrolinPrice;
		let serviceSumm;
		let addOneWindow;
		let addPanoramicWindow;
		let addBalconyWindow
		let addRoofWindows
		 
		
		//Для модального окна чистка мягкой мебели
   		modalItemBtn[0].addEventListener('click', function () {
 
			let divan =  document.querySelector('.check__list__add__divan');
			let uglovoiDivan =  document.querySelector('.check__list__add__uglovoi-divan');
			let detskiyDivan =  document.querySelector('.check__list__add__detskiy-divan');
			let kreslo =  document.querySelector('.check__list__add__kreslo');
			let stul =  document.querySelector('.check__list__add__stul');
			let matrac =  document.querySelector('.check__list__add__matrac');
			let kover = document.querySelector('.check__list__add__kover');
			let kovrolin = document.querySelector('.check__list__add__kovrolin');

			//Перменные для дивана
			let divanName; // В переменной хранится имя 
			let divanPrice;	// В переменной хранится цена услуги 
			let divanCount; // В переменной хранится количество 

			// Переменные для углового дивана
			let uglovoiDivanName; // В переменной хранится имя  
			let uglovoiDivanPrice; // В переменной хранится цена услуги
			let uglovoiDivanCount; // В переменной хранится количество 

			// Переменные для детского дивана
			let detskiyDivanName; // В переменной хранится имя  
			let detskiyDivanPrice; // В переменной хранится цена услуги
			let detskiyDivanCount; // В переменной хранится количество 

			// Переменные для кресла
			let kresloName; // В переменной хранится имя  
			let kresloPrice; // В переменной хранится цена услуги
			let kresloCount; // В переменной хранится количество 

			// Переменные для стула
			let stulName; // В переменной хранится имя  
			let stulPrice; // В переменной хранится цена услуги
			let stulCount; // В переменной хранится количество 

			// Переменные для матраса
			let matracName; // В переменной хранится имя  
			let matracPrice; // В переменной хранится цена услуги
			let matracCount; // В переменной хранится количество

			koverName = itemService[1].children[0].children[2].children[0].children[0].children[2].innerHTML.trim();
   			koverPrice  = Number(((itemService[1].children[0].children[2].children[0].children[0].children[0].innerHTML).trim().split(' ')[0]));
   			koverCount  = Number((itemService[1].children[0].children[2].children[0].children[1].children[1].innerHTML).trim());

			if ((itemService1[0].children[0].children[2].children[0].classList.contains('modal-item__focus'))) { 
				 
					divanName = itemService[0].children[0].children[2].children[0].children[0].children[2].innerHTML.trim();
					 
					divanPrice = Number(((itemService[0].children[0].children[2].children[0].children[0].children[0].innerHTML).trim().split(' ')[0]));
					 
					divanCount = Number((itemService[0].children[0].children[2].children[0].children[1].children[1].innerHTML).trim());
					 
					divan.innerHTML = divanName + " " + divanCount + "шт " + (divanPrice * divanCount) + " " + "руб";
			}else {
				divanName = 0;
				divanPrice = 0;
				divanCount = 0;
			}

			if ((itemService1[0].children[0].children[2].children[1].classList.contains('modal-item__focus'))) { 
				 
					uglovoiDivanName = itemService[0].children[0].children[2].children[1].children[0].children[2].innerHTML.trim();
					uglovoiDivanPrice = Number(((itemService[0].children[0].children[2].children[1].children[0].children[0].innerHTML).trim().split(' ')[0]));
					uglovoiDivanCount = Number((itemService[0].children[0].children[2].children[1].children[1].children[1].innerHTML).trim());
					 

					uglovoiDivan.innerHTML = uglovoiDivanName +" "+ uglovoiDivanCount + "шт " + (uglovoiDivanPrice * uglovoiDivanCount)+ " " + "руб";
			}else {
				uglovoiDivanName = 0;
				uglovoiDivanPrice = 0;
				uglovoiDivanCount = 0;
			}

			if ((itemService1[0].children[0].children[2].children[2].classList.contains('modal-item__focus'))) { 
				 
					detskiyDivanName = itemService[0].children[0].children[2].children[2].children[0].children[2].innerHTML.trim();
					detskiyDivanPrice = Number(((itemService[0].children[0].children[2].children[2].children[0].children[0].innerHTML).trim().split(' ')[0]));
					detskiyDivanCount = Number((itemService[0].children[0].children[2].children[2].children[1].children[1].innerHTML).trim());
				 
					detskiyDivan.innerHTML = detskiyDivanName +" "+ detskiyDivanCount +"шт " + (detskiyDivanPrice * detskiyDivanCount)+ " " + "руб";
			}else {
				detskiyDivanName = 0;
				detskiyDivanPrice = 0;
				detskiyDivanCount = 0;
			}

			if ((itemService1[0].children[0].children[2].children[3].classList.contains('modal-item__focus'))) { 
				 
					kresloName = itemService[0].children[0].children[2].children[3].children[0].children[2].innerHTML.trim();
					kresloPrice = Number(((itemService[0].children[0].children[2].children[3].children[0].children[0].innerHTML).trim().split(' ')[0]));
					kresloCount = Number((itemService[0].children[0].children[2].children[3].children[1].children[1].innerHTML).trim());
					  
					kreslo.innerHTML = kresloName +" "+ kresloCount +"шт " + (kresloPrice * kresloCount)+ " " + "руб";
			}else {
				kresloName = 0;
				kresloPrice = 0;
				kresloCount = 0;
			}

			if ((itemService1[0].children[0].children[2].children[4].classList.contains('modal-item__focus'))) { 
				 
					stulName = itemService[0].children[0].children[2].children[4].children[0].children[2].innerHTML.trim();
					stulPrice = Number(((itemService[0].children[0].children[2].children[4].children[0].children[0].innerHTML).trim().split(' ')[0]));
					stulCount = Number((itemService[0].children[0].children[2].children[4].children[1].children[1].innerHTML).trim());
					 
					stul.innerHTML = stulName +" "+ stulCount +"шт " + (stulPrice * stulCount)+ " " + "руб";
			}else {
				stulName = 0;
				stulPrice = 0;
				stulCount = 0;
			}

			if ((itemService1[0].children[0].children[2].children[5].classList.contains('modal-item__focus'))) { 
				 
					matracName = itemService[0].children[0].children[2].children[5].children[0].children[2].innerHTML.trim();
					matracPrice = Number(((itemService[0].children[0].children[2].children[5].children[0].children[0].innerHTML).trim().split(' ')[0]));
					matracCount = Number((itemService[0].children[0].children[2].children[5].children[1].children[1].innerHTML).trim());
					 
					matrac.innerHTML = matracName +" "+ matracCount +"шт " + (matracPrice * matracCount)+ " " + "руб";
			}else {
				matracName = 0;
				matracPrice = 0;
				matracCount = 0;
			}


			if (document.querySelector('.active__discount__item')) {
	   				discountModal = Number(document.querySelector('.active__discount__item').children[0].innerHTML.trim().split('%')[0]);
	   				
	   				if (discountModal != 0) {
	   					discountModal *= -1;
	   					 
	   				}else {
	   					discountModal;
	   					 
	   				}

	   			
	   		}else {
	   				discountModal = 0;
	   		}

			   		 

			addFridgePrice = document.querySelector('.check__list__add__service').innerText.trim();
			addMicrowavePrice = document.querySelector('.check__list__add__microwave').innerText.trim(); 
			addOvenPrice = document.querySelector('.check__list__add__oven').innerText.trim(); 
			addHoodPrice = document.querySelector('.check__list__add__hood').innerText.trim(); 
			addTablewarePrice = document.querySelector('.check__list__add__tableware').innerText.trim(); 
			addKitchenPrice = document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim();
			addWindowPrice = document.querySelector('.check__list__add__window').innerText.trim(); 
			addBalconyPrice = document.querySelector('.check__list__add__balcony').innerText.trim(); 
			addIroningPrice = document.querySelector('.check__list__add__ironing').innerText.trim(); 
			addTrayPrice = document.querySelector('.check__list__add__tray').innerText.trim(); 
			addDisinfectionPrice = document.querySelector('.check__list__add__disinfection').innerText.trim(); 
			addSteamCleanerPrice = document.querySelector('.check__list__add__steam_cleaner').innerText.trim(); 
			addDivanPrice = document.querySelector('.check__list__add__divan').innerText.trim(); 
			addUglovoiDivanPrice = document.querySelector('.check__list__add__uglovoi-divan').innerText.trim(); 
			addDetskiyDivanPrice = document.querySelector('.check__list__add__detskiy-divan').innerText.trim(); 
			addKresloPrice = document.querySelector('.check__list__add__kreslo').innerText.trim(); 
			addStulPrice = document.querySelector('.check__list__add__stul').innerText.trim(); 
			addMatracPrice = document.querySelector('.check__list__add__matrac').innerText.trim();
			addKoverPrice = document.querySelector('.check__list__add__kover').innerText.trim();
			addKovrolinPrice = document.querySelector('.check__list__add__kovrolin').innerText.trim();
			
			let oneWindowSum = document.querySelector('.check__list__add__window').innerText.trim();
			let panoramicWindowSum = document.querySelector('.check__list__add__panoramic_window').innerText.trim();
			let balconyWindowSum = document.querySelector('.check__list__add__balcony_window').innerText.trim();
			let roofWindowSum = document.querySelector('.check__list__add__roof_windows').innerText.trim();
	   		
	   		if (addFridgePrice != "") {
	   			addFridgePrice = Number((document.querySelector('.check__list__add__service').innerText.trim()).split(' ')[1]); 
	   		}else {
	   			addFridgePrice = 0;
	   		}
	   		if (addMicrowavePrice != "") {
				addMicrowavePrice = Number((document.querySelector('.check__list__add__microwave').innerText.trim()).split(' ')[1]); 
			}else {
				addMicrowavePrice = 0;
			}

			if (addOvenPrice != "") {
				addOvenPrice = Number(( document.querySelector('.check__list__add__oven').innerText.trim()).split(' ')[1]); 
			}else {
				addOvenPrice = 0;
			}

			if (addHoodPrice != "") {
				addHoodPrice  = Number((document.querySelector('.check__list__add__hood').innerText.trim()).split(' ')[1]); 
			}else {
				addHoodPrice = 0;
			}

			if (addTablewarePrice != "") {
				addTablewarePrice =  Number((document.querySelector('.check__list__add__tableware').innerText.trim()).split(' ')[1]); 
			}else {
				addTablewarePrice = 0;
			}

			if (addKitchenPrice != "") {
				addKitchenPrice = Number((document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim()).split(' ')[3]); 
			}else {
				addKitchenPrice = 0;
			}
			if (addBalconyPrice != "") {
				addBalconyPrice = Number((document.querySelector('.check__list__add__balcony').innerText.trim()).split(' ')[1]); 
			}else {
				addBalconyPrice = 0;
			}

			if (addIroningPrice != "") {
				addIroningPrice = Number((document.querySelector('.check__list__add__ironing').innerText.trim()).split(' ')[1]); 
			}else {
				addIroningPrice = 0;
			}

			if (addTrayPrice != "") {
				addTrayPrice = Number((document.querySelector('.check__list__add__tray').innerText.trim()).split(' ')[1]); 
			}else {
				addTrayPrice = 0;
			}

			if (addDisinfectionPrice != "") {
				addDisinfectionPrice = Number((document.querySelector('.check__list__add__disinfection').innerText.trim()).split(' ')[1]);
			}else {
				addDisinfectionPrice = 0;
			}

			if (addSteamCleanerPrice != "") {
				addSteamCleanerPrice = Number((document.querySelector('.check__list__add__steam_cleaner').innerText.trim()).split(' ')[1]); 
			}else {
				addSteamCleanerPrice = 0;
			}

			if (addDivanPrice != "") {
				addDivanPrice = Number((document.querySelector('.check__list__add__divan').innerText.trim()).split(' ')[2]); 
			}else {
				addDivanPrice = 0;
			}

			if (addUglovoiDivanPrice != "") {
				addUglovoiDivanPrice = Number((document.querySelector('.check__list__add__uglovoi-divan').innerText.trim()).split(' ')[3]); 
			}else {
				addUglovoiDivanPrice = 0;
			}

			if (addDetskiyDivanPrice != "") {
				addDetskiyDivanPrice = Number((document.querySelector('.check__list__add__detskiy-divan').innerText.trim()).split(' ')[3]); 
			}else {
				addDetskiyDivanPrice = 0;
			}

			if (addKresloPrice != "") {
				addKresloPrice = Number((document.querySelector('.check__list__add__kreslo').innerText.trim()).split(' ')[2]); 
			}else {
				addKresloPrice = 0;
			}

			if (addStulPrice != "") {
				addStulPrice = Number((document.querySelector('.check__list__add__stul').innerText.trim()).split(' ')[3]); 
			}else {
				addStulPrice = 0;
			}

			if (addMatracPrice != "") {
				addMatracPrice = Number((document.querySelector('.check__list__add__matrac').innerText.trim()).split(' ')[4]);
			}else {
				addMatracPrice = 0;
			}

			if (addKoverPrice != "") {
				addKoverPrice = Number((document.querySelector('.check__list__add__kover').innerText.trim()).split(' ')[3]);
			}else {
				addKoverPrice = 0
			}

			if (addKovrolinPrice != "") {
				addKovrolinPrice = Number((document.querySelector('.check__list__add__kovrolin').innerText.trim()).split(' ')[3]);
			} else {
				addKovrolinPrice = 0;
			} 

	   		if (oneWindowSum !="") {
	   			oneWindowSum = Number((document.querySelector('.check__list__add__window').innerText.trim()).split(' ')[4]);
	   		}else {
	   			oneWindowSum = 0;
	   		}
	   		if (panoramicWindowSum !="") {
	   			panoramicWindowSum = Number((document.querySelector('.check__list__add__panoramic_window').innerText.trim()).split(' ')[4]);
	   		}else {
	   			panoramicWindowSum = 0;
	   		}
	   		if (balconyWindowSum !="") {
	   			balconyWindowSum = Number((document.querySelector('.check__list__add__balcony_window').innerText.trim()).split(' ')[5]);
	   		}else {
	   			balconyWindowSum = 0;
	   		}
	   		if (roofWindowSum !="") {
	   			roofWindowSum = Number((document.querySelector('.check__list__add__roof_windows').innerText.trim()).split(' ')[4]);
	   		}else {
	   			roofWindowSum = 0;
	   		}





	   		if (document.querySelector('.__select__title__type__cleaning').innerText == "Поддерживающая уборка") {
	   			let priceRooms;
	   			if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 1) {
	   				priceRooms = 48;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;
	   			}else if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 2) {
	   				priceRooms = 63;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;
	   			}else if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 3) {
	   				priceRooms = 78;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;
	   			}else if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 4) {

	   				priceRooms = 93;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;

	   			}
	   		}else if (document.querySelector('.__select__title__type__cleaning').innerText == "Генеральная уборка") {
	   			let first_price = 3.2; // Подвязать значение цены из админки
      			

	   			serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum  + (first_price * Number(document.querySelector('.amount').innerHTML.split(' ')[0]));

	   		}else if (document.querySelector('.__select__title__type__cleaning').innerText == "Уборка после ремонта"){
	   			let second_price = 3.5; // Подвязать значение цены из админки

	   			serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum  + (second_price * Number(document.querySelector('.amount__renovation').innerHTML.split(' ')[0]));

	   		}else if (document.querySelector('.__select__title__type__cleaning').innerText == "Выберите тип уборки:") {
	   			serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
	   		}
   			
   			

   			document.querySelector('.payment__price').innerHTML = serviceSumm - (serviceSumm * (discountModal / 100)) + " " + "руб."; 


					

   		});
		//Для модального окна химчистка ковров
		
   		modalItemBtn[1].addEventListener('click', function () {
   			let addServices =  document.querySelectorAll('.modal-item__focus');
   			let kover = document.querySelector('.check__list__add__kover');
   			let kovrolin = document.querySelector('.check__list__add__kovrolin');

   			let koverName;
			let koverPrice;
			let koverCount;
			
			let kovrolinName;
			let kovrolinPrice;
			let kovrolinPriceFloat;
			let kovrolinCount;
   			
   			

   			//ковер
   			if ((itemService[1].children[0].children[2].children[0].classList.contains('modal-item__focus'))) {
   				// console.log(itemService[1].children[0].children[2].children[0].innerHTML);

   				koverName = itemService[1].children[0].children[2].children[0].children[0].children[2].innerHTML.trim();
	   			koverPrice  = Number(((itemService[1].children[0].children[2].children[0].children[0].children[0].innerHTML).trim().split(' ')[0]));
	   			koverCount  = Number((itemService[1].children[0].children[2].children[0].children[1].children[1].innerHTML).trim());


   				kover.innerHTML = koverName +": "+ koverCount +" м2 " + (koverPrice * koverCount)+ " " + "руб";
   				
   			}
   			else {
   				koverPrice = 0;
				koverCount = 0;
   			}
   			//Ковролин
   			if ((itemService[1].children[0].children[2].children[1].classList.contains('modal-item__focus')) ) {
   				

   				kovrolinName = itemService[1].children[0].children[2].children[1].children[0].children[2].innerHTML.trim();
	   			kovrolinPrice  = (itemService[1].children[0].children[2].children[1].children[0].children[0].innerHTML.trim()).split(' ')[0];
	   			kovrolinPriceFloat = parseFloat(kovrolinPrice.replace(',', '.'))
	   			kovrolinCount  = Number((itemService[1].children[0].children[2].children[1].children[1].children[1].innerHTML).trim());
	   			

	   			kovrolin.innerHTML = kovrolinName +": "+ kovrolinCount +" м2 " + (kovrolinPriceFloat * kovrolinCount)+ " " + "руб";
				
   			}else {
   				kovrolinPriceFloat = 0;
				kovrolinCount = 0;
   			}
   				
   			
			if (document.querySelector('.active__discount__item')) {
   				discountModal = Number(document.querySelector('.active__discount__item').children[0].innerHTML.trim().split('%')[0]);
   				
   				if (discountModal != 0) {
   					discountModal *= -1;
   				}else {
   					discountModal;
   				}
	   		}else {
	   			discountModal = 0;
	   		}
	   		addFridgePrice = document.querySelector('.check__list__add__service').innerText.trim();
			addMicrowavePrice = document.querySelector('.check__list__add__microwave').innerText.trim(); 
			addOvenPrice = document.querySelector('.check__list__add__oven').innerText.trim(); 
			addHoodPrice = document.querySelector('.check__list__add__hood').innerText.trim(); 
			addTablewarePrice = document.querySelector('.check__list__add__tableware').innerText.trim(); 
			addKitchenPrice = document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim();
			addWindowPrice = document.querySelector('.check__list__add__window').innerText.trim(); 
			addBalconyPrice = document.querySelector('.check__list__add__balcony').innerText.trim(); 
			addIroningPrice = document.querySelector('.check__list__add__ironing').innerText.trim(); 
			addTrayPrice = document.querySelector('.check__list__add__tray').innerText.trim(); 
			addDisinfectionPrice = document.querySelector('.check__list__add__disinfection').innerText.trim(); 
			addSteamCleanerPrice = document.querySelector('.check__list__add__steam_cleaner').innerText.trim(); 
			addDivanPrice = document.querySelector('.check__list__add__divan').innerText.trim(); 
			addUglovoiDivanPrice = document.querySelector('.check__list__add__uglovoi-divan').innerText.trim(); 
			addDetskiyDivanPrice = document.querySelector('.check__list__add__detskiy-divan').innerText.trim(); 
			addKresloPrice = document.querySelector('.check__list__add__kreslo').innerText.trim(); 
			addStulPrice = document.querySelector('.check__list__add__stul').innerText.trim(); 
			addMatracPrice = document.querySelector('.check__list__add__matrac').innerText.trim();
			addKoverPrice = document.querySelector('.check__list__add__kover').innerText.trim();
			addKovrolinPrice = document.querySelector('.check__list__add__kovrolin').innerText.trim();
			let oneWindowSum = document.querySelector('.check__list__add__window').innerText.trim();
			let panoramicWindowSum = document.querySelector('.check__list__add__panoramic_window').innerText.trim();
			let balconyWindowSum = document.querySelector('.check__list__add__balcony_window').innerText.trim();
			let roofWindowSum = document.querySelector('.check__list__add__roof_windows').innerText.trim();
	   		
	   		if (addFridgePrice != "") {
	   			addFridgePrice = Number((document.querySelector('.check__list__add__service').innerText.trim()).split(' ')[1]); 
	   		}else {
	   			addFridgePrice = 0;
	   		}
	   		if (addMicrowavePrice != "") {
				addMicrowavePrice = Number((document.querySelector('.check__list__add__microwave').innerText.trim()).split(' ')[1]); 
			}else {
				addMicrowavePrice = 0;
			}

			if (addOvenPrice != "") {
				addOvenPrice = Number(( document.querySelector('.check__list__add__oven').innerText.trim()).split(' ')[1]); 
			}else {
				addOvenPrice = 0;
			}

			if (addHoodPrice != "") {
				addHoodPrice  = Number((document.querySelector('.check__list__add__hood').innerText.trim()).split(' ')[1]); 
			}else {
				addHoodPrice = 0;
			}

			if (addTablewarePrice != "") {
				addTablewarePrice =  Number((document.querySelector('.check__list__add__tableware').innerText.trim()).split(' ')[1]); 
			}else {
				addTablewarePrice = 0;
			}

			if (addKitchenPrice != "") {
				addKitchenPrice = Number((document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim()).split(' ')[3]); 
			}else {
				addKitchenPrice = 0;
			}

			if (addBalconyPrice != "") {
				addBalconyPrice = Number((document.querySelector('.check__list__add__balcony').innerText.trim()).split(' ')[1]); 
			}else {
				addBalconyPrice = 0;
			}

			if (addIroningPrice != "") {
				addIroningPrice = Number((document.querySelector('.check__list__add__ironing').innerText.trim()).split(' ')[1]); 
			}else {
				addIroningPrice = 0;
			}

			if (addTrayPrice != "") {
				addTrayPrice = Number((document.querySelector('.check__list__add__tray').innerText.trim()).split(' ')[1]); 
			}else {
				addTrayPrice = 0;
			}

			if (addDisinfectionPrice != "") {
				addDisinfectionPrice = Number((document.querySelector('.check__list__add__disinfection').innerText.trim()).split(' ')[1]);
			}else {
				addDisinfectionPrice = 0;
			}

			if (addSteamCleanerPrice != "") {
				addSteamCleanerPrice = Number((document.querySelector('.check__list__add__steam_cleaner').innerText.trim()).split(' ')[1]); 
			}else {
				addSteamCleanerPrice = 0;
			}

			if (addDivanPrice != "") {
				addDivanPrice = Number((document.querySelector('.check__list__add__divan').innerText.trim()).split(' ')[2]); 
			}else {
				addDivanPrice = 0;
			}

			if (addUglovoiDivanPrice != "") {
				addUglovoiDivanPrice = Number((document.querySelector('.check__list__add__uglovoi-divan').innerText.trim()).split(' ')[3]); 
			}else {
				addUglovoiDivanPrice = 0;
			}

			if (addDetskiyDivanPrice != "") {
				addDetskiyDivanPrice = Number((document.querySelector('.check__list__add__detskiy-divan').innerText.trim()).split(' ')[3]); 
			}else {
				addDetskiyDivanPrice = 0;
			}

			if (addKresloPrice != "") {
				addKresloPrice = Number((document.querySelector('.check__list__add__kreslo').innerText.trim()).split(' ')[2]); 
			}else {
				addKresloPrice = 0;
			}

			if (addStulPrice != "") {
				addStulPrice = Number((document.querySelector('.check__list__add__stul').innerText.trim()).split(' ')[3]); 
			}else {
				addStulPrice = 0;
			}

			if (addMatracPrice != "") {
				addMatracPrice = Number((document.querySelector('.check__list__add__matrac').innerText.trim()).split(' ')[4]);
			}else {
				addMatracPrice = 0;
			}

			if (addKoverPrice != "") {
				addKoverPrice = Number((document.querySelector('.check__list__add__kover').innerText.trim()).split(' ')[3]);
			}else {
				addKoverPrice = 0
			}

			if (addKovrolinPrice != "") {
				addKovrolinPrice = Number((document.querySelector('.check__list__add__kovrolin').innerText.trim()).split(' ')[3]);
			} else {
				addKovrolinPrice = 0;
			} 

	   		if (oneWindowSum !="") {
	   			oneWindowSum = Number((document.querySelector('.check__list__add__window').innerText.trim()).split(' ')[4]);
	   		}else {
	   			oneWindowSum = 0;
	   		}
	   		if (panoramicWindowSum !="") {
	   			panoramicWindowSum = Number((document.querySelector('.check__list__add__panoramic_window').innerText.trim()).split(' ')[4]);
	   		}else {
	   			panoramicWindowSum = 0;
	   		}
	   		if (balconyWindowSum !="") {
	   			balconyWindowSum = Number((document.querySelector('.check__list__add__balcony_window').innerText.trim()).split(' ')[5]);
	   		}else {
	   			balconyWindowSum = 0;
	   		}
	   		if (roofWindowSum !="") {
	   			roofWindowSum = Number((document.querySelector('.check__list__add__roof_windows').innerText.trim()).split(' ')[4]);
	   		}else {
	   			roofWindowSum = 0;
	   		}

   			if (document.querySelector('.__select__title__type__cleaning').innerText == "Поддерживающая уборка") {
	   			let priceRooms;
	   			if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 1) {
	   				priceRooms = 48;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;
	   			}else if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 2) {
	   				priceRooms = 63;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;
	   			}else if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 3) {
	   				priceRooms = 78;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;
	   			}else if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 4) {

	   				priceRooms = 93;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;

	   			}
	   		}else if (document.querySelector('.__select__title__type__cleaning').innerText == "Генеральная уборка") {
	   			let first_price = 3.2; // Подвязать значение цены из админки
      			

	   			serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum  + (first_price * Number(document.querySelector('.amount').innerHTML.split(' ')[0]));

	   		}else if (document.querySelector('.__select__title__type__cleaning').innerText == "Уборка после ремонта"){
	   			let second_price = 3.5; // Подвязать значение цены из админки

	   			serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum  + (second_price * Number(document.querySelector('.amount__renovation').innerHTML.split(' ')[0]));

	   		}else if (document.querySelector('.__select__title__type__cleaning').innerText == "Выберите тип уборки:") {
	   			serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
	   		}
   			

   			document.querySelector('.payment__price').innerHTML = serviceSumm - (serviceSumm * (discountModal / 100)) + " " + "руб."; 
   			
   		});
		modalItemBtn[2].addEventListener('click', function () { 
			 
			let windowName; // В переменной хранится имя 
			let windowPrice;	// В переменной хранится цена услуги 
			let windowCount; // В переменной хранится количество 

			// Переменные для углового дивана
			let panoramicWindowName; // В переменной хранится имя  
			let panoramicWindowPrice; // В переменной хранится цена услуги
			let panoramicWindowCount; // В переменной хранится количество 

			// Переменные для детского дивана
			let balconyWindowName; // В переменной хранится имя  
			let balconyWindowPrice; // В переменной хранится цена услуги
			let balconyWindowCount; // В переменной хранится количество 

			// Переменные для кресла
			let roofWindowsName; // В переменной хранится имя  
			let roofWindowsPrice; // В переменной хранится цена услуги
			let roofWindowsCount; // В переменной хранится количество 


			let oneWindow = document.querySelector('.check__list__add__window');
			let panoramicWindow = document.querySelector('.check__list__add__panoramic_window');
			let balconyWindow = document.querySelector('.check__list__add__balcony_window');
			let roofWindow = document.querySelector('.check__list__add__roof_windows');


			//Одно окно
   			if ((itemService[2].children[0].children[2].children[0].classList.contains('modal-item__focus'))) {
   				

   				windowName = itemService[2].children[0].children[2].children[0].children[0].children[2].innerHTML.trim();
	   			windowPrice  = Number(((itemService[2].children[0].children[2].children[0].children[0].children[0].innerHTML).trim().split(' ')[0]));
	   			windowCount  = Number((itemService[2].children[0].children[2].children[0].children[1].children[1].innerHTML).trim());


   				oneWindow.innerHTML = windowName +": "+ windowCount +" м2 " + (windowPrice * windowCount)+ " " + "руб";
   		
   			}
   			else {
   				windowPrice = 0;
				windowCount = 0;
   			}
   			//Панорамное окно
   			if ((itemService[2].children[0].children[2].children[1].classList.contains('modal-item__focus')) ) {
   				

   				panoramicWindowName = itemService[2].children[0].children[2].children[1].children[0].children[2].innerHTML.trim();
	   			panoramicWindowPrice  = Number((itemService[2].children[0].children[2].children[1].children[0].children[0].innerHTML.trim()).split(' ')[0]);
	   			panoramicWindowCount  = Number((itemService[2].children[0].children[2].children[1].children[1].children[1].innerHTML).trim());
	   

	   			panoramicWindow.innerHTML = panoramicWindowName +": "+ panoramicWindowCount +" м2 " + (panoramicWindowPrice * panoramicWindowCount)+ " " + "руб";
				
   			}else {
   				panoramicWindowPrice = 0;
				panoramicWindowCount = 0;
   			}


   			//Окно на балконе
   			if ((itemService[2].children[0].children[2].children[2].classList.contains('modal-item__focus')) ) {
   				

   				balconyWindowName = itemService[2].children[0].children[2].children[2].children[0].children[2].innerHTML.trim();
	   			balconyWindowPrice  = Number((itemService[2].children[0].children[2].children[2].children[0].children[0].innerHTML.trim()).split(' ')[0]);
	   			balconyWindowCount  = Number((itemService[2].children[0].children[2].children[2].children[1].children[1].innerHTML).trim());
	   		
	   			balconyWindow.innerHTML = balconyWindowName +": "+ balconyWindowCount +" м2 " + (balconyWindowPrice * balconyWindowCount)+ " " + "руб";
				
   			}else {
   				balconyWindowPrice = 0;
				balconyWindowCount = 0;
   			}


   			//Мансардное окно
   			if ((itemService[2].children[0].children[2].children[3].classList.contains('modal-item__focus')) ) {
   				

   				roofWindowsName = itemService[2].children[0].children[2].children[3].children[0].children[2].innerHTML.trim();
	   			roofWindowsPrice  = Number((itemService[2].children[0].children[2].children[3].children[0].children[0].innerHTML.trim()).split(' ')[0]);
	   			
	   			roofWindowsCount  = Number((itemService[2].children[0].children[2].children[3].children[1].children[1].innerHTML).trim());
	   			;

	   			roofWindow.innerHTML = roofWindowsName +": "+ roofWindowsCount +" м2 " + (roofWindowsPrice * roofWindowsCount)+ " " + "руб";
				
   			}else {
   				roofWindowsPrice = 0;
				roofWindowsCount = 0;
   			}
   				
   			
			if (document.querySelector('.active__discount__item')) {
   				discountModal = Number(document.querySelector('.active__discount__item').children[0].innerHTML.trim().split('%')[0]);
   				
   				if (discountModal != 0) {
   					discountModal *= -1;
   				}else {
   					discountModal;
   				}
	   		}else {
	   			discountModal = 0;
	   		}

			addFridgePrice = document.querySelector('.check__list__add__service').innerText.trim();
			addMicrowavePrice = document.querySelector('.check__list__add__microwave').innerText.trim(); 
			addOvenPrice = document.querySelector('.check__list__add__oven').innerText.trim(); 
			addHoodPrice = document.querySelector('.check__list__add__hood').innerText.trim(); 
			addTablewarePrice = document.querySelector('.check__list__add__tableware').innerText.trim(); 
			addKitchenPrice = document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim();
			addWindowPrice = document.querySelector('.check__list__add__window').innerText.trim(); 
			addBalconyPrice = document.querySelector('.check__list__add__balcony').innerText.trim(); 
			addIroningPrice = document.querySelector('.check__list__add__ironing').innerText.trim(); 
			addTrayPrice = document.querySelector('.check__list__add__tray').innerText.trim(); 
			addDisinfectionPrice = document.querySelector('.check__list__add__disinfection').innerText.trim(); 
			addSteamCleanerPrice = document.querySelector('.check__list__add__steam_cleaner').innerText.trim(); 
			addDivanPrice = document.querySelector('.check__list__add__divan').innerText.trim(); 
			addUglovoiDivanPrice = document.querySelector('.check__list__add__uglovoi-divan').innerText.trim(); 
			addDetskiyDivanPrice = document.querySelector('.check__list__add__detskiy-divan').innerText.trim(); 
			addKresloPrice = document.querySelector('.check__list__add__kreslo').innerText.trim(); 
			addStulPrice = document.querySelector('.check__list__add__stul').innerText.trim(); 
			addMatracPrice = document.querySelector('.check__list__add__matrac').innerText.trim();
			addKoverPrice = document.querySelector('.check__list__add__kover').innerText.trim();
			addKovrolinPrice = document.querySelector('.check__list__add__kovrolin').innerText.trim();
			let oneWindowSum = document.querySelector('.check__list__add__window').innerText.trim();
			let panoramicWindowSum = document.querySelector('.check__list__add__panoramic_window').innerText.trim();
			let balconyWindowSum = document.querySelector('.check__list__add__balcony_window').innerText.trim();
			let roofWindowSum = document.querySelector('.check__list__add__roof_windows').innerText.trim();
	   		
	   		if (addFridgePrice != "") {
	   			addFridgePrice = Number((document.querySelector('.check__list__add__service').innerText.trim()).split(' ')[1]); 
	   		}else {
	   			addFridgePrice = 0;
	   		}
	   		if (addMicrowavePrice != "") {
				addMicrowavePrice = Number((document.querySelector('.check__list__add__microwave').innerText.trim()).split(' ')[1]); 
			}else {
				addMicrowavePrice = 0;
			}

			if (addOvenPrice != "") {
				addOvenPrice = Number(( document.querySelector('.check__list__add__oven').innerText.trim()).split(' ')[1]); 
			}else {
				addOvenPrice = 0;
			}

			if (addHoodPrice != "") {
				addHoodPrice  = Number((document.querySelector('.check__list__add__hood').innerText.trim()).split(' ')[1]); 
			}else {
				addHoodPrice = 0;
			}

			if (addTablewarePrice != "") {
				addTablewarePrice =  Number((document.querySelector('.check__list__add__tableware').innerText.trim()).split(' ')[1]); 
			}else {
				addTablewarePrice = 0;
			}

			if (addKitchenPrice != "") {
				addKitchenPrice = Number((document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim()).split(' ')[3]); 
			}else {
				addKitchenPrice = 0;
			}

			if (addBalconyPrice != "") {
				addBalconyPrice = Number((document.querySelector('.check__list__add__balcony').innerText.trim()).split(' ')[1]); 
			}else {
				addBalconyPrice = 0;
			}

			if (addIroningPrice != "") {
				addIroningPrice = Number((document.querySelector('.check__list__add__ironing').innerText.trim()).split(' ')[1]); 
			}else {
				addIroningPrice = 0;
			}

			if (addTrayPrice != "") {
				addTrayPrice = Number((document.querySelector('.check__list__add__tray').innerText.trim()).split(' ')[1]); 
			}else {
				addTrayPrice = 0;
			}

			if (addDisinfectionPrice != "") {
				addDisinfectionPrice = Number((document.querySelector('.check__list__add__disinfection').innerText.trim()).split(' ')[1]);
			}else {
				addDisinfectionPrice = 0;
			}

			if (addSteamCleanerPrice != "") {
				addSteamCleanerPrice = Number((document.querySelector('.check__list__add__steam_cleaner').innerText.trim()).split(' ')[1]); 
			}else {
				addSteamCleanerPrice = 0;
			}

			if (addDivanPrice != "") {
				addDivanPrice = Number((document.querySelector('.check__list__add__divan').innerText.trim()).split(' ')[2]); 
			}else {
				addDivanPrice = 0;
			}

			if (addUglovoiDivanPrice != "") {
				addUglovoiDivanPrice = Number((document.querySelector('.check__list__add__uglovoi-divan').innerText.trim()).split(' ')[3]); 
			}else {
				addUglovoiDivanPrice = 0;
			}

			if (addDetskiyDivanPrice != "") {
				addDetskiyDivanPrice = Number((document.querySelector('.check__list__add__detskiy-divan').innerText.trim()).split(' ')[3]); 
			}else {
				addDetskiyDivanPrice = 0;
			}

			if (addKresloPrice != "") {
				addKresloPrice = Number((document.querySelector('.check__list__add__kreslo').innerText.trim()).split(' ')[2]); 
			}else {
				addKresloPrice = 0;
			}

			if (addStulPrice != "") {
				addStulPrice = Number((document.querySelector('.check__list__add__stul').innerText.trim()).split(' ')[3]); 
			}else {
				addStulPrice = 0;
			}

			if (addMatracPrice != "") {
				addMatracPrice = Number((document.querySelector('.check__list__add__matrac').innerText.trim()).split(' ')[4]);
			}else {
				addMatracPrice = 0;
			}

			if (addKoverPrice != "") {
				addKoverPrice = Number((document.querySelector('.check__list__add__kover').innerText.trim()).split(' ')[3]);
			}else {
				addKoverPrice = 0
			}

			if (addKovrolinPrice != "") {
				addKovrolinPrice = Number((document.querySelector('.check__list__add__kovrolin').innerText.trim()).split(' ')[3]);
			} else {
				addKovrolinPrice = 0;
			} 

	   		if (oneWindowSum !="") {
	   			oneWindowSum = Number((document.querySelector('.check__list__add__window').innerText.trim()).split(' ')[4]);
	   		}else {
	   			oneWindowSum = 0;
	   		}
	   		if (panoramicWindowSum !="") {
	   			panoramicWindowSum = Number((document.querySelector('.check__list__add__panoramic_window').innerText.trim()).split(' ')[4]);
	   		}else {
	   			panoramicWindowSum = 0;
	   		}
	   		if (balconyWindowSum !="") {
	   			balconyWindowSum = Number((document.querySelector('.check__list__add__balcony_window').innerText.trim()).split(' ')[5]);
	   		}else {
	   			balconyWindowSum = 0;
	   		}
	   		if (roofWindowSum !="") {
	   			roofWindowSum = Number((document.querySelector('.check__list__add__roof_windows').innerText.trim()).split(' ')[4]);
	   		}else {
	   			roofWindowSum = 0;
	   		}
   			if (document.querySelector('.__select__title__type__cleaning').innerText == "Поддерживающая уборка") {
	   			let priceRooms;
	   			if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 1) {
	   				priceRooms = 48;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;
	   			}else if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 2) {
	   				priceRooms = 63;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;
	   			}else if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 3) {
	   				priceRooms = 78;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;
	   			}else if (Number(document.querySelector('.amount__room').innerHTML.split(' ')[0]) == 4) {

	   				priceRooms = 93;
	   				serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + priceRooms;

	   			}
	   		}else if (document.querySelector('.__select__title__type__cleaning').innerText == "Генеральная уборка") {
	   			let first_price = 3.2; // Подвязать значение цены из админки
      			

	   			serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum  + (first_price * Number(document.querySelector('.amount').innerHTML.split(' ')[0]));

	   		}else if (document.querySelector('.__select__title__type__cleaning').innerText == "Уборка после ремонта"){
	   			let second_price = 3.5; // Подвязать значение цены из админки

	   			serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum  + (second_price * Number(document.querySelector('.amount__renovation').innerHTML.split(' ')[0]));

	   		}else if (document.querySelector('.__select__title__type__cleaning').innerText == "Выберите тип уборки:") {
	   			serviceSumm = addFridgePrice + addMicrowavePrice + addOvenPrice + addHoodPrice + addTablewarePrice + addKitchenPrice +  addBalconyPrice + addIroningPrice + addTrayPrice + addDisinfectionPrice + addSteamCleanerPrice + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
	   		}
   			

   			document.querySelector('.payment__price').innerHTML = serviceSumm - (serviceSumm * (discountModal / 100)) + " " + "руб."; 


		});

  

      let first_price = 3.2; // Подвязать значение цены из админки
      let second_price = 3.5; // Подвязать значение цены из админки

      //Скидки подвязать через админку и все цены
      document.querySelectorAll('.discount__item').forEach((item) => {
         item.addEventListener('click', () => {
            document.querySelectorAll('.discount__item').forEach((child) => child.classList.remove('active__discount__item'));
            item.classList.toggle('active__discount__item');

            if (document.querySelector('.active__discount__item')) {

               document.querySelector('.check__lest__discount').innerHTML = "Скидка " + " " + document.querySelector('.active__discount__item').children[0].innerHTML;

                let fridge = document.querySelector('.check__list__add__service').innerText.trim();
                let microwave = document.querySelector('.check__list__add__microwave').innerText.trim();
                let oven = document.querySelector('.check__list__add__oven').innerText.trim();
                let hood = document.querySelector('.check__list__add__hood').innerText.trim();
                let tableware = document.querySelector('.check__list__add__tableware').innerText.trim();
                let kitchen__cabinets = document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim();
                let window = document.querySelector('.check__list__add__window').innerText.trim();
                let balcony = document.querySelector('.check__list__add__balcony').innerText.trim();
                let ironing = document.querySelector('.check__list__add__ironing').innerText.trim();
                let tray = document.querySelector('.check__list__add__tray').innerText.trim();
                let disinfection = document.querySelector('.check__list__add__disinfection').innerText.trim();
                let steam_cleaner = document.querySelector('.check__list__add__steam_cleaner').innerText.trim();
               
                let addDivanPrice = document.querySelector('.check__list__add__divan').innerText.trim(); 
				let addUglovoiDivanPrice = document.querySelector('.check__list__add__uglovoi-divan').innerText.trim(); 
				let addDetskiyDivanPrice = document.querySelector('.check__list__add__detskiy-divan').innerText.trim(); 
				let addKresloPrice = document.querySelector('.check__list__add__kreslo').innerText.trim(); 
				let addStulPrice = document.querySelector('.check__list__add__stul').innerText.trim(); 
				let addMatracPrice = document.querySelector('.check__list__add__matrac').innerText.trim();
				let addKoverPrice = document.querySelector('.check__list__add__kover').innerText.trim();
				let addKovrolinPrice = document.querySelector('.check__list__add__kovrolin').innerText.trim();
				let oneWindowSum = document.querySelector('.check__list__add__window').innerText.trim();
				let panoramicWindowSum = document.querySelector('.check__list__add__panoramic_window').innerText.trim();
				let balconyWindowSum = document.querySelector('.check__list__add__balcony_window').innerText.trim();
				let roofWindowSum = document.querySelector('.check__list__add__roof_windows').innerText.trim();

               

               let discounter_str = document.querySelector('.check__lest__discount').innerText;
               let discounter_split = discounter_str.split(' ')[1];
               let discounter = Number(discounter_split.split('%')[0]);


               let payment_for_discount = document.querySelector('.payment__price');
               if (fridge == "") {
                  fridge = 0;
               }
               else {
                  fridge = Number(fridge.split(' ')[1]);
               }

               if (microwave == "") {
                  microwave = 0;
               }
               else {
                  microwave = Number(microwave.split(' ')[1]);
               }

               if (oven == "") {
                  oven = 0;
                  // console.log(g);
               }
               else {
                  oven = Number(oven.split(' ')[1]);
             
               }

               if (hood == "") {
                  hood = 0;
               }
               else {
                  hood = Number(hood.split(' ')[1]);
               }
               if (tableware == "") {
                  tableware = 0;
               }
               else {
                  tableware = Number(tableware.split(' ')[1]);
               }
               if (kitchen__cabinets == "") {
                  kitchen__cabinets = 0;

               }
               else {
                  kitchen__cabinets = Number(kitchen__cabinets.split(' ')[3]);
               }
               if (window == "") {
                  window = 0;
               }
               else {
                  window = Number(window.split(' ')[1]);

               }
               if (balcony == "") {
                  balcony = 0;
               }
               else {
                  balcony = Number(balcony.split(' ')[1]);
               }
               if (ironing == "") {
                  ironing = 0;
               }
               else {
                  ironing = Number(ironing.split(' ')[1]);
               }
               if (tray == "") {
                  tray = 0;
               }
               else {
                  tray = Number(tray.split(' ')[1]);
               }
               if (disinfection == "") {
                  disinfection = 0;
               }
               else {
                  disinfection = Number(disinfection.split(' ')[1]);
               }
               if (steam_cleaner == "") {
                  steam_cleaner = 0;

               }
               else {
                  steam_cleaner = Number(steam_cleaner.split(' ')[1]);
               }

                if (addDivanPrice != "") {
				addDivanPrice = Number((document.querySelector('.check__list__add__divan').innerText.trim()).split(' ')[2]); 
				}else {
					addDivanPrice = 0;
				}

				if (addUglovoiDivanPrice != "") {
					addUglovoiDivanPrice = Number((document.querySelector('.check__list__add__uglovoi-divan').innerText.trim()).split(' ')[3]); 
				}else {
					addUglovoiDivanPrice = 0;
				}

				if (addDetskiyDivanPrice != "") {
					addDetskiyDivanPrice = Number((document.querySelector('.check__list__add__detskiy-divan').innerText.trim()).split(' ')[3]); 
				}else {
					addDetskiyDivanPrice = 0;
				}

				if (addKresloPrice != "") {
					addKresloPrice = Number((document.querySelector('.check__list__add__kreslo').innerText.trim()).split(' ')[2]); 
				}else {
					addKresloPrice = 0;
				}

				if (addStulPrice != "") {
					addStulPrice = Number((document.querySelector('.check__list__add__stul').innerText.trim()).split(' ')[3]); 
				}else {
					addStulPrice = 0;
				}

				if (addMatracPrice != "") {
					addMatracPrice = Number((document.querySelector('.check__list__add__matrac').innerText.trim()).split(' ')[4]);
				}else {
					addMatracPrice = 0;
				}

				if (addKoverPrice != "") {
					addKoverPrice = Number((document.querySelector('.check__list__add__kover').innerText.trim()).split(' ')[3]);
				}else {
					addKoverPrice = 0
				}

				if (addKovrolinPrice != "") {
					addKovrolinPrice = Number((document.querySelector('.check__list__add__kovrolin').innerText.trim()).split(' ')[3]);
				} else {
					addKovrolinPrice = 0;
				} 

		   		if (oneWindowSum !="") {
		   			oneWindowSum = Number((document.querySelector('.check__list__add__window').innerText.trim()).split(' ')[4]);
		   		}else {
		   			oneWindowSum = 0;
		   		}
		   		if (panoramicWindowSum !="") {
		   			panoramicWindowSum = Number((document.querySelector('.check__list__add__panoramic_window').innerText.trim()).split(' ')[4]);
		   		}else {
		   			panoramicWindowSum = 0;
		   		}
		   		if (balconyWindowSum !="") {
		   			balconyWindowSum = Number((document.querySelector('.check__list__add__balcony_window').innerText.trim()).split(' ')[5]);
		   		}else {
		   			balconyWindowSum = 0;
		   		}
		   		if (roofWindowSum !="") {
		   			roofWindowSum = Number((document.querySelector('.check__list__add__roof_windows').innerText.trim()).split(' ')[4]);
		   		}else {
		   			roofWindowSum = 0;
		   		}



               if (discounter != 0) {
                  discounter *= -1;
               }
               if (document.querySelector('.__select__title__type__cleaning').innerText == "Генеральная уборка") {
                  let general_cleaning_amount = Number((document.querySelector('.amount').innerText.trim()).split(' ')[0]);
                  //let sum = fridge + microwave + oven + hood + tableware + kitchen__cabinets + window + balcony + ironing + tray + disinfection + steam_cleaner;
                  let sum = fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
                  let price_service = (general_cleaning_amount * first_price) + sum;

                  payment_for_discount.innerHTML = (price_service - ((price_service * discounter) / 100)).toFixed(2) + " " + "руб.";

               }
               else if (document.querySelector('.__select__title__type__cleaning').innerText == "Поддерживающая уборка") {
                  let general_cleaning_amount = Number((document.querySelector('.amount__room').innerText.trim()).split(' ')[0]);
                  //let sum = fridge + microwave + oven + hood + tableware + kitchen__cabinets + window + balcony + ironing + tray + disinfection + steam_cleaner;
                  let sum = fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
                  if (general_cleaning_amount == 1) {
                     general_cleaning_amount = 48;
                     let sum = general_cleaning_amount + fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;

                     payment_for_discount.innerHTML = (sum - ((sum * discounter) / 100)).toFixed(2) + " " + "руб.";

                  }
                  else if (general_cleaning_amount == 2) {
                     general_cleaning_amount = 63;
                     let sum = general_cleaning_amount + fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;

                     payment_for_discount.innerHTML = (sum - ((sum * discounter) / 100)).toFixed(2) + " " + "руб.";

                  }
                  else if (general_cleaning_amount == 3) {
                     general_cleaning_amount = 78;
                     let sum = general_cleaning_amount + fridge + microwave + oven + hood + tableware + kitchen__cabinets  + balcony + ironing + tray + disinfection + steam_cleaner + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;

                     payment_for_discount.innerHTML = (sum - ((sum * discounter) / 100)).toFixed(2) + " " + "руб.";

                  }
                  else if (general_cleaning_amount == 4) {
                     general_cleaning_amount = 93;
                     let sum = general_cleaning_amount + fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;

                     payment_for_discount.innerHTML = (sum - ((sum * discounter) / 100)).toFixed(2) + " " + "руб.";

                  }



               }
               else if (document.querySelector('.__select__title__type__cleaning').innerText == "Уборка после ремонта") {
                  let general_cleaning_amount = Number((document.querySelector('.amount__renovation').innerText.trim()).split(' ')[0]);
                  let sum = fridge + microwave + oven + hood + tableware + kitchen__cabinets  + balcony + ironing + tray + disinfection + steam_cleaner + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
                  let price_service = (general_cleaning_amount * second_price) + sum;

                  payment_for_discount.innerHTML = (price_service - ((price_service * discounter) / 100)).toFixed(2) + " " + "руб.";

               }
               else if (document.querySelector('.__select__title__type__cleaning').innerText == "Выберите тип уборки:") {
               
                  let sum = fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;

                  payment_for_discount.innerHTML = (sum - ((sum * discounter) / 100)).toFixed(2) + " " + "руб.";

               }

            }

         });
      });

      function Myrange() {

         // let fridge_1 = Number(document.querySelector('.check__list__add__service').innerText.trim().split(' ')[1]);
         let service = document.querySelector('.check__list__add__service').innerHTML;
         let fridge = document.querySelector('.check__list__add__service').innerText.trim();
         let microwave = document.querySelector('.check__list__add__microwave').innerText.trim();
         let oven = document.querySelector('.check__list__add__oven').innerText.trim();
         let hood = document.querySelector('.check__list__add__hood').innerText.trim();
         let tableware = document.querySelector('.check__list__add__tableware').innerText.trim();
         let kitchen__cabinets = document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim();
         let window = document.querySelector('.check__list__add__window').innerText.trim();
         let balcony = document.querySelector('.check__list__add__balcony').innerText.trim();
         let ironing = document.querySelector('.check__list__add__ironing').innerText.trim();
         let tray = document.querySelector('.check__list__add__tray').innerText.trim();
         let disinfection = document.querySelector('.check__list__add__disinfection').innerText.trim();
         let steam_cleaner = document.querySelector('.check__list__add__steam_cleaner').innerText.trim();

        let addDivanPrice = document.querySelector('.check__list__add__divan').innerText.trim(); 
		let addUglovoiDivanPrice = document.querySelector('.check__list__add__uglovoi-divan').innerText.trim(); 
		let addDetskiyDivanPrice = document.querySelector('.check__list__add__detskiy-divan').innerText.trim(); 
		let addKresloPrice = document.querySelector('.check__list__add__kreslo').innerText.trim(); 
		let addStulPrice = document.querySelector('.check__list__add__stul').innerText.trim(); 
		let addMatracPrice = document.querySelector('.check__list__add__matrac').innerText.trim();
		let addKoverPrice = document.querySelector('.check__list__add__kover').innerText.trim();
		let addKovrolinPrice = document.querySelector('.check__list__add__kovrolin').innerText.trim();
		let oneWindowSum = document.querySelector('.check__list__add__window').innerText.trim();
		let panoramicWindowSum = document.querySelector('.check__list__add__panoramic_window').innerText.trim();
		let balconyWindowSum = document.querySelector('.check__list__add__balcony_window').innerText.trim();
		let roofWindowSum = document.querySelector('.check__list__add__roof_windows').innerText.trim();

         let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
         let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
         let b_tst = a_tst.split(' ')[1];
         let mynum;
         if (discount_active != "") {
            mynum = Number(b_tst.split('%')[0]) * (-1);
         }
         else {
            mynum = 0;
         }


         line = document.getElementById("line").value;
         my = document.querySelector(".amount");
         my.innerHTML = line + " м<sup><small>2</small></sup>";
         let payment__price = document.querySelector('.payment__price');

         if (fridge == "") {
            fridge = 0;
         }
         else {
            fridge = Number(fridge.split(' ')[1]);
         }

         if (microwave == "") {
            microwave = 0;
         }
         else {
            microwave = Number(microwave.split(' ')[1]);
         }

         if (oven == "") {
            oven = 0;
            // console.log(g);
         }
         else {
            oven = Number(oven.split(' ')[1]);
         
         }

         if (hood == "") {
            hood = 0;
         }
         else {
            hood = Number(hood.split(' ')[1]);
         }
         if (tableware == "") {
            tableware = 0;
         }
         else {
            tableware = Number(tableware.split(' ')[1]);
         }
         if (kitchen__cabinets == "") {
            kitchen__cabinets = 0;

         }
         else {
            kitchen__cabinets = Number(kitchen__cabinets.split(' ')[3]);
         }
         if (window == "") {
            window = 0;
         }
         else {
            window = Number(window.split(' ')[1]);

         }
         if (balcony == "") {
            balcony = 0;
         }
         else {
            balcony = Number(balcony.split(' ')[1]);
         }
         if (ironing == "") {
            ironing = 0;
         }
         else {
            ironing = Number(ironing.split(' ')[1]);
         }
         if (tray == "") {
            tray = 0;
         }
         else {
            tray = Number(tray.split(' ')[1]);
         }
         if (disinfection == "") {
            disinfection = 0;
         }
         else {
            disinfection = Number(disinfection.split(' ')[1]);
         }


         if (steam_cleaner == "") {
            steam_cleaner = 0;

         }
         else {
            steam_cleaner = Number(steam_cleaner.split(' ')[1]);
         }

        if (addDivanPrice != "") {
		addDivanPrice = Number((document.querySelector('.check__list__add__divan').innerText.trim()).split(' ')[2]); 
		}else {
			addDivanPrice = 0;
		}

		if (addUglovoiDivanPrice != "") {
			addUglovoiDivanPrice = Number((document.querySelector('.check__list__add__uglovoi-divan').innerText.trim()).split(' ')[3]); 
		}else {
			addUglovoiDivanPrice = 0;
		}

		if (addDetskiyDivanPrice != "") {
			addDetskiyDivanPrice = Number((document.querySelector('.check__list__add__detskiy-divan').innerText.trim()).split(' ')[3]); 
		}else {
			addDetskiyDivanPrice = 0;
		}

		if (addKresloPrice != "") {
			addKresloPrice = Number((document.querySelector('.check__list__add__kreslo').innerText.trim()).split(' ')[2]); 
		}else {
			addKresloPrice = 0;
		}

		if (addStulPrice != "") {
			addStulPrice = Number((document.querySelector('.check__list__add__stul').innerText.trim()).split(' ')[3]); 
		}else {
			addStulPrice = 0;
		}

		if (addMatracPrice != "") {
			addMatracPrice = Number((document.querySelector('.check__list__add__matrac').innerText.trim()).split(' ')[4]);
		}else {
			addMatracPrice = 0;
		}

		if (addKoverPrice != "") {
			addKoverPrice = Number((document.querySelector('.check__list__add__kover').innerText.trim()).split(' ')[3]);
		}else {
			addKoverPrice = 0
		}

		if (addKovrolinPrice != "") {
			addKovrolinPrice = Number((document.querySelector('.check__list__add__kovrolin').innerText.trim()).split(' ')[3]);
		} else {
			addKovrolinPrice = 0;
		} 

   		if (oneWindowSum !="") {
   			oneWindowSum = Number((document.querySelector('.check__list__add__window').innerText.trim()).split(' ')[4]);
   		}else {
   			oneWindowSum = 0;
   		}
   		if (panoramicWindowSum !="") {
   			panoramicWindowSum = Number((document.querySelector('.check__list__add__panoramic_window').innerText.trim()).split(' ')[4]);
   		}else {
   			panoramicWindowSum = 0;
   		}
   		if (balconyWindowSum !="") {
   			balconyWindowSum = Number((document.querySelector('.check__list__add__balcony_window').innerText.trim()).split(' ')[5]);
   		}else {
   			balconyWindowSum = 0;
   		}
   		if (roofWindowSum !="") {
   			roofWindowSum = Number((document.querySelector('.check__list__add__roof_windows').innerText.trim()).split(' ')[4]);
   		}else {
   			roofWindowSum = 0;
   		}
   		let newServiceSum;		
         if (mynum == 20) {
            mynum = 20 / 100;
            newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
            let sum = (line * (first_price - (first_price * mynum))) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum)) + (window - (window * mynum)) + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum))+ (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
            let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
            payment__price.innerHTML = sum_int + " " + "руб.";

         } else if (mynum == 15) {
            mynum = 15 / 100;
            newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
            let sum = (line * (first_price - (first_price * mynum))) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum)) + (window - (window * mynum)) + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum))+ (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
            let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
            payment__price.innerHTML = sum_int + " " + "руб.";

         } else if (mynum == 10) {
            mynum = 10 / 100;
            newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
            let sum = (line * (first_price - (first_price * mynum))) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum)) + (window - (window * mynum)) + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
            let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
            payment__price.innerHTML = sum_int + " " + "руб.";
            console.log((line * (first_price - (first_price * mynum))));

         } else {
            let sum = (line * first_price) + fridge + microwave + oven + hood + tableware + kitchen__cabinets +  balcony + ironing + tray + disinfection + steam_cleaner + addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum + " " + "руб.";
            let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
            payment__price.innerHTML = sum_int + " " + "руб.";
         }



      }
      function Myrange__col__room() {
         let service = document.querySelector('.check__list__add__service').innerHTML;
         let fridge = document.querySelector('.check__list__add__service').innerText.trim();
         let microwave = document.querySelector('.check__list__add__microwave').innerText.trim();
         let oven = document.querySelector('.check__list__add__oven').innerText.trim();
         let hood = document.querySelector('.check__list__add__hood').innerText.trim();
         let tableware = document.querySelector('.check__list__add__tableware').innerText.trim();
         let kitchen__cabinets = document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim();
         let window = document.querySelector('.check__list__add__window').innerText.trim();
         let balcony = document.querySelector('.check__list__add__balcony').innerText.trim();
         let ironing = document.querySelector('.check__list__add__ironing').innerText.trim();
         let tray = document.querySelector('.check__list__add__tray').innerText.trim();
         let disinfection = document.querySelector('.check__list__add__disinfection').innerText.trim();
         let steam_cleaner = document.querySelector('.check__list__add__steam_cleaner').innerText.trim();

        let addDivanPrice = document.querySelector('.check__list__add__divan').innerText.trim(); 
		let addUglovoiDivanPrice = document.querySelector('.check__list__add__uglovoi-divan').innerText.trim(); 
		let addDetskiyDivanPrice = document.querySelector('.check__list__add__detskiy-divan').innerText.trim(); 
		let addKresloPrice = document.querySelector('.check__list__add__kreslo').innerText.trim(); 
		let addStulPrice = document.querySelector('.check__list__add__stul').innerText.trim(); 
		let addMatracPrice = document.querySelector('.check__list__add__matrac').innerText.trim();
		let addKoverPrice = document.querySelector('.check__list__add__kover').innerText.trim();
		let addKovrolinPrice = document.querySelector('.check__list__add__kovrolin').innerText.trim();
		let oneWindowSum = document.querySelector('.check__list__add__window').innerText.trim();
		let panoramicWindowSum = document.querySelector('.check__list__add__panoramic_window').innerText.trim();
		let balconyWindowSum = document.querySelector('.check__list__add__balcony_window').innerText.trim();
		let roofWindowSum = document.querySelector('.check__list__add__roof_windows').innerText.trim();

         let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
         let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
         let b_tst = a_tst.split(' ')[1];
         let mynum;
         if (discount_active != "") {
            mynum = Number(b_tst.split('%')[0]) * (-1);
         }
         else {
            mynum = 0;
         }

         if (fridge == "") {
            fridge = 0;
         }
         else {
            fridge = Number(fridge.split(' ')[1]);
         }

         if (microwave == "") {
            microwave = 0;
         }
         else {
            microwave = Number(microwave.split(' ')[1]);
         }

         if (oven == "") {
            oven = 0;
         }
         else {
            oven = Number(oven.split(' ')[1]);
         }

         if (hood == "") {
            hood = 0;
         }
         else {
            hood = Number(hood.split(' ')[1]);
         }
         if (tableware == "") {
            tableware = 0;
         }
         else {
            tableware = Number(tableware.split(' ')[1]);
         }
         if (kitchen__cabinets == "") {
            kitchen__cabinets = 0;

         }
         else {
            kitchen__cabinets = Number(kitchen__cabinets.split(' ')[3]);
         }
         if (window == "") {
            window = 0;
         }
         else {
            window = Number(window.split(' ')[1]);

         }
         if (balcony == "") {
            balcony = 0;
         }
         else {
            balcony = Number(balcony.split(' ')[1]);
         }
         if (ironing == "") {
            ironing = 0;
         }
         else {
            ironing = Number(ironing.split(' ')[1]);
         }
         if (tray == "") {
            tray = 0;
         }
         else {
            tray = Number(tray.split(' ')[1]);
         }
         if (disinfection == "") {
            disinfection = 0;
         }
         else {
            disinfection = Number(disinfection.split(' ')[1]);
         }

         if (steam_cleaner == "") {
            steam_cleaner = 0;

         }
         else {
            steam_cleaner = Number(steam_cleaner.split(' ')[1]);
         }
         if (addDivanPrice != "") {
		addDivanPrice = Number((document.querySelector('.check__list__add__divan').innerText.trim()).split(' ')[2]); 
		}else {
			addDivanPrice = 0;
		}

		if (addUglovoiDivanPrice != "") {
			addUglovoiDivanPrice = Number((document.querySelector('.check__list__add__uglovoi-divan').innerText.trim()).split(' ')[3]); 
		}else {
			addUglovoiDivanPrice = 0;
		}

		if (addDetskiyDivanPrice != "") {
			addDetskiyDivanPrice = Number((document.querySelector('.check__list__add__detskiy-divan').innerText.trim()).split(' ')[3]); 
		}else {
			addDetskiyDivanPrice = 0;
		}

		if (addKresloPrice != "") {
			addKresloPrice = Number((document.querySelector('.check__list__add__kreslo').innerText.trim()).split(' ')[2]); 
		}else {
			addKresloPrice = 0;
		}

		if (addStulPrice != "") {
			addStulPrice = Number((document.querySelector('.check__list__add__stul').innerText.trim()).split(' ')[3]); 
		}else {
			addStulPrice = 0;
		}

		if (addMatracPrice != "") {
			addMatracPrice = Number((document.querySelector('.check__list__add__matrac').innerText.trim()).split(' ')[4]);
		}else {
			addMatracPrice = 0;
		}

		if (addKoverPrice != "") {
			addKoverPrice = Number((document.querySelector('.check__list__add__kover').innerText.trim()).split(' ')[3]);
		}else {
			addKoverPrice = 0
		}

		if (addKovrolinPrice != "") {
			addKovrolinPrice = Number((document.querySelector('.check__list__add__kovrolin').innerText.trim()).split(' ')[3]);
		} else {
			addKovrolinPrice = 0;
		} 

   		if (oneWindowSum !="") {
   			oneWindowSum = Number((document.querySelector('.check__list__add__window').innerText.trim()).split(' ')[4]);
   		}else {
   			oneWindowSum = 0;
   		}
   		if (panoramicWindowSum !="") {
   			panoramicWindowSum = Number((document.querySelector('.check__list__add__panoramic_window').innerText.trim()).split(' ')[4]);
   		}else {
   			panoramicWindowSum = 0;
   		}
   		if (balconyWindowSum !="") {
   			balconyWindowSum = Number((document.querySelector('.check__list__add__balcony_window').innerText.trim()).split(' ')[5]);
   		}else {
   			balconyWindowSum = 0;
   		}
   		if (roofWindowSum !="") {
   			roofWindowSum = Number((document.querySelector('.check__list__add__roof_windows').innerText.trim()).split(' ')[4]);
   		}else {
   			roofWindowSum = 0;
   		}


         line__room = document.getElementById("line__room").value;
         my__room = document.querySelector(".amount__room");
         my__room.innerHTML = line__room;
         let payment__price3 = document.querySelector('.payment__price');
         payment__price3.innerHTML = 48 + 15;
         let newServiceSum;
         if (mynum == 20) {
            mynum = 20 / 100;

            if (line__room == 1) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (48 - (48 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 2) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (63 - (63 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 3) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (78 - (78 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 4) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (93 - (93 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum))+ " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }

         } else if (mynum == 15) {
            mynum = 15 / 100;
            if (line__room == 1) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (48 - (48 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum))+ " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 2) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (63 - (63 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 3) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (78 - (78 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum))+ (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 4) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (93 - (93 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
         } else if (mynum == 10) {
            mynum = 10 / 100;
            if (line__room == 1) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (48 - (48 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 2) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (63 - (63 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 3) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (78 - (78 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 4) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = (93 - (93 * mynum)) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum - (newServiceSum * mynum)) + " " + "руб.";
               let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
         } else {
            if (line__room == 1) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = 48 + fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + newServiceSum + " " + "руб.";
               let sum_int = Number(sum.split(' ')[0]);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 2) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = 63 + fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + newServiceSum + " " + "руб.";
               let sum_int = Number(sum.split(' ')[0]);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 3) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = 78 + fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + newServiceSum + " " + "руб.";
               let sum_int = Number(sum.split(' ')[0]);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
            else if (line__room == 4) {
            	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
               let sum = 93 + fridge + microwave + oven + hood + tableware + kitchen__cabinets + balcony + ironing + tray + disinfection + steam_cleaner + newServiceSum + " " + "руб.";
               let sum_int = Number(sum.split(' ')[0]);
               payment__price3.innerHTML = sum_int + " " + "руб.";
            }
         }


         if (my__room.innerHTML > 1 && my__room.innerHTML <= 4) {
            my__room.innerHTML = line__room + " комнаты";
         }
         else if (my__room.innerHTML >= 5) {
            my__room.innerHTML = line__room + " комнат";
         }
         else {
            my__room.innerHTML = line__room + " комната";
         }

      }
      function Myrange__renovation() {
         let service = document.querySelector('.check__list__add__service').innerHTML;
         let fridge = document.querySelector('.check__list__add__service').innerText.trim();
         let microwave = document.querySelector('.check__list__add__microwave').innerText.trim();
         let oven = document.querySelector('.check__list__add__oven').innerText.trim();
         let hood = document.querySelector('.check__list__add__hood').innerText.trim();
         let tableware = document.querySelector('.check__list__add__tableware').innerText.trim();
         let kitchen__cabinets = document.querySelector('.check__list__add__kitchen__cabinets').innerText.trim();
         let window = document.querySelector('.check__list__add__window').innerText.trim();
         let balcony = document.querySelector('.check__list__add__balcony').innerText.trim();
         let ironing = document.querySelector('.check__list__add__ironing').innerText.trim();
         let tray = document.querySelector('.check__list__add__tray').innerText.trim();
         let disinfection = document.querySelector('.check__list__add__disinfection').innerText.trim();
         let steam_cleaner = document.querySelector('.check__list__add__steam_cleaner').innerText.trim();

        let addDivanPrice = document.querySelector('.check__list__add__divan').innerText.trim(); 
		let addUglovoiDivanPrice = document.querySelector('.check__list__add__uglovoi-divan').innerText.trim(); 
		let addDetskiyDivanPrice = document.querySelector('.check__list__add__detskiy-divan').innerText.trim(); 
		let addKresloPrice = document.querySelector('.check__list__add__kreslo').innerText.trim(); 
		let addStulPrice = document.querySelector('.check__list__add__stul').innerText.trim(); 
		let addMatracPrice = document.querySelector('.check__list__add__matrac').innerText.trim();
		let addKoverPrice = document.querySelector('.check__list__add__kover').innerText.trim();
		let addKovrolinPrice = document.querySelector('.check__list__add__kovrolin').innerText.trim();
		let oneWindowSum = document.querySelector('.check__list__add__window').innerText.trim();
		let panoramicWindowSum = document.querySelector('.check__list__add__panoramic_window').innerText.trim();
		let balconyWindowSum = document.querySelector('.check__list__add__balcony_window').innerText.trim();
		let roofWindowSum = document.querySelector('.check__list__add__roof_windows').innerText.trim();


         let payment__price2 = document.querySelector('.payment__price');
         line__renovation = document.getElementById("line__renovation").value;
         my__renovation = document.querySelector(".amount__renovation");
         my__renovation.innerHTML = line__renovation + " м<sup><small>2</small></sup>";

         let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
         let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
         let b_tst = a_tst.split(' ')[1];
         let mynum;
         if (discount_active != "") {
            mynum = Number(b_tst.split('%')[0]) * (-1);
         }
         else {
            mynum = 0;
         }

         if (fridge == "") {
            fridge = 0;
         }
         else {

            fridge = Number(fridge.split(' ')[1]);

         }

         if (microwave == "") {
            microwave = 0;
         }
         else {
            microwave = Number(microwave.split(' ')[1]);
         }

         if (oven == "") {
            oven = 0;
            // console.log(g);
         }
         else {
            oven = Number(oven.split(' ')[1]);
         }

         if (hood == "") {
            hood = 0;
         }
         else {
            hood = Number(hood.split(' ')[1]);
         }
         if (tableware == "") {
            tableware = 0;
         }
         else {
            tableware = Number(tableware.split(' ')[1]);
         }
         if (kitchen__cabinets == "") {
            kitchen__cabinets = 0;

         }
         else {
            kitchen__cabinets = Number(kitchen__cabinets.split(' ')[3]);
         }
         if (balcony == "") {
            balcony = 0;
         }
         else {
            balcony = Number(balcony.split(' ')[1]);
         }
         if (ironing == "") {
            ironing = 0;
         }
         else {
            ironing = Number(ironing.split(' ')[1]);
         }
         if (tray == "") {
            tray = 0;
         }
         else {
            tray = Number(tray.split(' ')[1]);
         }
         if (disinfection == "") {
            disinfection = 0;
         }
         else {
            disinfection = Number(disinfection.split(' ')[1]);
         }
         if (steam_cleaner == "") {
            steam_cleaner = 0;

         }
         else {
            steam_cleaner = Number(steam_cleaner.split(' ')[1]);
         }

         if (addDivanPrice != "") {
		addDivanPrice = Number((document.querySelector('.check__list__add__divan').innerText.trim()).split(' ')[2]); 
		}else {
			addDivanPrice = 0;
		}

		if (addUglovoiDivanPrice != "") {
			addUglovoiDivanPrice = Number((document.querySelector('.check__list__add__uglovoi-divan').innerText.trim()).split(' ')[3]); 
		}else {
			addUglovoiDivanPrice = 0;
		}

		if (addDetskiyDivanPrice != "") {
			addDetskiyDivanPrice = Number((document.querySelector('.check__list__add__detskiy-divan').innerText.trim()).split(' ')[3]); 
		}else {
			addDetskiyDivanPrice = 0;
		}

		if (addKresloPrice != "") {
			addKresloPrice = Number((document.querySelector('.check__list__add__kreslo').innerText.trim()).split(' ')[2]); 
		}else {
			addKresloPrice = 0;
		}

		if (addStulPrice != "") {
			addStulPrice = Number((document.querySelector('.check__list__add__stul').innerText.trim()).split(' ')[3]); 
		}else {
			addStulPrice = 0;
		}

		if (addMatracPrice != "") {
			addMatracPrice = Number((document.querySelector('.check__list__add__matrac').innerText.trim()).split(' ')[4]);
		}else {
			addMatracPrice = 0;
		}

		if (addKoverPrice != "") {
			addKoverPrice = Number((document.querySelector('.check__list__add__kover').innerText.trim()).split(' ')[3]);
		}else {
			addKoverPrice = 0
		}

		if (addKovrolinPrice != "") {
			addKovrolinPrice = Number((document.querySelector('.check__list__add__kovrolin').innerText.trim()).split(' ')[3]);
		} else {
			addKovrolinPrice = 0;
		} 

   		if (oneWindowSum !="") {
   			oneWindowSum = Number((document.querySelector('.check__list__add__window').innerText.trim()).split(' ')[4]);
   		}else {
   			oneWindowSum = 0;
   		}
   		if (panoramicWindowSum !="") {
   			panoramicWindowSum = Number((document.querySelector('.check__list__add__panoramic_window').innerText.trim()).split(' ')[4]);
   		}else {
   			panoramicWindowSum = 0;
   		}
   		if (balconyWindowSum !="") {
   			balconyWindowSum = Number((document.querySelector('.check__list__add__balcony_window').innerText.trim()).split(' ')[5]);
   		}else {
   			balconyWindowSum = 0;
   		}
   		if (roofWindowSum !="") {
   			roofWindowSum = Number((document.querySelector('.check__list__add__roof_windows').innerText.trim()).split(' ')[4]);
   		}else {
   			roofWindowSum = 0;
   		}
   		let newServiceSum;
         if (mynum == 20) {
            mynum = 20 / 100;
            newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
            let sum = (line__renovation * (second_price - (second_price * mynum))) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum))  + (newServiceSum-(newServiceSum*mynum))+ " " + "руб.";
            let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
            payment__price2.innerHTML = sum_int + " " + "руб.";

         } else if (mynum == 15) {
            mynum = 15 / 100;
            newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
            let sum = (line__renovation * (second_price - (second_price * mynum))) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum-(newServiceSum*mynum)) + " " + "руб.";
            let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
            payment__price2.innerHTML = sum_int + " " + "руб.";

         } else if (mynum == 10) {
            mynum = 10 / 100;
            newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
            let sum = (line__renovation * (second_price - (second_price * mynum))) + (fridge - (fridge * mynum)) + (microwave - (microwave * mynum)) + (oven - (oven * mynum)) + (hood - (hood * mynum)) + (tableware - (tableware * mynum)) + (kitchen__cabinets - (kitchen__cabinets * mynum))  + (balcony - (balcony * mynum)) + (ironing - (ironing * mynum)) + (tray - (tray * mynum)) + (disinfection - (disinfection * mynum)) + (steam_cleaner - (steam_cleaner * mynum)) + (newServiceSum-(newServiceSum*mynum)) + " " + "руб.";
            let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
            payment__price2.innerHTML = sum_int + " " + "руб.";

         } else {
         	newServiceSum = addDivanPrice + addUglovoiDivanPrice + addDetskiyDivanPrice + addKresloPrice + addStulPrice + addMatracPrice + addKoverPrice + addKovrolinPrice + oneWindowSum + panoramicWindowSum + balconyWindowSum + roofWindowSum;
            let sum = (line__renovation * second_price) + fridge + microwave + oven + hood + tableware + kitchen__cabinets  + balcony + ironing + tray + disinfection + steam_cleaner + newServiceSum +" " + "руб.";
            let sum_int = (Number(sum.split(' ')[0])).toFixed(2);
            payment__price2.innerHTML = sum_int + " " + "руб.";
         }

      }


      document.querySelectorAll('#fridge').forEach((item) => {
         item.addEventListener('click', () => {
            //document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__fridge');
            if (document.querySelector('.active__fridge')) {
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let fridge_price = document.querySelector('#fridge').children['0'].innerHTML.trim();
               let sum_price = (Number(fridge_price.split(' ')[0]) + (Number(price.split(' ')[0])));

               document.querySelector('.check__list__add__service').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }

               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(fridge_price.split(' ')[0]) - (Number(fridge_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(fridge_price.split(' ')[0]) - (Number(fridge_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(fridge_price.split(' ')[0]) - (Number(fridge_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = sum_price.toFixed(2) + " " + "руб.";
               }
            }
            else if (!item.querySelector('.active__fridge')) {
               document.querySelector('.check__list__add__service').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let fridge_price = document.querySelector('#fridge').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }

               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(fridge_price.split(' ')[0]) - (Number(fridge_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(fridge_price.split(' ')[0]) - (Number(fridge_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(fridge_price.split(' ')[0]) - (Number(fridge_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = (Number(price.split(' ')[0])) - Number(fridge_price.split(' ')[0]).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }
            }

         });
      });

      document.querySelectorAll('#microwave').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__microwave');
            let ast = document.querySelectorAll('#microwave');
            if (document.querySelector('.active__microwave')) {
               document.querySelector('.check__list__add__microwave').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let microwave_price = document.querySelector('#microwave').children['0'].innerHTML.trim();
               let sum_price = (Number(microwave_price.split(' ')[0]) + (Number(price.split(' ')[0])));

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(microwave_price.split(' ')[0]) - (Number(microwave_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(microwave_price.split(' ')[0]) - (Number(microwave_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(microwave_price.split(' ')[0]) - (Number(microwave_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {

                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) + Number(microwave_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }

            }
            else if (!item.querySelector('.active__microwave')) {
               document.querySelector('.check__list__add__microwave').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let microwave_price = document.querySelector('#microwave').children['0'].innerHTML.trim();
               console.log((Number(price.split(' ')[0]) + Number(microwave_price.split(' ')[0])) - Number(microwave_price.split(' ')[0]));

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }

               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(microwave_price.split(' ')[0]) - (Number(microwave_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(microwave_price.split(' ')[0]) - (Number(microwave_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(microwave_price.split(' ')[0]) - (Number(microwave_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {

                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) - Number(microwave_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }

            }

         });
      });

      document.querySelectorAll('#oven').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__oven');
            let ast = document.querySelectorAll('#oven');
            if (document.querySelector('.active__oven')) {
               document.querySelector('.check__list__add__oven').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let oven_price = document.querySelector('#oven').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(oven_price.split(' ')[0]) - (Number(oven_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(oven_price.split(' ')[0]) - (Number(oven_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(oven_price.split(' ')[0]) - (Number(oven_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = (Number(price.split(' ')[0]) + Number(oven_price.split(' ')[0])).toFixed(2) + " " + "руб.";
               }
            }
            else if (!item.querySelector('.active__oven')) {
               document.querySelector('.check__list__add__oven').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let oven_price = document.querySelector('#oven').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }



               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(oven_price.split(' ')[0]) - (Number(oven_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(oven_price.split(' ')[0]) - (Number(oven_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(oven_price.split(' ')[0]) - (Number(oven_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = (Number(price.split(' ')[0]) - Number(oven_price.split(' ')[0])).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }

            }
         });
      });


      document.querySelectorAll('#hood').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__hood');
            let ast = document.querySelectorAll('#hood');
            if (document.querySelector('.active__hood')) {
               document.querySelector('.check__list__add__hood').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let hood_price = document.querySelector('#hood').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(hood_price.split(' ')[0]) - (Number(hood_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(hood_price.split(' ')[0]) - (Number(hood_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(hood_price.split(' ')[0]) - (Number(hood_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) + Number(hood_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }
            }
            else if (!item.querySelector('.active__hood')) {
               document.querySelector('.check__list__add__hood').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let hood_price = document.querySelector('#hood').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }


               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(hood_price.split(' ')[0]) - (Number(hood_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(hood_price.split(' ')[0]) - (Number(hood_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(hood_price.split(' ')[0]) - (Number(hood_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) - Number(hood_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }

            }
         });
      });


      document.querySelectorAll('#tableware').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__tableware');
            let ast = document.querySelectorAll('#tableware');
            if (document.querySelector('.active__tableware')) {
               document.querySelector('.check__list__add__tableware').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let tableware_price = document.querySelector('#tableware').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(tableware_price.split(' ')[0]) - (Number(tableware_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(tableware_price.split(' ')[0]) - (Number(tableware_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(tableware_price.split(' ')[0]) - (Number(tableware_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = (Number(price.split(' ')[0]) + Number(tableware_price.split(' ')[0])).toFixed(2) + " " + "руб.";
               }
            }
            else if (!item.querySelector('.active__tableware')) {
               document.querySelector('.check__list__add__tableware').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let tableware_price = document.querySelector('#tableware').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }


               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(tableware_price.split(' ')[0]) - (Number(tableware_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(tableware_price.split(' ')[0]) - (Number(tableware_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(tableware_price.split(' ')[0]) - (Number(tableware_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = (Number(price.split(' ')[0]) - Number(tableware_price.split(' ')[0])).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }

            }
         });
      });

      document.querySelectorAll('#kitchen__cabinets').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__kitchen__cabinets');
            let ast = document.querySelectorAll('#kitchen__cabinets');
            if (document.querySelector('.active__kitchen__cabinets')) {
               document.querySelector('.check__list__add__kitchen__cabinets').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let kitchen__cabinets_price = document.querySelector('#kitchen__cabinets').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(kitchen__cabinets_price.split(' ')[0]) - (Number(kitchen__cabinets_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(kitchen__cabinets_price.split(' ')[0]) - (Number(kitchen__cabinets_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(kitchen__cabinets_price.split(' ')[0]) - (Number(kitchen__cabinets_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) + Number(kitchen__cabinets_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }
            }
            else if (!item.querySelector('.active__kitchen__cabinets')) {
               document.querySelector('.check__list__add__kitchen__cabinets').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let kitchen__cabinets_price = document.querySelector('#kitchen__cabinets').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }



               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(kitchen__cabinets_price.split(' ')[0]) - (Number(kitchen__cabinets_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(kitchen__cabinets_price.split(' ')[0]) - (Number(kitchen__cabinets_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(kitchen__cabinets_price.split(' ')[0]) - (Number(kitchen__cabinets_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) - Number(kitchen__cabinets_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }

               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }

            }
         });
      });


      document.querySelectorAll('#balcony').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__balcony');
            let ast = document.querySelectorAll('#balcony');
            if (document.querySelector('.active__balcony')) {
               document.querySelector('.check__list__add__balcony').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let balcony_price = document.querySelector('#balcony').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(balcony_price.split(' ')[0]) - (Number(balcony_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(balcony_price.split(' ')[0]) - (Number(balcony_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(balcony_price.split(' ')[0]) - (Number(balcony_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) + Number(balcony_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }
            }
            else if (!item.querySelector('.active__balcony')) {
               document.querySelector('.check__list__add__balcony').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let balcony_price = document.querySelector('#balcony').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }

               
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(balcony_price.split(' ')[0]) - (Number(balcony_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(balcony_price.split(' ')[0]) - (Number(balcony_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(balcony_price.split(' ')[0]) - (Number(balcony_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) - Number(balcony_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }

            }
         });
      });

      document.querySelectorAll('#ironing').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__ironing');
            let ast = document.querySelectorAll('#ironing');
            if (document.querySelector('.active__ironing')) {
               document.querySelector('.check__list__add__ironing').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let ironing_price = document.querySelector('#ironing').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(ironing_price.split(' ')[0]) - (Number(ironing_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(ironing_price.split(' ')[0]) - (Number(ironing_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(ironing_price.split(' ')[0]) - (Number(ironing_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) + Number(ironing_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }
            }
            else if (!item.querySelector('.active__ironing')) {
               document.querySelector('.check__list__add__ironing').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let ironing_price = document.querySelector('#ironing').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }

               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(ironing_price.split(' ')[0]) - (Number(ironing_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(ironing_price.split(' ')[0]) - (Number(ironing_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(ironing_price.split(' ')[0]) - (Number(ironing_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) - Number(ironing_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }

            }
         });
      });

      document.querySelectorAll('#tray').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__tray');
            let ast = document.querySelectorAll('#tray');
            if (document.querySelector('.active__tray')) {
               document.querySelector('.check__list__add__tray').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let tray_price = document.querySelector('#tray').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(tray_price.split(' ')[0]) - (Number(tray_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(tray_price.split(' ')[0]) - (Number(tray_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(tray_price.split(' ')[0]) - (Number(tray_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) + Number(tray_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }
            }
            else if (!item.querySelector('.active__tray')) {
               document.querySelector('.check__list__add__tray').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let tray_price = document.querySelector('#tray').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }


               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(tray_price.split(' ')[0]) - (Number(tray_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(tray_price.split(' ')[0]) - (Number(tray_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(tray_price.split(' ')[0]) - (Number(tray_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) - Number(tray_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }

            }
         });
      });

      document.querySelectorAll('#disinfection').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__disinfection');
            let ast = document.querySelectorAll('#disinfection');
            if (document.querySelector('.active__disinfection')) {
               document.querySelector('.check__list__add__disinfection').innerHTML = item.children['2'].innerHTML + item.children['0'].innerHTML + "<br>";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let disinfection_price = document.querySelector('#disinfection').children['0'].innerHTML.trim();

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(disinfection_price.split(' ')[0]) - (Number(disinfection_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(disinfection_price.split(' ')[0]) - (Number(disinfection_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(disinfection_price.split(' ')[0]) - (Number(disinfection_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) + Number(disinfection_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }
            }
            else if (!item.querySelector('.active__disinfection')) {
               document.querySelector('.check__list__add__disinfection').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let disinfection_price = document.querySelector('#disinfection').children['0'].innerHTML.trim();
               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }


               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(disinfection_price.split(' ')[0]) - (Number(disinfection_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(disinfection_price.split(' ')[0]) - (Number(disinfection_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(disinfection_price.split(' ')[0]) - (Number(disinfection_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) - Number(disinfection_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }
            }
         });
      });
      document.querySelectorAll('#steam_cleaner').forEach((item) => {
         item.addEventListener('click', () => {

            ///document.querySelectorAll('.additionally__calculator__item').forEach((child) => child.classList.remove('test'));
            item.classList.toggle('active__steam_cleaner');
            let ast = document.querySelectorAll('#steam_cleaner');
            if (document.querySelector('.active__steam_cleaner')) {
               document.querySelector('.check__list__add__steam_cleaner').innerHTML = item.children['1'].children[0].innerText.split(' ')[1] + item.children['1'].children[2].innerHTML + "<br>";
               let steam_cleaner_price = document.querySelector('#steam_cleaner').children[1].children[2].innerText;
               let price = document.querySelector('.payment__price').innerHTML.trim();

               let discounter_str = document.querySelector('.check__lest__discount').innerText;
               let discounter_split = discounter_str.split(' ')[1];
               //let add__sum = (Number(price.split(' ')[0]) + Number(steam_cleaner_price.split(' ')[0]));

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }
               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(steam_cleaner_price.split(' ')[0]) - (Number(steam_cleaner_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(steam_cleaner_price.split(' ')[0]) - (Number(steam_cleaner_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) + (Number(steam_cleaner_price.split(' ')[0]) - (Number(steam_cleaner_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) + Number(steam_cleaner_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }

            }
            else if (!item.querySelector('.active__steam_cleaner')) {
               document.querySelector('.check__list__add__steam_cleaner').innerHTML = "";
               let price = document.querySelector('.payment__price').innerHTML.trim();
               let steam_cleaner_price = document.querySelector('#steam_cleaner').children[1].children[2].innerText.split(' ')[0];

               let discount_active = document.querySelector('.check__lest__discount').innerText.trim();
               let a_tst = document.querySelector('.check__lest__discount').innerText.trim();
               let b_tst = a_tst.split(' ')[1];
               let mynum;
               if (discount_active != "") {
                  mynum = Number(b_tst.split('%')[0]) * (-1);
               }
               else {
                  mynum = 0;
               }

               if (mynum == 20) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(steam_cleaner_price.split(' ')[0]) - (Number(steam_cleaner_price.split(' ')[0]) * 0.2))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 15) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(steam_cleaner_price.split(' ')[0]) - (Number(steam_cleaner_price.split(' ')[0]) * 0.15))).toFixed(2) + " " + "руб.";
               }
               else if (mynum == 10) {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0])) - (Number(steam_cleaner_price.split(' ')[0]) - (Number(steam_cleaner_price.split(' ')[0]) * 0.1))).toFixed(2) + " " + "руб.";
               } else {
                  document.querySelector('.payment__price').innerHTML = ((Number(price.split(' ')[0]) - Number(steam_cleaner_price.split(' ')[0]))).toFixed(2) + " " + "руб.";
               }


               if (Number(document.querySelector('.payment__price').innerText.split(' ')[0]) < 0) {
                  document.querySelector('.payment__price').innerHTML = 0 + " " + "руб.";
               }
            }
         });
      });
  


      const selectSingle2 = document.querySelector('.__select__type__cleaning');
      const selectSingle_title2 = selectSingle2.querySelector('.__select__title__type__cleaning');
      const selectSingle_labels2 = selectSingle2.querySelectorAll('.__select__label__type__cleaning');


      const selectSingle = document.querySelector('.__select');
      const selectSingle_title = selectSingle.querySelector('.__select__title');
      const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

      
      selectSingle_title.addEventListener('click', () => {
         if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
         } else {
            selectSingle.setAttribute('data-state', 'active');
         }
      });

      
      for (let i = 0; i < selectSingle_labels.length; i++) {
         selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
            if (document.querySelector('.__select__title').innerHTML == "Уборка квартир") {

               document.querySelector('.check__list__service').innerHTML = "Уборка квартир";

            }
            else if (document.querySelector('.__select__title').innerHTML == "Уборка коттеджей") {
               console.log(document.querySelector('.__select__title').innerHTML);
               document.querySelector('.check__list__service').innerHTML = "Уборка коттеджей";
            }
         });
      }

      let fridge__reset__toggle = document.querySelector('#fridge');
      let microwave__reset__toggle = document.querySelector('#microwave');
      let oven__reset__toggle = document.querySelector('#oven');
      let hood__reset__toggle = document.querySelector('#hood');
      let tableware__reset__toggle = document.querySelector('#tableware');
      let kitchen__cabinets__reset__toggle = document.querySelector('#kitchen__cabinets');
      let window__reset__toggle = document.querySelector('#window');
      let balcony__reset__toggle = document.querySelector('#balcony');
      let ironing__reset__toggle = document.querySelector('#ironing');
      let tray__reset__toggle = document.querySelector('#tray');
      let disinfection__reset__toggle = document.querySelector('#disinfection');
      let steam_cleaner__reset__toggle = document.querySelector('#steam_cleaner');

       
      selectSingle_title2.addEventListener('click', () => {
         if ('active' === selectSingle2.getAttribute('data-state')) {
            selectSingle2.setAttribute('data-state', '');
         } else {
            selectSingle2.setAttribute('data-state', 'active');
         }
      });

       
      for (let i = 0; i < selectSingle_labels2.length; i++) {
         selectSingle_labels2[i].addEventListener('click', (evt) => {
            selectSingle_title2.textContent = evt.target.textContent;
            selectSingle2.setAttribute('data-state', '');

            //selectSingle_title.innerText == "Уборка квартир" && 

            if (document.querySelector('.__select__title__type__cleaning').innerText == "Генеральная уборка") {

               document.querySelector('.range__wrapper').style.display = "flex";
               document.querySelector('.range__wrapper__col__room').style.display = "none";
               document.querySelector('.range__wrapper__renovation').style.display = "none";
               document.querySelector('.payment__price').innerHTML = "112 руб.";
               document.querySelector('.check__list__type__service').innerHTML = "Генеральная уборка";
               document.querySelector('.check__list__add__service').innerHTML = "";

               document.querySelector('.check__list__add__service').innerText = "";
               document.querySelector('.check__list__add__microwave').innerText = "";
               document.querySelector('.check__list__add__oven').innerText = "";
               document.querySelector('.check__list__add__hood').innerText = "";
               document.querySelector('.check__list__add__tableware').innerText = "";
               document.querySelector('.check__list__add__kitchen__cabinets').innerText = "";
               document.querySelector('.check__list__add__window').innerText = "";
               document.querySelector('.check__list__add__balcony').innerText = "";
               document.querySelector('.check__list__add__ironing').innerText = "";
               document.querySelector('.check__list__add__tray').innerText = "";
               document.querySelector('.check__list__add__disinfection').innerText = "";
               document.querySelector('.check__list__add__steam_cleaner').innerText = "";
               document.querySelector('.check__lest__discount').innerText = "";

               if (document.querySelector('.active__discount__item')) {
                  document.querySelector('.active__discount__item').classList.toggle('active__discount__item');
               }


               if (document.querySelector('.active__fridge')) {
                  fridge__reset__toggle.classList.toggle('active__fridge');
               }
               if (document.querySelector('.active__microwave')) {
                  microwave__reset__toggle.classList.toggle('active__microwave');
               }
               if (document.querySelector('.active__oven')) {
                  oven__reset__toggle.classList.toggle('active__oven');
               }
               if (document.querySelector('.active__hood')) {
                  hood__reset__toggle.classList.toggle('active__hood');
               }
               if (document.querySelector('.active__tableware')) {
                  tableware__reset__toggle.classList.toggle('active__tableware');
               }
               if (document.querySelector('.active__kitchen__cabinets')) {
                  kitchen__cabinets__reset__toggle.classList.toggle('active__kitchen__cabinets');
               }
               if (document.querySelector('.active__window')) {
                  window__reset__toggle.classList.toggle('active__window');
               }
               if (document.querySelector('.active__balcony')) {
                  balcony__reset__toggle.classList.toggle('active__balcony');
               }
               if (document.querySelector('.active__ironing')) {
                  ironing__reset__toggle.classList.toggle('active__ironing');
               }
               if (document.querySelector('.active__tray')) {
                  tray__reset__toggle.classList.toggle('active__tray');
               }
               if (document.querySelector('.active__disinfection')) {
                  disinfection__reset__toggle.classList.toggle('active__disinfection');
               }
               if (document.querySelector('.active__steam_cleaner')) {
                  steam_cleaner__reset__toggle.classList.toggle('active__steam_cleaner');
               }
               let cleanItem = document.querySelectorAll('.modal-item__focus');
               let cleanActive = document.querySelectorAll('.modal-item__active');
               for(let item = 0; item < cleanItem.length; item++) {
                  cleanItem[item].classList.toggle('modal-item__focus');
                  document.querySelector('.check__list__add__divan').innerHTML ="";
                  document.querySelector('.check__list__add__uglovoi-divan').innerHTML ="";
                  document.querySelector('.check__list__add__detskiy-divan').innerHTML ="";
                  document.querySelector('.check__list__add__kreslo').innerHTML ="";
                  document.querySelector('.check__list__add__stul').innerHTML ="";
                  document.querySelector('.check__list__add__matrac').innerHTML ="";
                  document.querySelector('.check__list__add__kover').innerHTML ="";
                  document.querySelector('.check__list__add__kovrolin').innerHTML ="";
                  document.querySelector('.check__list__add__window').innerHTML ="";
                  document.querySelector('.check__list__add__panoramic_window').innerHTML ="";
                  document.querySelector('.check__list__add__balcony_window').innerHTML ="";
                  document.querySelector('.check__list__add__roof_windows' ).innerHTML ="" ;             
               }

               for (let active = 0; active < cleanActive.length; active++) {
                  cleanActive[active].classList.toggle('modal-item__active');
               }
            }
            else if (document.querySelector('.__select__title__type__cleaning').innerText == "Поддерживающая уборка") {
               document.querySelector('.range__wrapper__col__room').style.display = "flex";
               document.querySelector('.range__wrapper').style.display = "none";
               document.querySelector('.range__wrapper__renovation').style.display = "none";
               document.querySelector('.payment__price').innerHTML = "48 руб.";
               document.querySelector('.check__list__type__service').innerHTML = "Поддерживающая уборка";

               document.querySelector('.check__list__add__service').innerText = "";
               document.querySelector('.check__list__add__microwave').innerText = "";
               document.querySelector('.check__list__add__oven').innerText = "";
               document.querySelector('.check__list__add__hood').innerText = "";
               document.querySelector('.check__list__add__tableware').innerText = "";
               document.querySelector('.check__list__add__kitchen__cabinets').innerText = "";
               document.querySelector('.check__list__add__window').innerText = "";
               document.querySelector('.check__list__add__balcony').innerText = "";
               document.querySelector('.check__list__add__ironing').innerText = "";
               document.querySelector('.check__list__add__tray').innerText = "";
               document.querySelector('.check__list__add__disinfection').innerText = "";
               document.querySelector('.check__list__add__steam_cleaner').innerText = "";

               document.querySelector('.check__lest__discount').innerText = "";

               if (document.querySelector('.active__discount__item')) {
                  document.querySelector('.active__discount__item').classList.toggle('active__discount__item');
               }

               if (document.querySelector('.active__fridge')) {
                  fridge__reset__toggle.classList.toggle('active__fridge');
               }
               if (document.querySelector('.active__microwave')) {
                  microwave__reset__toggle.classList.toggle('active__microwave');
               }
               if (document.querySelector('.active__oven')) {
                  oven__reset__toggle.classList.toggle('active__oven');
               }
               if (document.querySelector('.active__hood')) {
                  hood__reset__toggle.classList.toggle('active__hood');
               }
               if (document.querySelector('.active__tableware')) {
                  tableware__reset__toggle.classList.toggle('active__tableware');
               }
               if (document.querySelector('.active__kitchen__cabinets')) {
                  kitchen__cabinets__reset__toggle.classList.toggle('active__kitchen__cabinets');
               }
               if (document.querySelector('.active__window')) {
                  window__reset__toggle.classList.toggle('active__window');
               }
               if (document.querySelector('.active__balcony')) {
                  balcony__reset__toggle.classList.toggle('active__balcony');
               }
               if (document.querySelector('.active__ironing')) {
                  ironing__reset__toggle.classList.toggle('active__ironing');
               }
               if (document.querySelector('.active__tray')) {
                  tray__reset__toggle.classList.toggle('active__tray');
               }
               if (document.querySelector('.active__disinfection')) {
                  disinfection__reset__toggle.classList.toggle('active__disinfection');
               }
               if (document.querySelector('.active__steam_cleaner')) {
                  steam_cleaner__reset__toggle.classList.toggle('active__steam_cleaner');
               }
               let cleanItem = document.querySelectorAll('.modal-item__focus');
               let cleanActive = document.querySelectorAll('.modal-item__active');
               for(let item = 0; item < cleanItem.length; item++) {
                  cleanItem[item].classList.toggle('modal-item__focus');
                  document.querySelector('.check__list__add__divan').innerHTML ="";
                  document.querySelector('.check__list__add__uglovoi-divan').innerHTML ="";
                  document.querySelector('.check__list__add__detskiy-divan').innerHTML ="";
                  document.querySelector('.check__list__add__kreslo').innerHTML ="";
                  document.querySelector('.check__list__add__stul').innerHTML ="";
                  document.querySelector('.check__list__add__matrac').innerHTML ="";
                  document.querySelector('.check__list__add__kover').innerHTML ="";
                  document.querySelector('.check__list__add__kovrolin').innerHTML ="";
                  document.querySelector('.check__list__add__window').innerHTML ="";
                  document.querySelector('.check__list__add__panoramic_window').innerHTML ="";
                  document.querySelector('.check__list__add__balcony_window').innerHTML ="";
                  document.querySelector('.check__list__add__roof_windows' ).innerHTML ="" ;             
               }

               for (let active = 0; active < cleanActive.length; active++) {
                  cleanActive[active].classList.toggle('modal-item__active');
               }

            }
            else if (document.querySelector('.__select__title__type__cleaning').innerText == "Уборка после ремонта") {
               document.querySelector('.range__wrapper__renovation').style.display = "flex";
               document.querySelector('.range__wrapper').style.display = "none";
               document.querySelector('.range__wrapper__col__room').style.display = "none";

               document.querySelector('.check__list__add__service').innerText = "";
               document.querySelector('.check__list__add__microwave').innerText = "";
               document.querySelector('.check__list__add__oven').innerText = "";
               document.querySelector('.check__list__add__hood').innerText = "";
               document.querySelector('.check__list__add__tableware').innerText = "";
               document.querySelector('.check__list__add__kitchen__cabinets').innerText = "";
               document.querySelector('.check__list__add__window').innerText = "";
               document.querySelector('.check__list__add__balcony').innerText = "";
               document.querySelector('.check__list__add__ironing').innerText = "";
               document.querySelector('.check__list__add__tray').innerText = "";
               document.querySelector('.check__list__add__disinfection').innerText = "";
               document.querySelector('.check__list__add__steam_cleaner').innerText = "";

               document.querySelector('.payment__price').innerHTML = "122.5 руб.";
               document.querySelector('.check__lest__discount').innerText = "";

               if (document.querySelector('.active__discount__item')) {
                  document.querySelector('.active__discount__item').classList.toggle('active__discount__item');
               }

               if (document.querySelector('.active__fridge')) {
                  fridge__reset__toggle.classList.toggle('active__fridge');
               }
               if (document.querySelector('.active__microwave')) {
                  microwave__reset__toggle.classList.toggle('active__microwave');
               }
               if (document.querySelector('.active__oven')) {
                  oven__reset__toggle.classList.toggle('active__oven');
               }
               if (document.querySelector('.active__hood')) {
                  hood__reset__toggle.classList.toggle('active__hood');
               }
               if (document.querySelector('.active__tableware')) {
                  tableware__reset__toggle.classList.toggle('active__tableware');
               }
               if (document.querySelector('.active__kitchen__cabinets')) {
                  kitchen__cabinets__reset__toggle.classList.toggle('active__kitchen__cabinets');
               }
               if (document.querySelector('.active__window')) {
                  window__reset__toggle.classList.toggle('active__window');
               }
               if (document.querySelector('.active__balcony')) {
                  balcony__reset__toggle.classList.toggle('active__balcony');
               }
               if (document.querySelector('.active__ironing')) {
                  ironing__reset__toggle.classList.toggle('active__ironing');
               }
               if (document.querySelector('.active__tray')) {
                  tray__reset__toggle.classList.toggle('active__tray');
               }
               if (document.querySelector('.active__disinfection')) {
                  disinfection__reset__toggle.classList.toggle('active__disinfection');
               }
               if (document.querySelector('.active__steam_cleaner')) {
                  steam_cleaner__reset__toggle.classList.toggle('active__steam_cleaner');
               }

               let cleanItem = document.querySelectorAll('.modal-item__focus');
               let cleanActive = document.querySelectorAll('.modal-item__active');
               for(let item = 0; item < cleanItem.length; item++) {
                  cleanItem[item].classList.toggle('modal-item__focus');
                  document.querySelector('.check__list__add__divan').innerHTML ="";
                  document.querySelector('.check__list__add__uglovoi-divan').innerHTML ="";
                  document.querySelector('.check__list__add__detskiy-divan').innerHTML ="";
                  document.querySelector('.check__list__add__kreslo').innerHTML ="";
                  document.querySelector('.check__list__add__stul').innerHTML ="";
                  document.querySelector('.check__list__add__matrac').innerHTML ="";
                  document.querySelector('.check__list__add__kover').innerHTML ="";
                  document.querySelector('.check__list__add__kovrolin').innerHTML ="";
                  document.querySelector('.check__list__add__window').innerHTML ="";
                  document.querySelector('.check__list__add__panoramic_window').innerHTML ="";
                  document.querySelector('.check__list__add__balcony_window').innerHTML ="";
                  document.querySelector('.check__list__add__roof_windows' ).innerHTML ="" ;             
               }

               for (let active = 0; active < cleanActive.length; active++) {
                  cleanActive[active].classList.toggle('modal-item__active');
               }

               document.querySelector('.check__list__type__service').innerHTML = "Уборка после ремонта";
            }
         });
      }



      document.querySelectorAll('.not__active').forEach((item) => {
         item.addEventListener('click', () => {
            document.querySelectorAll('.not__active').forEach((child) => child.classList.remove('active__time'));
            item.classList.toggle('active__time');
            if (document.querySelector('.active__time')) {
               document.querySelector('.__time__text').innerHTML = document.querySelector('.active__time').innerHTML;
            }

         });
      });

      const CONSTANTS = {
         DOM_SELECTORS: {
            datePicker: "",
            datePickerPrevMonth: ".date_picker_prev_month",
            datePickerNextMonth: ".date_picker_next_month",
            datePickerMonthDays: ".date_picker_month_days",
            datePickerMonthDay: ".date_picker_month_day",
            datePickerYear: ".date_picker_year",
            datePickerMonthName: ".date_picker_month_name",
            datePickerDay: ".day"
         },
         DOM_STRINGS: {
            dataTime: "li[data-time]"
         },
         DUMMY_LI_FOR_EMPTY_DAYS: '<li class="day"></li>',
         DAY_MAP: {
            0: "Вс",
            1: "Пн",
            2: "Вт",
            3: "Ср",
            4: "Чт",
            5: "Пт",
            6: "Сб"
         },
         MONTH_MAP: {
            0: "Январь",
            1: "Февраль",
            2: "Март",
            3: "Апрель",
            4: "Май",
            5: "Июнь",
            6: "Июль",
            7: "Август",
            8: "Сентябрь",
            9: "Октябрь",
            10: "Ноябрь",
            11: "Декабрь"
         }
      };

      const utils = (function () {
         function prefixDOMSelectorsWithPickerSelector(pickerSelector) {
            let DOM_SELECTORS = {};
            for (let selector in CONSTANTS.DOM_SELECTORS) {
               DOM_SELECTORS[
                  selector
               ] = `${pickerSelector} ${CONSTANTS.DOM_SELECTORS[selector]}`.trim();
            }
            CONSTANTS.DOM_SELECTORS = DOM_SELECTORS;
         }

         function getDOMElements(DOMSelectors) {
            let DOMElements = {};
            for (let selector in DOMSelectors) {
               if (DOMSelectors.hasOwnProperty(selector)) {
                  DOMElements[selector] = document.querySelector(DOMSelectors[selector]);
               }
            }
            return DOMElements;
         }

         function getDatePickerWeekDaysNameMarkUp() {
            return `
           <li>Вс</li>
           <li>Пн</li>
           <li>Вт</li>
           <li>Ср</li>
           <li>Чт</li>
           <li>Пт</li>
           <li>Сб</li>`;
         }

         function getDayMarkup(day = 1, isActive = false, time = null) {
            if (!time) {
               console.trace(`The time provided for getDayMarkup ${time} is invalid`);
            }
            return `
           <li class="day" data-time="${time}">
               <button class="${isActive ? "active" : ""}">${day}</button>
           </li>`;

         }

         function getAllDays() {
            let days = document.querySelectorAll(CONSTANTS.DOM_SELECTORS.datePickerDay);
            return [...(days ?? [])];

         }

         function getDaySuffix(day) {
            switch (day) {
               case 1:
               case 21:
               case 31:
                  return "";
               case 2:
               case 22:
                  return "";
               case 3:
               case 23:
                  return "";
               default:
                  return "";
            }
         }

         return {
            prefixDOMSelectorsWithPickerSelector,
            getDOMElements,
            getDatePickerWeekDaysNameMarkUp,
            getDayMarkup,
            getAllDays,
            getDaySuffix
         };
      })();

      const model = (function () {
         const data = {
            currentDate: new Date(),
            selectedDate: new Date()
         };

         function setCurrentDate(newDate) {
            data.currentDate = newDate;
         }

         function setSelectedDate(newDate) {
            data.selectedDate = newDate;
         }

         function getCurrentDate() {
            return data.currentDate;
         }

         function getSelectedDate() {
            return data.selectedDate;
         }

         return { setCurrentDate, setSelectedDate, getCurrentDate, getSelectedDate };
      })();

      const view = (function (model, utils) {
         function removeDays() {
            const allDays = utils.getAllDays();
            allDays.forEach((day) => day.remove());
         }

         function fillEmptyDays(count) {
            const DOMElements = utils.getDOMElements(CONSTANTS.DOM_SELECTORS);
            for (let i = 0; i < count; i++) {
               DOMElements.datePickerMonthDays.insertAdjacentHTML(
                  "beforeend",
                  CONSTANTS.DUMMY_LI_FOR_EMPTY_DAYS
               );
            }
         }

         function fillDay(day, isActive = false, time) {
            const dayMarkUp = utils.getDayMarkup(day, isActive, time);
            const DOMElements = utils.getDOMElements(CONSTANTS.DOM_SELECTORS);
            DOMElements.datePickerMonthDays.insertAdjacentHTML("beforeend", dayMarkUp);
         }

         function fillCurrentMonth(string) {
            const DOMElements = utils.getDOMElements(CONSTANTS.DOM_SELECTORS);
            DOMElements.datePickerMonthName.textContent = string;
         }

         function fillSelectedDate(month, date, day, year) {
            const DOMElements = utils.getDOMElements(CONSTANTS.DOM_SELECTORS);
            DOMElements.datePickerMonthDay.innerHTML = `${CONSTANTS.MONTH_MAP[month]
               } ${date}<sup>${utils.getDaySuffix(date)}</sup>, ${CONSTANTS.DAY_MAP[day]}`;
            DOMElements.datePickerYear.textContent = year;
            console.log(DOMElements.datePickerMonthDay.innerHTML);
            document.querySelector('.__data').innerHTML = DOMElements.datePickerMonthDay.innerHTML + " - " + document.querySelector('.date_picker_year').innerHTML + "г.";
         }

         return {
            removeDays,
            fillEmptyDays,
            fillDay,
            fillCurrentMonth,
            fillSelectedDate
         };
      })(model, utils);

      const controller = (function (model, view, utils) {
         let DOMElements = null;
         function init(pickerSelector = "", selectedDate = new Date()) {
            utils.prefixDOMSelectorsWithPickerSelector(pickerSelector);
            DOMElements = utils.getDOMElements(CONSTANTS.DOM_SELECTORS);
            if (!DOMElements.datePicker) {
               throw new Error(
                  `Date Picker with selector ${pickerSelector} not found in the document`
               );
            }
            DOMElements.datePickerNextMonth.addEventListener(
               "click",
               handleNextMonthClick
            );
            DOMElements.datePickerPrevMonth.addEventListener(
               "click",
               handlePrevMonthClick
            );
            DOMElements.datePickerMonthDays.addEventListener("click", handleSelectDate);
            if (selectedDate.constructor !== Date) {
               throw new Error(`The initial date ${selectedDate} is not a Date Object`);
               console.log($(this));
            }
            let clonedSelectedDate = new Date(selectedDate.getTime());
            let clonedCurrentDate = new Date(selectedDate.getTime());
            model.setSelectedDate(clonedSelectedDate);
            model.setCurrentDate(clonedCurrentDate);
            render(selectedDate);
         }

         function handleSelectDate(event) {
            const time = event.target.closest(CONSTANTS.DOM_STRINGS.dataTime)?.dataset
               .time;
            if (!time) return;
            model.setSelectedDate(new Date(Number(time)));
            model.setCurrentDate(new Date(Number(time)));
            render();
         }

         function handleNextMonthClick() {
            render();
         }

         function handlePrevMonthClick() {
            let currentDate = new Date(model.getCurrentDate().getTime());
            currentDate.setMonth(currentDate.getMonth() - 2);
            model.setCurrentDate(currentDate);
            render();
         }

         function render(selectedDate = null) {
            updateSelectedDateMarkUp();
            view.removeDays();
            let currentDate = new Date(
               selectedDate?.getTime() ?? model.getCurrentDate().getTime()
            );
            let selected = model.getSelectedDate();
            let selectedDay = selected.getDate();
            let selectedMonth = selected.getMonth();
            let selectedYear = selected.getFullYear();
            currentDate.setDate(1);
            let renderingMonth = currentDate.getMonth();
            view.fillEmptyDays(currentDate.getDay());
            view.fillCurrentMonth(
               `${CONSTANTS.MONTH_MAP[renderingMonth]} - ${currentDate.getFullYear()}`
            );
            while (currentDate.getMonth() === renderingMonth) {
               let currentMonth = currentDate.getMonth();
               let currentDay = currentDate.getDate();
               let currentYear = currentDate.getFullYear();
               let currentStringDate = `${currentDay}/${currentMonth + 1
                  }/${currentYear}`;
               let selectedStringDate = `${selectedDay}/${selectedMonth + 1
                  }/${selectedYear}`;
               view.fillDay(
                  currentDate.getDate(),
                  selectedStringDate === currentStringDate,
                  currentDate.getTime()
               );
               currentDate.setDate(currentDay + 1);
            }
            model.setCurrentDate(currentDate);
         }

         function updateSelectedDateMarkUp() {
            const currentDate = new Date(model.getSelectedDate().getTime());
            view.fillSelectedDate(
               currentDate.getMonth(),
               currentDate.getDate(),
               currentDate.getDay(),
               currentDate.getFullYear()
            );
         }

         return { init };
      })(model, view, utils);

      controller.init("#date_picker_1");

  

 