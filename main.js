//! Методы массивов(forEach, map, filter, reduce, indexof, includes, every, some)

//! forEach - данный метод перебирает массив и ничего не возвращает.
// let arr = [1, 10, 20, 30,40];
// arr.forEach ((item, index, array) => {
//     if(item > 25) {
//         console.log(item)
//     }
// })

// let names = ['Maksat', 'Abai', 'Erjan', 'Beksultan'];
// names.forEach((item) => {
//     console.log(item);
// })

// let nums = [-10, 20, -55, 146, 212, -99];
// let positiveNums = [];
// nums.forEach((item) => {
//     if(item > 0) {
//         positiveNums.push(item);
//     }
// })
// console.log(positiveNums);

//! map - данный метод перебирает массив и возвращает новый массив.

// let countries = ['Kyrgyzstan', 'Russion', 'China', 'Uzbeksitan'];
// let newCountries = countries.map((item, index, array) => {
//     // console.log(item.length);
//     // console.log(index);
//     // console.log(array);
//     return item.length
// });
// console.log(newCountries)

// let nums = [4, 2, 9, 6, 5]
// let newNums = nums.map((item) => {
//     return item ** 3;
// })
// console.log(newNums);

//! filter - данный метод перебирает массив. Eсли в return условие выдает true, то данный метод возрващается в новый массив, а если false, то не возращается

// let frameworks = ['React', 'Django', 'Node.Js', 'Flutter'];
// frameworks.filter((item, index, array) => {
//     console.log(item);
// })


//! callback function - это та функция, которая передается в аргументы дрyгой функции или метода

// let nums = [-10, 20, -55, 200, -42, 12];
// let negative = nums.filter((item) => {
//     return item < 0;
// });
// console.log(negative);

// let shoes = [
//     {
//         name: 'Nike AF-1',
//         price: 4000
//     },
//     {
//         name: 'Li-ning KX-12',
//         price: 9000
//     },
//     {
//         name: 'Adidas',
//         price: 6650
//     },
//     {
//         name: 'Puma',
//         price: 6200
//     },
// ];
// let price = shoes.filter((item) => {
//     return item.price > 6000 && item.price < 8000;
// });
// console.log(price);

//! indexOf - находит индекс первого совпадающего элемента.

// let arr = ['number', 10, 20, 20];
// let index = arr.indexOf(30);
// console.log(index);

//! includes - возвращает true, если нашел совпадения, а если не нашел, то false

// let data = [true, 30, false];
// let result = data.includes(300);
// console.log(result);

//! some, every

// let arr = [10, 20, 30, 40];
// let result = arr.every((item) => {
//     return item > 0;
// })
// console.log(result);

//! reduce - данный метод принимает в себе callback функцию и initValue,  а функция принимет prevValue, item. index, array.
//! Если нету второго аргумента (initValue), то prevValue равен первому элементу массива, а item второму. Начиная со второго круга prevValue равен тому, что вернули на предыдущим круге
//! Если есть второй аргумент (initValue), то prevValue равен initValue, а item первому элементу массива.

// let nums = [10, 5, 22, 49];
// let sum = nums.reduce((prevValue, item, index, array) => {
//     console.log('prevValue', prevValue);
//     console.log('item', item);
//     return prevValue + item;
// });
// console.log(sum);

// let nums = [10, 2, 3];
// let sum = nums.reduce((prev, item) => {
//     return prev * item
// }, 100)
// console.log(sum);

//! В массиве есть градусы по цельсию. Нужно вернуть массив с градусами по фаренгейту
// let celsius = [-15, 10, 24, 36, 0];
// let fa = celsius.map((item) => {
//     return item * 1.8 + 32;
// })
// console.log(fa)


// Методы массивов. Классная работа.

// Задание №1
// Дан массив из чисел: let nums = [12, 10, 99, 9, 3, 2, 120, 200,];
// Используя метод filter(), выведите в массив числа, которые больше или равны 10.
// Вывод: [12, 10, 99, 120, 200]

// Задание №2
// Дан массив let lengthName = [`Patricia` , `William` , `Barbara` , `James` , `Chloe` , `Elizabeth` ]; Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().

