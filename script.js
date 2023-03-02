"use strict";

let a;
let b;
let day;

//task 1

let age = prompt('Сколько вам лет ?');
let nam = prompt('Как вас зовут ?');

{
  let city = prompt('Город проживания ?');
  let phone = prompt('Ваш номер телефона ?');
  let email = prompt('Ваша элеектронная почта ?');
  let company = prompt('Ваша компания ?');
  alert(`Меня зовут ${nam}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}\n${email}`);
}

//task 2

{
  let year = 2023 - age;
  alert(`Имя - ${nam}; Родился в - ${year} году`)
}

//task 3

{
  let str = "323323";
  let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2])
  let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5])
  if(sum1 === sum2){
    console.log('да')
  } else {
    console.log('нет')
  }
}

//task 4

{
  a = 1;
  if (a > 0) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}

//task 5

{
  a = 10;
  b = 2;
  console.log(a+b);
  console.log(a-b);
  console.log(a*b);
  console.log(a/b);
  if(a + b > 1) {
    console.log((a+b)**2)
  }
}

//task 6

{
  a = 10;
  b = 2;
  if(a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log ("Верно")
  } else {
    console.log("Неверно")
  }
}

//task7

{
  let n = 60;
  if (n >= 0 && n <= 15){
    console.log("первая четверть часа")
  }
  else if(n > 15 && n <= 30) {
    console.log("вторая четверть часа")
  }
  else if (n > 30 && n <= 45){
    console.log("третья четверть часа")
  }
  else if (n > 45 && n <= 59) {
    console.log("четвертая четверть часа")
  }
}

//task 8

{
  day = (Math.floor(Math.random()*31 + 1));
  console.log(day + ' день');
    if(day > 0 && day <= 11){
      console.log('1-ая декада месяца')
    }
    else if(day > 11 && day <= 21){
      console.log('2-ая декада месяца')
    }
    else if(day > 21 && day <= 31){
      console.log('3-ая декада месяца')
    }
    else{
      console.log('error')
    }
}

//task 9

{
  day = (Math.floor(Math.random()*31 + 1));
  let year = day / 365;
  let month = day / 31;
  let week = Math.ceil(day / 7);
  let hour = day * 24;
  let min = day * 1440;
  let sec = day * 86400;
  if (day < 7) {
    console.log(`Меньше года и Меньше месяца и Меньше недели  + ${hour} + часов + ${min} + минут + ${sec} + секунд`);
  }
  if (day >= 7 && day < 31) {
    console.log(`Меньше года и Меньше месяца  + ${week} + недели + ${hour} + часов + ${min} + минут + ${sec} + секунд`);
  }
  if (day >= 31 && day < 365) {
    console.log(`Меньше года  + ${month} + месяцев  + ${week} + недели + ${hour} + часов + ${min} + минут + ${sec} + секунд.`);
  }
  if (day >= 365) {
    console.log(`day: ${day} year: ${year} month: ${month} week: ${week} hour: ${hour} minutes: ${min} seconds: ${sec}`);
  }
}

//task 10

{
  day = (Math.floor(Math.random()*365 + 1));
  let yearTime;
  console.log('День: ', day);
        if(day <= 31){
            console.log('Январь')
            yearTime = 'Winter'
        } else if(day>31 && day <= 59){
            console.log('Февраль')
            yearTime = 'Winter'
        }else if(day>59 && day <= 90){
            console.log('Март')
            yearTime = 'Spring'
        }else if(day>90 && day <= 120){
            console.log('Апрель')
            yearTime = 'Spring'
        }else if(day>120 && day <= 151){
            console.log('Май')
            yearTime = 'Spring'
        }else if(day>151 && day <= 182){
            console.log('Июнь')
            yearTime = 'Summer'
        }else if(day>182 && day <= 212){
            console.log('Июль')
            yearTime = 'Summer'
        }else if(day>212 && day <= 243){
            console.log('Август')
            yearTime = 'Summer'
        }else if(day>243 && day <= 274){
            console.log('Сентябрь')
            yearTime = 'Autumn'
        }else if(day>274 && day <= 304){
            console.log('Октябрь')
            yearTime = 'Autumn'
        }else if(day>304 && day <= 334){
            console.log('Ноябрь')
            yearTime = 'Autumn'
        }else if(day>334 && day <= 365){
            console.log('Декабрь')
            yearTime = 'Winter'
        }
        else{
            console.log('Error')
        }
        switch(yearTime){
            case 'Winter': console.log('Зима'); break;
            case 'Spring': console.log('Весна'); break;
            case 'Summer': console.log('Лето'); break;
            case 'Autumn': console.log('Осень'); break;
            default: console.log('error');
        }
    }
