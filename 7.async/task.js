'use strict';

class AlarmClock {
  constructor(timerId) {
    this.alarmCollection = [],
    this.timerId = null
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('Невозможно найти будильник. Параметр id не передан');
    }

    if (this.alarmCollection.some(el => el.id === id)) {
      console.error('Будильник с таким id уже существует.');
      return;
    }

    this.alarmCollection.push({id, time, callback});
  }

  removeClock(id) {
    const filteredAlarms = this.alarmCollection.filter(el => el.id !== id);
    return this.alarmCollection.length > filteredAlarms.length && Boolean(this.alarmCollection = filteredAlarms);
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    const checkClock = alarm => {
      if (this.getCurrentFormattedTime() === alarm.time) {
        alarm.callback();
      }
    }

    if (!this.timerId) {
      this.timerId = setInterval(() => this.alarmCollection.forEach(el => checkClock(el)));
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(el => console.log(`Будильник ${el.id} заведён на время ${el.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  const testAlarm = new AlarmClock();
  testAlarm.addClock('23:35', () => console.log('Прошлое забыто!'), 1);
  testAlarm.addClock('23:36', () => {
    console.log('Будущее закрыто!');
    testAlarm.removeClock(2)
  }, 2);
  testAlarm.addClock('23:37', () => {
    console.log('Настоящее даровано!');
    testAlarm.clearAlarms();
    testAlarm.printAlarms();
  }, 3);
  testAlarm.addClock('23:44', () => console.log('Пора вставать!'), 1);
  testAlarm.printAlarms();
  testAlarm.start();
}

testCase();