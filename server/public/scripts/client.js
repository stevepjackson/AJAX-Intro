console.log('JS ready!');

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery ready!');
    getTestData();
    $('#addPerson').on('click', addPerson);
}

function addPerson() {
    $.ajax({
        type: 'POST',
        url: '/tester',
        data: {
            name: 'Steve'
        }
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        alert('ERROR IN POST')
    })
}

function getTestData() {
    console.log('in getTestData');
    $.ajax({
        type: 'GET',
        url: '/tester'
    }).then(function(response){
        console.log('back from server with:', response)
        appendToDom(response);
    }).catch(function(err) {
        alert('problem! check console');
        console.log(err);
    })
}

function appendToDom(imNotYour) {
    $('#list').empty();
    for (let thing of imNotYour) {
        $('#list').append(`<li>${thing}</li>`);
    }
}