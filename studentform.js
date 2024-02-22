var s_name = document.getElementById('s_name');
var s_age = document.getElementById('s_age');
var s_course = document.getElementById('s_course');
var s_mail = document.getElementById('s_mail');

var selectedValue;

function updateSelectedValue() {
    var s_male = document.getElementById('s_male');
    var s_female = document.getElementById('s_female');

    if (s_male.checked) {
        selectedValue = s_male.value;
    } else if (s_female.checked) {
        selectedValue = s_female.value;
    }
}

document.querySelectorAll('input[name="gridRadios"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        updateSelectedValue();
    });
});

var savetable = document.getElementById("save-table")

savetable.addEventListener("click",function(event){
    event.preventDefault()
    var t_data = document.getElementById('t-data');
    var newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${s_name.value}</td>
                    <td>${s_age.value}</td>
                    <td>${selectedValue}</td>
                    <td>${s_course.value}</td>
                    <td>${s_mail.value}</td>
                    <td><button class="btn btn-danger" onclick="deleteRow(this)">Delete</button></td>`;

t_data.appendChild(newRow);
})

document.querySelector('form').reset();


function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
