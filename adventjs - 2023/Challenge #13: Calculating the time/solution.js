const { test } = require('../../tester');

function solution(deliveries) {
    const endTimeString = "07:00:00";
    const getTimeInMs = (timeString) => {
        const [hours, minutes, seconds] = timeString.split(':');
        let totalTime = 0;
        totalTime += hours * 60 * 60 * 1000;
        totalTime += minutes * 60 * 1000;
        totalTime += seconds * 1000;
        return totalTime;
    };

    const msToTimeString = (ms) => {
        const formatNumber = (number) => {
            const formattedNumber = number >= 10 ? number : '0' + number;
            return formattedNumber;
        }

        const hours = Math.floor(ms / 1000 / 60 / 60);
        const minutes = Math.floor(ms / 1000 / 60 % 60);
        const seconds = ms / 1000 - minutes * 60 - hours * 60 * 60;

        const hourString = formatNumber(hours);
        const minuteString = formatNumber(minutes);
        const secondString = formatNumber(seconds);
        return `${hourString}:${minuteString}:${secondString}`;
    };

    const diffTimeStrings = (start, end) => {
        const endDate = new Date(`1970-01-01 ${end}`);
        const startDate = new Date(`1970-01-01 ${start}`);

        let dateDiff = '';
        let exceded = false;

        if (startDate.getTime() < endDate.getTime()) {
            dateDiff = new Date().setTime(endDate - startDate);
        } else {
            dateDiff = new Date().setTime(startDate - endDate);
            exceded = true;
        }
        
        dateDiff = `${exceded ? '' : '-'}${msToTimeString(dateDiff)}`;
        return dateDiff;
    };

    let totalMs = 0;
    deliveries.forEach(deliveryTime => {
        totalMs += getTimeInMs(deliveryTime);
    });
    const deliveryTimeString = msToTimeString(totalMs);
    const res = diffTimeStrings(deliveryTimeString, endTimeString);
    return res;
}

const inputA = ['00:10:00', '01:00:00', '03:30:00'];
const resultA = '-02:20:00';
const inputB = ['02:00:00', '05:00:00', '00:30:00'];
const resultB = '00:30:00';

test(inputA, resultA, solution);
test(inputB, resultB, solution);