// Задание №3
// Дан массив let arrNums = [12, 21, 27, 31, 45, 50 ];
//  С помощью цикла foreach и оператора if выведите в console элементы массива, которые больше 20-ти, но меньше 30-ти.

// Задание №4
// Дан массив let total = [ 1, 5, 0, 3, 6 ];
// Суммируйте все значения в данном массиве и выведите результат в alert(). Используйте метод reduce().





//! task 1
// function checkTask(arr){
//  let newArr = arr.filter((item) => {
//      return item > 0
//  })
//  console.log(newArr);
// }
// checkTask([2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17]);

//! task 2
// function checkTask(arr) {
// let sum = 0;
// arr.forEach((item) => {
//     sum+= item
// })
// console.log(sum)
// }
// checkTask([10, 25, 25, 15, 5, 10]);

//! task 3
// function checkTask(arr) {
//     let newArr = arr.reduce((prev, item) => {
//         return prev - item
//     })
//     return newArr
// }
// console.log(checkTask([175, 50, 25]));

//! task 4
// function checkTask(arr) {
//     let max = 0;
//     arr.map((item) => {
//         if(item > max) {
//             max = item;
//         }
//     })
//     return max
// }
// console.log(checkTask([4, 15, -4, 27, 12, 8]));


//! task 5 ??
// function checkTask(arr) {
//     let newArr = arr.reduce((prev, item) => {
//         prev[item] ? prev[item]++ : (prev[item] = 1)
//         return prev
//     }, {})
//     let max = 0;
//     let num = 0;
//     for(let i in newArr) {
//         if(newArr[i] > max) {
//             max = newArr[i]
//             num = i
//         }
//     }
//     return +num
// }
// console.log(checkTask([4,5,5,5,3,5,2,3,1,3,4,6]));



//! task 6 ?
// function checkTask(arr) {
// let newArr = []
// arr.forEach((item) => {
//        return newArr.push(item ** 2);
//     })
//     return newArr; 
//     }
// console.log(checkTask([1, 2, 3]))

//! task 7
// function checkTask(arr) {
//     let result = arr.every((item) => {
//         return item > 0;
//     })
//     return result;
// }
// console.log(checkTask([4, 5, 8, 9]));

//! task 8
// function checkTask(arr) {
//     let result = arr.filter((item) => {
//         return item.length > 5;
//     })
//     console.log(result);
// }
// checkTask(['июнь', 'октябрь', 'май', 'ноябрь', 'март']);

//! task 9
// function checkTask(arr) {
//     let wasNullFound = false;
//     let result = arr.reduce((prev, item) => {
//         if(prev === 0) {
//             return 0;
//         }
//         if(wasNullFound) return prev;
//         if(item === 0) {
//             wasNullFound = true;
//             return prev;
//         } else {
//         return prev + item
//         }
//     })
//     console.log(result);
// }
// checkTask([1,2,3,0,3,4]);



//! task 10 ??
// function checkTask(arr) {
//         arr.map((item) => {
//             arr.includes('Это заголовок <h1>')
//                 console.log(`<h1>${item}</h1>`)
//             // arr.includes('А это параграф <p>')
//             //     console.log(`<p>${item}</p>`)
//             // arr.includes('А это тег <div>')
//             //     console.log(`<div>${item}</div>`)
//         }) 
// }
// checkTask(["Это заголовок <h1>", "А это параграф <p>", "А это тег <div>"]);


//! task 11
// function checkTask(arr) {
//     let arr1 = arr.reduce((prev, item) => {
//         prev[item[0]] = item.slice(1)[0]
//         return prev
//         }, {})
//     console.log(arr1);
//     }
// checkTask([['a', 1], ['b', 2]])

//! task 12
// function checkTask(arr) {
//     let sum = 0;
//     return console.log( arr.reduce((prev, item) => {
//         return prev += !Array.isArray(item) ? item :checkTask(item);
//     }, 0))
// }
// checkTask([1,2, [4,5,6], [7,8]]);

// var arr = [1, 2, 3, [4, 5, 6, [7, 8, 9], 10, 11, 12], 13, 14, 15];

