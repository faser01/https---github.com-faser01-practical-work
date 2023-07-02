class MyArray {
  constructor() {
    // Инициализация пустого массива и свойства birthday как текущую дату
    this.arr = [];
    let birthday = new Date();
    
    // Приватное поле birthday
    this.getBirthday = function() {
      return birthday;
    }
  }
  
    getString(separator) {
      // Объединение элементов массива в строку с использованием разделителя
      return this.arr.join(separator);
    }
  
    getHtml(type) {
      let html = '';
  
      if (type) {
        // Если type равен true, то добавляем теги <ul> и <li> для форматирования элементов массива
        html += '<ul>';
  
        for (let i = 0; i < this.arr.length; i++) {
          // Добавляем каждый элемент массива внутри тега <li>
          html += `<li>${this.arr[i]}</li>`;
        }
  
        html += '</ul>';
      } else {
        // Если type равен false, то выводим элементы массива без использования тегов
        for (let i = 0; i < this.arr.length; i++) {
          html += `${this.arr[i]} `;
        }
      }
  
      return html;
    }
  
    sort() {
      // Сортировка элементов массива в порядке возрастания
      for (let i = 0; i < this.arr.length; i++) {
        for (let j = 0; j < this.arr.length - i - 1; j++) {
          if (this.arr[j] > this.arr[j + 1]) {
            let temp = this.arr[j];
            this.arr[j] = this.arr[j + 1];
            this.arr[j + 1] = temp;
          }
        }
      }
    }
  }
  
  // Создание нового объекта класса MyArray
  const extendedArray = new MyArray();
  
  // Присваивание массива [9, 1, 8, 5, 3, 7, 15, 54, 27, 6] свойству arr объекта extendedArray
  extendedArray.arr = [9, 1, 8, 5, 3, 7, 15, 54, 27, 6];
  
  // Вывод строки, полученной из объединения элементов массива с разделителем ', '
  console.log('Вывод строки, полученной из объединения элементов массива с разделителем ","\n',extendedArray.getString(', '));

  
  // Вывод строки, содержащей элементы массива в формате HTML с использованием тегов <li>
  console.log('Вывод строки, содержащей элементы массива в формате HTML с использованием тегов <li>\n', extendedArray.getHtml(true));

   // Получение элемента с id "output" из DOM
   const outputElement = document.getElementById('output');

     // Присвоение элементу outputElement значения, возвращаемого методами getString() и getHtml() объекта extendedArray
     outputElement.innerHTML = 'Вывод строки, полученной из объединения отсортированных элементов массива с разделителем ","\n<br>' + extendedArray.getString(', ')+ "\n";
     outputElement.innerHTML += '\n<br>Вывод строки, содержащей элементы массива в формате HTML с использованием тегов &lt;li&gt;<br>' + 
     extendedArray.getHtml(true);

      // Сортировка элементов массива
  extendedArray.sort();

  // Вывод строки, полученной из объединения отсортированных элементов массива с разделителем ', '
  console.log( 'Вывод строки, полученной из объединения отсортированных элементов массива с разделителем ","\n',extendedArray.getString(', '));
  
  // Вывод строки, содержащей элементы массива без использования тегов
  console.log(' Вывод строки, содержащей элементы массива без использования тегов \n',extendedArray.getHtml(false));
  

  class Person {
    constructor(name, dateOfBirth, address) {
      // Инициализация свойств объекта Person
      this.name = name;
      this.dateOfBirth = dateOfBirth;
      this.address = address;
    }
  }
  
  // Создание двух объектов класса Person
  const person1 = new Person('Женя', '01/02/1980', '12 Темерязево');
  const person2 = new Person('Семен', '02/03/1991', '456 Тихомировский');
  
  // Создание нового объекта класса MyArray
  const myArray = new MyArray();
  
  // Присваивание массива, содержащего объекты person1 и person2, свойству arr объекта myArray
  myArray.arr = [person1, person2];
  
  // Получение элемента с id "result" из DOM
  const resultElement = document.getElementById('result');
  
  // Присвоение элементу resultElement значения, возвращаемого методами getHtml(true) и getHtml(false) объекта myArray
resultElement.innerHTML = "Список людей:" + myArray.getHtml(true);
resultElement.innerHTML += "Детали каждого человека:" + myArray.getHtml(false);