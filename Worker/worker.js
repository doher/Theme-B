'use strict';

class Worker {
    constructor(name, surname, rate, days) {
        let _name = name,
            _surname = surname,
            _rate = rate,
            _days = days;

        this.getName = function () {
            return _name || 'Name unknown';
        }

        this.getSurname = function () {
            return _surname || 'Surname unknown';
        }

        this.setRate = function (rate) {
            _rate = rate;
        }

        this.getRate = function () {
            return _rate || 0;
        }

        this.setDays = function (days) {
            _days = days;
        }

        this.getDays = function () {
            return _days || 0;
        }
    }

    getSalary() {
        return this.getRate() * this.getDays();
    }
}

let worker1 = new Worker('Alex', 'Petrov', 0, 0);
let worker2 = new Worker();

worker1.setRate(80);
worker1.setDays(21);

console.log('Зарплата первого рабочего, к выдачи: ', worker1.getSalary());
console.log('Имя второго рабочего по умолчанию: ', worker2.getName());