let url = 'http://localhost:3000/api/'

// 8 esas method var, bunlardan 5i daha cox istifade olunur.

// 1. GET - sadece movcud obyektleri getirmek ucun 
// 2. POST - yeni obyekt elave etmek ucun
// 3. PUT - movcud obyekt KOKLU shekilde yenilemek ucun istifade olunur.
// 4. DELETE - movcud obyekti silmek ucun istifade edilir.
// 5. PATCH - movcud obyektde gonderilen datalari yenilemek
// ucun istifade olunur.

// axios veya fetch 

// GET METHOD SAMPLE

// with  fetch
function getAllFetch() {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

function getByIDFetch(id) {
    fetch(url + id)
        .then(res => res.json())
        .then(data => console.log(data))
}

//with axios

function getAllAxios() {
    axios.get(url)
        .then(res => console.log(res.data))
}

function getByIDAxios(id) {
    axios.get(url + id)
        .then(res => console.log(res.data))
}



// POST METHOD SAMPLE

let obj = {
    first_name: "Samir",
    last_name: "Ahmedov",
    email: "azerbaycan@gmail.co",
    gender: "Male",
    ip_address: "150.227.253.67"
}

let obj_short = {
    first_name: "Samir",
    last_name: "Ahmedov",
    email: "azerbaycan@gmail.co"
}

// with fetch

function postFetch() {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(data => console.log(data))
}

// with axios

function postAxios() {
    axios.post(url, obj).then(res => console.log(res.data))
}

// PUT METHOD SAMPLE

//with fetch
function putFetch(id) {
    fetch(url + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj_short)
    }).then(res => res.json())
        .then(data => console.log(data))
}

//with axios

function putAxios(id) {
    axios.put(url + id, obj_short).then(res => console.log(res.data))
}


// PATCH METHOD SAMPLE

//with fetch
function patchFetch(id) {
    fetch(url + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj_short)
    }).then(res => res.json())
        .then(data => console.log(data))
}

//with axios

function patchAxios(id) {
    axios.patch(url + id, obj_short).then(res => console.log(res.data))
}

// DELETE METHOD SAMPLE

//with fetch
function deleteFetch(id) {
    fetch(url + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => res.json())
        .then(data => console.log(data))
}

//with axios

function deleteAxios(id) {
    axios.delete(url + id).then(res => console.log(res.data))
}




