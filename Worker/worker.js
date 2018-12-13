'use strict';

class Worker {

    constructor(name, surname, rate, days) {
        this._name = name || 'Name unknown';
        this._surname = surname || 'Surname unknown';
        this._rate = rate || 0;
        this._days = days || 0;
    }

    get getName() {
        return this._name;
    }

    get getSurname() {
        return this._surname;
    }

    set setRate(rate) {
        this._rate = rate;
    }

    get getRate() {
        return this._rate;
    }

    set setDays(days) {
        this._days = days;
    }

    get getDays() {
        return this._days;
    }

    getSalary() {
        return this._rate * this._days;
    }
}

let worker1 = new Worker('Alex', 'Petrov', 22, 43);
let worker2 = new Worker('', 'Ivanov');

worker1.setRate = 40;
worker1.setDays = 40;

worker2.setRate = 255;
worker2.setDays = 13;

console.log('Полное имя первого рабочего: ', worker1.getName + ' ' + worker1.getSurname);
console.log('Имя второго рабочего по умолчанию: ', worker2.getName);
console.log('Зарплата первого рабочего, к выдачи: ', worker1.getSalary());
console.log('Зарплата второго рабочего, к выдачи: ', worker2.getSalary());