// function sum(data) {
//   return data.reduce(function(r, e) {
//     return r += !Array.isArray(e) ? e : sum(e)
//   }, 0)
// }

// console.log(sum(arr))

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// function task5(arr) {
//   let newArr = arr.filter((item) => {
//     return Array.isArray(item);
//   });
//   console.log(newArr);
// }
// task5([1, 2, [3, 4], 5, [6, 7]]);

//! find, findIndex

// let data = ['Andrey', "Amantur", 'Aisha', "Aigerim"]
// let name = data.find((item, index, array) => {
//     return item === 'Aisha';
// });
// console.log(name);

// let index = data.findIndex((item, index, array) => {
//     return item === 'Aigerim';
// });
// console.log(index);

// let users = [
//     {
//         name: 'Adilet',
//         id: 21343,
//     },
//     {
//         name: 'Azat',
//         id: 12221,
//     },
//     {
//         name: 'Tariel',
//         id: 3334,
//     },
//     {
//         name: 'Raul',
//         id: 54323,
//     },
// ];

// let firstUser = users.find((item) => {
//     return item.id === 12221;
// })
// console.log(firstUser);

// let lastUser = users.find((item) => {
//     return item.name === 'Raul';
// })
// console.log(lastUser);

// let index = users.findIndex((item, index) => {
//     return item.id === 21343;
// })
// console.log(index);

// console.log(data);

// let comment = data.find((item) => {
//     return item.email === 'Esther_Ratke@shayna.biz';
// });
// console.log(comment);

// let newArr = data.filter((item) => {
//     return item.id > 430;
// });
// console.log(newArr);


// let newArr = data.filter((item) => item.id > 430)
// console.log(newArr);


// let word = 'JavaScript';
// console.log(word.slice(0, 4));

// Дан массив ['sam','luck','james'].
// Нужно перебрать массив так, чтобы первые буквы имен были большими.
// Пример вывода:
// ['Sam','Luck','James']

// let names = ['sam','luck','james'];
// let newNames = names.map((item) => {
//     return item[0].toLocaleUpperCase() + item.slice(1);
// })
// console.log(newNames)

//! Напишите функцию, которая принимает массив и
// возвращает новый массив из длин элементов исходного массива.
// Пример вывода: [4,5,2,5]
//
// let arr = ["Есть", "жизнь", "на", "Марсе"];

// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let newArr = arr.map((item) => {
//     return item.length 
// })
// console.log(newArr);


//! 1234567
// function reverseNum(arg1) {
//     return +arg1.toString().split('').reverse().join('');
// }
// console.log(reverseNum(1234567));

//! Напишите функцию, которая будет принимать строку и проверять является ли
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот",
// "комок" и т.д.

// function palindrome(arg1) {
//     if(arg1.toLowerCase() === arg1.split('').reverse().join('').toLowerCase()) {
//         console.log('palindrome');
//     }
//     else {
//         console.log('not palindrome')
//     }
// }
// palindrome('Aziza');


// var secarr = arr.filter(function(element, index, array){
//     //console.log(element, array.indexOf(element), index);
//     return array.indexOf(element) >= index;
// });

// //reverses the order
// var thirdarr = arr.filter(function (e, i, arr) {
//     //console.log(e, arr.lastIndexOf(e), i);
//     return arr.lastIndexOf(e) === i;
// });

// console.log(secarr);
// console.log(thirdarr);




//todo Методы массивов. Задачи на закрепление.

//! Задание № 1
// Написать функцию, которая получает в
// качестве параметра массив, затем перебирает
// все его элементы и выводит на экран сам
// элемент, а также тип данных элемента - числовой, не числовой
// Пример: [‘Молоко’, 77, 11, ‘Мед’, -88];
// Ответ: 	Молоко-не число
// 77-число и т.д.

// function task1(arr) {
//   arr.forEach((item) => {
//     return typeof item !== 'string' ? console.log(`${item} - число`) : console.log(`${item} - не число `)
//   })
// }
// task1(['Молоко', 77, 11, 'Мед', -88]);

