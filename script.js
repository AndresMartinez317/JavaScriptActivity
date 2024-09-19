const students = [85, 97, 44, 37, 76, 60];
let average = 0;
for(let i =0;i<students.length;i++){
    average = 0;
    average += students[i];
}
average = average/students.length;
console.log(students);
console.log(average);


const prices = [250, 645, 300, 900, 50];
for(let i =0;i<prices.length;i++){
    prices[i] = prices[i]*0.9;
}
console.log(prices);

const companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
companies.shift();
companies[1] = 'ola';
companies.push('Amazon');
console.log(companies);
