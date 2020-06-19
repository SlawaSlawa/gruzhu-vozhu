<?php
// Загрузка данных в строковую переменную
$bufer = file_get_contents("reviews-db.json");

// Преобразование строки в объект
$data = json_decode($bufer);

// Определение ошибок при преобразовании
$jsonerror = "Неизвестная ошибка";
switch (json_last_error()) {
    case JSON_ERROR_NONE:
        // Ошибок нет
        $jsonerror = '';
        break;
        case JSON_ERROR_DEPTH:
            $jsonerror = 'Достигнута максимальная глубина стека';
            break;
        case JSON_ERROR_STATE_MISMATCH:
                $jsonerror = 'Некорректные разряды или не совпадения режимов';
                break;
        case JSON_ERROR_CTRL_CHAR:
                $jsonerror = 'Некорректный управляющий символ';
                break;
        case JSON_ERROR_SYNTAX:
                $jsonerror = 'Синтаксическая ошибка, некорректный JSON';
                break;
        case JSON_ERROR_UTF8:
                $jsonerror = 'Некорректные символы UTF-8, возможно неверная кодировка';
                break;
                    
    
    
    default:
        $jsonerror = 'Неизвестная ошибка';
        break;
}


if($json_last_error != '') {
    // ошибка есть
    echo $jsonerror;
}else{
    $json = json_encode($data);

    $fd = fopen("reviews-db.json", 'w') or die("не удалось создать файл");
    $str = $json."Привет мир";
    fwrite($fd, $str);
    fclose($fd);
}