//! Задание № 2
// Напишите функцию, определяющую,
// присутствует ли заданный элемент в массиве.
// В качестве результата работы функции можно
// выдавать логическое значение true и индекс
// этого элемента, если элемент найден,
// и false — в противном случае.
// Пример: [‘Молоко’, 20, 40, “дом”, 30]
// Ввод: 40
// Вывод: true 2

// function task2(n) {
//   let arr = ['Молоко', 20, 40, 'дом', 30];
//   let index = arr.indexOf(n);
//   return arr.includes(n) === true
//     ? console.log(true, index)
//     : console.log(false);
// }
// task2(30);

//! Задание № 3
// Найдите сумму чисел в массиве
// методом forEach(), методом reduce() и map().
// Пример: [5, 6, 7, 8, 9]
// Ответ: 35

// reduce
// let arr = [5, 6, 7, 8, 9];
// let sum = arr.reduce((prev,item) => {
//   return prev + item;
// });
// console.log(sum);

// map
// let sum1 = 0;
// arr.map((item) => {
//   return sum1 += item
// })
// console.log(sum1);

// forEach
// let sum2 = 0;
// arr.forEach((item) => {
//   return sum2+= item;
// })
// console.log(sum2);

//! Задание № 4
// Оставьте в массиве только те строки,
// длина которых равна или больше 5-ти символов.
// Используйте filter().
// Пример: [‘aaa’, ‘aaaqqq', ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]
// Ответ:  [‘aaaqqq', ‘zzzqq’]

// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// let newArr = arr.filter((item)=> {
//   return item.length >= 5
// })
// console.log(newArr);

//! Задание № 5
// Дан массив, в нем могут быть обычные
// элементы и подмассивы.
// Оставьте в нем только подмассивы.
// Используйте filter().
// Пример: [1, 2, [3, 4], 5,[6, 7]]
// Ответ:  [[3, 4],[6, 7]]

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// function task5(arr) {
//   let newArr = arr.filter((item) => {
//     return Array.isArray(item);
//   });
//   console.log(newArr);
// }
// task5([1, 2, [3, 4], 5, [6, 7]]);

//! Задание № 6
// Напишите функцию которая принимает в аргументы массив и элемент массива, и удаляет переданный элемент
// из массива.
// Например: remove_array_element([2, 5, 9, 6], 5);
// Вывод: [2, 9, 6]

// function task6(arr, n) {
//   let index = arr.indexOf(n);
//   arr.map((item) => {
//           if( item === n) {
//               arr.splice(index, 1)
//           }
//         return arr;
//       });
//   console.log(arr);
//     }
//   task6([2, 5, 9, 6], 5);

// function func(arr, n) {
//   let ar = [];
//   arr.map((item) => {
//     if(item !== n) {
//         ar.push(item);
//     }
//   })
//   return console.log(ar)
// }
// func([2, 5, 9, 6], 5);

