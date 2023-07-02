class MyArray {
  #birthday; constructor()
   {
    this.arr = [];
    let birthday = new Date();
    this.#birthday = function() {
      return birthday;
    }
  }
  
  getString(separator) {
    return this.arr.join(separator);
  }
  
  getHtml(type) {
    let html = '';

    if (type) {
      html += '<ol>';
      for (let i = 0; i < this.arr.length; i++) {
        html += `<li>${this.arr[i]}</li>`;
      }
      html += '</ol>';
    } else {
      html += '<ul>';
      for (let i = 0; i < this.arr.length; i++) {
        html += `<li>${this.arr[i]}</li>`;
      }
      html += '</ul>';
    }
    
    return html;
  }
  
  sort() {
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

const extendedArray = new MyArray();
extendedArray.arr = [9, 1, 8, 5, 3, 7, 15, 54, 27, 6];

console.log('Вывод строки, полученной из объединения элементов массива с разделителем ","\n', extendedArray.getString(', '));
console.log('Вывод строки, содержащей элементы массива в формате HTML с использованием тегов \n', extendedArray.getHtml(true));

extendedArray.sort();

console.log('Вывод строки, полученной из объединения отсортированных элементов массива с разделителем ","\n', extendedArray.getString(', '));

class Person {
  constructor(name, dateOfBirth, address) {
    this.name = name;
    this.dateOfBirth = new Date(dateOfBirth);
    this.address = address;
  }
}

const person1 = { name: 'Женя', dateOfBirth: new Date('01/02/1980'), address: '12 Темерязево' };
const person2 = { name: 'Семен', dateOfBirth: new Date('02/03/1991'), address: '456 Тихомировский' };

const myArray = {
  arr: [person1, person2],
  getHtml: function (numbered) {
    let html = numbered ? '<ol>' : '<ul>';
    for (let i = 0; i < this.arr.length; i++) {
      const person = this.arr[i];
      html += `<li>${person.name} - ${person.dateOfBirth.toLocaleDateString()} - ${person.address}</li>`;
    }
    html += numbered ? '</ol>' : '</ul>';
    return html;
  }
};

const resultElement = document.getElementById('result');
resultElement.innerHTML = "Нумерованный список " + myArray.getHtml(true);
resultElement.innerHTML += " Маркированный список " + myArray.getHtml(false);