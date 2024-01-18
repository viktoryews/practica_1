/** Задание 1 */
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);
console.log(`Минимальное числов в массиве: ${minNumber}`);

/** Задание 2 */
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. 
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    let count = 0;
    return {
        increment:() => ++count,
        decrement:() => --count,
    }
}

const increasingСounter = createCounter();
console.log(increasingСounter.increment());  

const reducingСounter = createCounter();
console.log(reducingСounter.decrement());

/** Задание 3 */
// Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

function factorial(number) {
    if (number === 0) {
        return 1
    }
    return factorial(number - 1) * number;
}
console.log(factorial(5));
console.log(factorial(0));

/** Задание 4 */
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает 
// первый найденный элемент с указанным классом в этом дереве.

let arrElements = [];

function findElementByClass(rootElement, classNameElem) {

   if (rootElement.hasChildNodes()) {
      for (let element of rootElement.children) {
         if (element.className === classNameElem) {
            arrElements.push(element);
         }
         findElementByClass(element, classNameElem);
      }
   }
   return arrElements[0];
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class10');
console.log(targetElement);