//! Задание № 7
// Дан массив с числами. Найдите сумму
// первых N элементов до первого нуля.
// Например здесь суммируем первые 3 элемента, так как
// дальше стоит элемент с числом 0.
// Пример: [1, 2, 3, 0, 4, 5, 6]
// Ответ: 6
// Используйте slice() и reduce().

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let newArr = arr.reduce((prev, item) => {
//   if(item === 0) arr.splice(1)
//   return prev + item;
// });
// console.log(newArr);

//! Задание № 8
// Дан массив с числами. Напишите функцию, которая
// вычисляет сколько элементов с начала массива
// надо сложить, чтобы в сумме получилось 10?
// Пример:  [3, 1, 4, 2, 4, 5, 6]
// Ответ: 4

//???
// function task8(arr) {
//   let count = 0;
//   let newArr = arr.reduce((prev,item) => {
//     return prev + item === 10 ? count++ : count;
//   })
//   console.log(count);
// }
// task8([3, 1, 4, 2, 4, 5, 6]);

//! Задание № 9
// Напишите функцию, которая принимает массив и состоящий из строк
// и возвращает новый массив состояший только из первых и последних
// букв каждой строки
// Например: ['hi', 'goodbye', 'smile']
// Вывод: ['hi', 'ge', 'se']

// let arr = ['hi', 'goodbye', 'smile', 'makers'];
// let arr1 = arr.map((item) => {
//   return item.slice(0, 1) + item.slice(-1);
// });
// console.log(arr1);

//! Задание № 10
// Дан массив с числами. Вывести количество
// отрицательных чисел в этом массиве.
// Пример: [7, -1, -9, 0, 4, 5, -6]
// Ответ: 3

// let arr = [7, -1, -9, 0, 4, 5, -6, -80];
// let count = 0;
// let arr1 = arr.map((item) => {
//   if(item < 0)
//     return count++
// })
// console.log(count);

//! Задание №11
// Напишите функцию shuffle(array), которая перемешивает
// (переупорядочивает случайным образом) элементы массива.
// Каждый вызов данной функции должен возвращать массив с
// разным порядком элементов массива.
// Пример: дан массив [4, 8, 12, 16]
// Вывод: [8, 16, 4, 12], следующий запуск выдаст также
// другой порядок элементов - [12, 4, 16, 8]

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];
// shuffle(arr);
// console.log(arr);

//! Задание №12
// Напишите функцию которая возвращает массив,
// содержащий только уникальные элементы.
// Пример: ['apple', 'orange', 'apple', 'pear']
// Вывод: ['apple', 'orange', 'pear']

// let arr = ['apple', 'orange', 'apple', 'pear'];
// let arr1 = [];
// arr.map((item) => {
//   if (!arr1.includes(item))
//   return arr1.push(item)

// })
// console.log(arr1);

// arr.reduce((prev, item) => {
//   return
// })
// console.log(arr);

// var newarr = arr.reduce((prev, item) => {
//     // console.log(prev, item);
//     if (prev.indexOf(item) < 0) prev.push(item);
//     console.log(prev.indexOf(item))
//     return prev;
// }, []);
// console.log(newarr);

//! Задание №13
// Напишите функцию которая принимает строку и возвращает объект с ключами в виде
// гласных, и значениями ключей в виде чисел, обозначающих сколько раз данная
// гласная встречается в заданной строке. Функция не должна учитывать регистр, т.е
// должна учитывать и заглавные и строчные буквы.
// Использовать forEach
// Например: 'I Am awesome and so are you'
// Вывод: {i: 1, a: 4, e: 3, o: 3, u: 1};


// function task13(str) {
//   return str.split('').reduce((prev, item) => {
//     prev[item] ? prev[item]++ : (prev[item] = 1);
//     return prev;
//   }, {});
// }
// console.log(task13('I Am awesome and so are you'.toLocaleLowerCase()));

//! Задание №14
// Напишите функцию которая принимает в качестве аргумента массив состоящий из объектов
// (с элементами в виде ключей и значений), а также две новые строки.
// И добавляет новую пару ключ и значение, состоящих из указанных строк,
// к каждому из объектов массива
// Например: myFunc([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
// Вывод:[{name: 'Elie', title:'instructor'},
// {name: 'Tim', title:'instructor'},
// {name: 'Matt', title:'instructor'},
// {name: 'Colt', title:'instructor'}]

// function myFunc(arr, key, value){
//   arr.map((item) => {
//       item[key] = value;
//   })
//   return arr;
// }
// console.log(myFunc([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

//! Задание №15
// Вам даны два массива состоящих из чисел, длина массивов >= 1,
// напишите функцию которая возвращает true если сумма квадратов
// каждого элемента в первом массиве больше чем сумма кубов каждого
// элемента второго массива.
// Использовать метод reduce()

// Например: [4, 5, 6], [1, 2, 3]
// Вывод: true, т.к (4 ** 2 + 5 ** 2 + 6 ** 2) > (1 ** 3 + 2 ** 3 + 3 ** 3)

// function task15(arr1, arr2) {
//   let newArr1 = arr1.reduce((prev,item) => {
//     return prev + item ** 2;
//   }, 0);
//   let newArr2 = arr2.reduce((prev, item) => {
//     return prev + item ** 3;
//   }, 0);
//   if(newArr1 > newArr2) {
//     return true;
//   } else
//   return false;

// }
// console.log(task15([4, 5, 6], [1, 2, 3,]));


