function getAndupdate() {
    let tit = document.getElementById('titleId').value
    let desc = document.getElementById('descId').value
    if (localStorage.getItem('JsonItems') == null) {
        let jsonArrItems = [];
        jsonArrItems.push([tit, desc])
        // console.log(jsonArrItems)
        localStorage.setItem('JsonItems', JSON.stringify(jsonArrItems))
    }
    else {
        let str = localStorage.getItem('JsonItems');
        jsonArrItems = JSON.parse(str);
        jsonArrItems.push([tit, desc])
        // console.log(jsonArrItems)
        localStorage.setItem('JsonItems', JSON.stringify(jsonArrItems))
    }
    let str2 = '';
    jsonArrItems.forEach((element, index) => {
        str2 += `
    <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button id="dlt-btn-id" class="btn btn-danger btn-sm" onclick="deleted(${index})">Delete</button></td>
      </tr>
         `
        update();
    });
    document.getElementById('tableBody').innerHTML = str2
}

function update() {
    let tit = document.getElementById('titleId').value
    let desc = document.getElementById('descId').value
    if (localStorage.getItem('JsonItems') == null) {
        let jsonArrItems = [];
        // jsonArrItems.push([tit, desc])
        // console.log(jsonArrItems)
        localStorage.setItem('JsonItems', JSON.stringify(jsonArrItems))
    }
    else {
        let str = localStorage.getItem('JsonItems');
        jsonArrItems = JSON.parse(str);
        // jsonArrItems.push([tit, desc])
        // console.log(jsonArrItems)
        localStorage.setItem('JsonItems', JSON.stringify(jsonArrItems))
    }
    let str2 = '';
    jsonArrItems.forEach((element, index) => {
        str2 += `
    <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button id="dlt-btn-id" class="btn btn-danger btn-sm" onclick="deleted(${index})">Delete</button></td>
      </tr>
         `
    });
    document.getElementById('tableBody').innerHTML = str2
}

let add = document.getElementById('addId');
add.addEventListener('click', getAndupdate)
// document.getElementById('ShowTodoId').addEventListener('click', update)
update()

function deleted(indexItem) {
    console.log('item is deleted', indexItem)
    let str = localStorage.getItem('JsonItems');
    jsonArrItems = JSON.parse(str);
    jsonArrItems.splice(indexItem, 1);
    localStorage.setItem('JsonItems', JSON.stringify(jsonArrItems))
    update();
}

ClearId.addEventListener('click', () => {
    console.log('clearing...')
    localStorage.clear()
    update()
})