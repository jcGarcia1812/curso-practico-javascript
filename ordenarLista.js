const numbers = [];

function orderList () {

    const input1 = document.getElementById("input1");
    const value1 = input1.value;
    const addNumber1 = numbers.push(value1);

    const input2 = document.getElementById("input2");
    const value2 = input2.value;
    const addNumber2 = numbers.push(value2);

    const input3 = document.getElementById("input3");
    const value3 = input3.value;
    const addNumber3 = numbers.push(value3);

    numbers.sort();
}