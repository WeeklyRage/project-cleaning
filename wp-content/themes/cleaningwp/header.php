<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cleaningwp
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>
<?php                                                                              
	function isMobile() {           
	    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
	}  
	$not_mobile = !(isMobile());	
?>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

	<header <?php if (is_front_page()) {} else {?> style="position: relative; margin-bottom: 50px;" <?php }?>>
    <div class="header">
        <div class="logo-header">
            <a href="/" <?php if (is_front_page() && $not_mobile ) {?> style="display: none;" <?}?>>
                <picture><source srcset="/wp-content/themes/cleaningwp/template/img/logo_header.webp" type="image/webp"><img src="/wp-content/themes/cleaningwp/template/img/logo_header.png" alt=""></picture>
            </a>
        </div>
        <nav class="menu menu-header">
            <div class="menu__burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="menu__body">
                <ul class="menu__items">
                    <li class="menu__items-item _mobil">
                        <a href="/" class="menu__link" target="_blank">Главная</a>
                    </li>
                    <li class="menu__items-item catalog-header">
                        <div class="menu__link <?if($_SERVER['REDIRECT_URL']=='/catalog/'){?>_active <?}?>" target="_blank"><a href="http://cleaning/catalog/">Каталог услуг</a> </div>
                        <input type="checkbox" name="" id="checkbox_catalog-header">
                        <label for="checkbox_catalog-header" class="label_catalog-header"></label>
                        <ul class="catalog-header__items">

                            <li class="catalog-header__items-item _active"><a href="http://cleaning/supporting-cleaning/ ‎"
                                    class="catalog-header-link">Поддерживающая уборка</a></li>
                            <li class="catalog-header__items-item"><a href="http://cleaning/general_cleaning/"
                                    class="catalog-header-link">Генеральная уборка</a>
                            </li>
                            <li class="catalog-header__items-item"><a href=" http://cleaning/cleaning-after-renovation/ ‎"
                                    class="catalog-header-link">Уборка
                                    после ремонта</a>
                            </li>
                            <li class="catalog-header__items-item"><a href="http://cleaning/washing-windows/"
                                    class="catalog-header-link">Мойка окон</a>
                            </li>
                            <li class="catalog-header__items-item"><a href="http://cleaning/additionaly/"
                                    class="catalog-header-link">Дезинфекция</a>
                            </li>
                            <li class="catalog-header__items-item"><a href=" http://cleaning/cleaning-furniture/"
                                    class="catalog-header-link">Чистка мягкой
                                    мебели</a>
                            </li>
                            <li class="catalog-header__items-item"><a href="http://cleaning/cleaning-carpets/ ‎"
                                    class="catalog-header-link">Химчистка
                                    ковров</a>
                            </li>
                            <li class="catalog-header__items-item"><a href="http://cleaning/additionaly/"
                                    class="catalog-header-link">Дополнительно</a>
                            </li>


                        </ul>

                    </li>
                    <li class="menu__items-item">
                        <a href=" http://cleaning/reviews/" class="menu__link <?if($_SERVER['REDIRECT_URL']=='/reviews/'){?>_active <?}?>" target="_blank">Отзывы</a>
                    </li>
                    <li class="menu__items-item">
                        <a href="http://cleaning/contacts/" class="menu__link <?if($_SERVER['REDIRECT_URL']=='/contacts/'){?>_active <?}?>" target="_blank">Контакты</a>
                    </li>
                    <li class="menu__items-item">
                        <a href=" http://cleaning/contacts/calculator/" class="menu__link <?if($_SERVER['REDIRECT_URL']=='/calculator/'){?>_active <?}?>" target="_blank">Калькулятор</a>
                    </li>
                    <li class="controls-header">
                        <ul class="controls-header__items">
                            <li class="controls-header__items-item phone-header">
                                <a href="tel:375290000000" class="phone-header__tel">+375 29 000 00 00</a>
                            </li>
                            <li class="controls-header__items-item dropdown-header">
                                <div class="dropdown-header__city">Минск </div>
                                <ul class="city__items">
                                    <li class="city__items-item _active"><a href="" class="city-link">Минск</a></li>
                                    <li class="city__items-item"><a href="" class="city-link">Минск 2</a></li>
                                    <li class="city__items-item"><a href="" class="city-link">Минск 3</a></li>
                                </ul>
                            <li class="controls-header__items-item user-header">
                                <a href="" class="user__personal"></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
