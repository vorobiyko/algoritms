let arrDefault: number[] = []
const arrDefaultEl = document.getElementById('arr-default')
const arrSortedEl = document.getElementById('arr-sorted')
const form = document.getElementById('opt') as HTMLSelectElement
const time = document.getElementById('time-sort')
const genArr = () => {
    for (let i = 0; i < 26; i++) {
        arrDefault[i] = (Math.floor(Math.random()*100))
    }
    arrDefaultEl.textContent = arrDefault.join(', ').toString()
}


//Bubble Sort

let arrSorted: number[] = []
const bubbleMethod = () => {
    for (let i = 0; i < arrDefault.length-1; i++) {
        for (let j = 0; j < arrDefault.length-i-1; j++) {
            if (arrDefault[j]>arrDefault[j+1]){
                let valueNext = arrDefault[j]
                arrDefault[j] = arrDefault[j+1]
                arrDefault[j+1] = valueNext
            }
        }
    }
    arrSortedEl.textContent = arrDefault.join(', ').toString()
}

const selectionSort = () => {
    for (let i = 0; i < arrDefault.length - 1; i++) {
        let minIndex = i;

        // Находим индекс наименьшего элемента в неотсортированной части массива
        for (let j = i + 1; j < arrDefault.length; j++) {
            if (arrDefault[j] < arrDefault[minIndex]) {
                minIndex = j;
            }
        }

        // Обмен значениями между текущим элементом и наименьшим элементом
        if (minIndex !== i) {
            const temp = arrDefault[i];
            arrDefault[i] = arrDefault[minIndex];
            arrDefault[minIndex] = temp;
        }
    }
    arrSortedEl.textContent = arrDefault.join(', ').toString()
}

const InsertionSort = () => {
    for (let i = 1; i < arrDefault.length; i++) {
        const current = arrDefault[i];
        let j = i - 1;

        // Перемещаем элементы больше текущего на одну позицию вправо
        while (j >= 0 && arrDefault[j] > current) {
            arrDefault[j + 1] = arrDefault[j];
            j--;
        }

        // Вставляем текущий элемент на правильную позицию
        arrDefault[j + 1] = current;
    }
    arrSortedEl.textContent = arrDefault.join(', ').toString()
}

const quickSort =  (arr: number[]): number[] => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (const num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const MergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(MergeSort(left), MergeSort(right));
}

const merge = (left: number[], right: number[]): number[] => {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


form.addEventListener("change", function(event) {
    const selectedValue: string = form.value;
    switch (selectedValue) {
        case '1':{
            genArr()
            const startTime = performance.now();
            bubbleMethod()
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            time.textContent = `Time to sort: ${executionTime}ms`
        }
        case '2':{
            genArr()
            const startTime = performance.now();
            selectionSort()
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            time.textContent = `Time to sort: ${executionTime}ms`
        }
        case '3':{
            genArr()
            const startTime = performance.now();
            InsertionSort()
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            time.textContent = `Time to sort: ${executionTime}ms`
        }
        case '4':{
            genArr()
            const startTime = performance.now();
            arrSortedEl.textContent = quickSort(arrDefault).join(', ').toString()
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            time.textContent = `Time to sort: ${executionTime}ms`
        }
        case '5':{
            genArr()
            const startTime = performance.now();
            arrSortedEl.textContent = MergeSort(arrDefault).join(', ').toString()
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            time.textContent = `Time to sort: ${executionTime}ms`
        }
        default:{
            console.log('HI')
        }
    }


});

