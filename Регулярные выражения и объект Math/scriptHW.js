while(true) {
    var HW =+prompt('  1 - Задание N1 (функция – калькулятор)\n  2 - Задание N2 (функция, которая принимает строку и разделитель)' + 
        ' \n  3 - Задание N3 (регулярное выражение для ввода госномера автомобиля)')
    switch(HW){

    case 1:

        
        // 1. Написать функцию – калькулятор. Функция принимает строку с примером, определяет,
        //  какое действие необходимо выполнить (+ - * /), переводит опе-ранды в числа,
        //   решает пример и возвращает результат.

        let str_1 = prompt("Введите строку с примером в формате '1+(- ; *; /)2'","");
        let temp_3=/[0-9]{1,10}/;
        let temp_4=/[\+\-\*\/]/;
        let i_1 = str_1.match(/[\+\-\*\/]/);
        let i_num = str_1.split(i_1);
        if(temp_3.test(i_num[0]) && temp_3.test(i_num[1]) && temp_4.test(i_1[0])){
            function calc(num_1, i_1, num_2) 
            {
                let rez=0;
                if (i_1[0]== '+') 
                        rez= Number(i_num[0]) + Number(i_num[1]);
                else if (i_1[0]=='-') 
                    rez= Number(i_num[0]) - Number(i_num[1]);
                else if (i_1[0]=='*') 
                    rez= Number(i_num[0]) * Number(i_num[1]);
                else
                    rez= Number(i_num[0]) / Number(i_num[1]);
                
                document.write(rez);
            }
            calc(i_num[0], i_1[0], i_num[0])}
        else
            document.write("Не верный формат выражения");
        
    break;

    case 2:
        
        // 2. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок,
        //  разбитых с помощью указанного разделителя. Например: строка “10/08/2020”, разделитель “/”,
        //   результат: “10”, “08”, “2020”.

        let str_2 =prompt("Введите дату в формате дд.мм.гггг","");
        let rez_split = str_2.split(".");
        let temp=/\d{2}\.\d{2}\.\d{4}/;
        if(temp.test(str_2))
        document.write("\"" + rez_split[0] + "\", " + "\"" + rez_split[1] + "\", " + "\"" + rez_split[2] + "\"");
        else
        document.write("Не верный формат");

    break;

    case 3:
        
        // 3. Создать регулярное выражение для ввода госномера автомобиля
        let str_3 =prompt("Введите госномер автомобиля в формате A000AA 000","");

        let temp_1=/[а-я]{1}[0-9]{3}[а-я]{2}\ [0-9]{3}/i;
        if(temp_1.test(str_3))
        document.write(str_3);
        else
        document.write("Не верный формат");
        
    break;    
    default:
    break;
    }
break; 
}