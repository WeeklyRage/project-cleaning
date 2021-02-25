<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'cleaning' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%HIm1q/jL#VVFyaEf9+8yjT.gg6lCS.8%(xi3Bu;l^Y)!y31R8]Q;dIF5[~)h]<C' );
define( 'SECURE_AUTH_KEY',  '8cXA1?=>RjdW;ao Xd=,9txHyn{Wgd{-93|Icd~,a#UcIHxfH~AS.cw&-N7_rJS{' );
define( 'LOGGED_IN_KEY',    'mY%F3)GCs3eHD5N+J226YU1N(B,s+<sglKyY3H=T7I#]/Madht.CH?on*^^rg251' );
define( 'NONCE_KEY',        '#&W{>w>*u(G.%t<dycFlr&2<Q^LRef*r%/_ k[?SLZn|Keda&9F#S(AI>2i$@&(d' );
define( 'AUTH_SALT',        's58*~plVk`=)x.{b^i)~jPW7e=n5ZI P0m&ZRI0yNy6~OzFbfAr,P]Vn~LVR.R}>' );
define( 'SECURE_AUTH_SALT', '6:J-0N*o3:]eg31i7*UNs`sHq=15Kua-<%qG3K:W1tX3q=1-Kr(Xf|EZ2qq{]|{j' );
define( 'LOGGED_IN_SALT',   'w#Z7i>_rZ8=bRdD_jr4K8:DO~M, 1wypX*Gt[uVig.#*gmq(le}D1Tp*9u|=q} c' );
define( 'NONCE_SALT',       ' 6-<1n!{1%CG7BuV$l-A?rV1b+gtiP)N]w<X`{d#0=V_zyu^HqvQgIxWc57^7d0^' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
