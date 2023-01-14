function getData() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let a = this.responseText.replaceAll('[','').replaceAll(']','').replaceAll('"','').split(',');
            let intArray = a.map(Number);
            document.body.innerHTML = `
                <input name="num" id = "num"/> <button onclick="add_el()">add</button>
                <p>Доступный Лист ${a}.</p>
              `;
            window.globalVariable = intArray;
        }
    };
    xhttp.open("GET", "data.php", true);
    xhttp.send();
}

function add_el(globalVariable1 = globalVariable) {
    var x = document.getElementById('num').value;
    
    let inputElement = document.getElementById('num');
    let inputValue = inputElement.value;
    let inputValueInt = parseInt(inputValue);

    let intArray = globalVariable;

    if (Number.isInteger(inputValueInt)) {
        console.log('Значение является целым числом');

        intArray.push(inputValueInt);
        selectionSort(intArray);
        globalVariable = intArray;

        document.body.innerHTML = `
		<input name="num" id = "num"/> <button onclick="add_el()">add</button>
                <p>Доступный Лист ${intArray}.</p>
              `;

    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}