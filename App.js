//  const firstName = document.querySelector("#fn");
//  const lastName = document.querySelector("#ln");
//  const emailId = document.querySelector("#el");
//  const mobileNumber = document.querySelector("#mn");
//  const address = document.querySelector("#add");
// const age = document.querySelector("#age");
// const bdy = document.querySelector("#bdy");
//  console.log(firstName);
//  console.log(lastName);
//  console.log(emailId);
//   console.log(mobileNumber);
//  console.log(address);

// // App.js

// document.addEventListener('DOMContentLoaded', function () {
//     // Assuming your table has an id 'dataTable'
//     var dataTable = document.getElementById('dataTable');
    
//     // Function to display form data in the table
//     function displayFormData() {
//         var newRow = dataTable.insertRow(dataTable.rows.length);
        
//         // Extract form values
//         var firstName = document.getElementById('fn').value;
//         var lastName = document.getElementById('ln').value;
//         var emailId = document.getElementById('el').value;
//         var mobileNumber = document.getElementById('mn').value;
//         var address = document.getElementById('add').value;
//         var age = document.getElementById('age').value;
//         var bdy = document.getElementById('bdy').value;

//         // Create cells and append data
//         var cell1 = newRow.insertCell(0);
//         var cell2 = newRow.insertCell(1);
//         var cell3 = newRow.insertCell(2);
//         var cell4 = newRow.insertCell(3);
//         var cell5 = newRow.insertCell(4);
//         var cell6 = newRow.insertCell(5);
//         var cell7 = newRow.insertCell(6)
//         cell1.appendChild(document.createTextNode(firstName));
//         cell2.appendChild(document.createTextNode(lastName));
//         cell3.appendChild(document.createTextNode(emailId));
//         cell4.appendChild(document.createTextNode(mobileNumber));
//         cell5.appendChild(document.createTextNode(address));
//         cell6.appendChild(document.createTextNode(age));
//         cell7.appendChild(document.createTextNode(bdy));
//     }

//     // Attach click event to the "Save" button
//     var saveButton = document.querySelector('.btn2 button');
//     saveButton.addEventListener('click', displayFormData);
// });
document.addEventListener('DOMContentLoaded', function () {
    // Assuming your table has an id 'dataTable'
    var dataTable = document.getElementById('dataTable');

    // Function to display form data in the table
    function displayFormData() {
        var newRow = dataTable.insertRow(dataTable.rows.length);

        // Extract form values
        var firstName = document.getElementById('fn').value;
        var lastName = document.getElementById('ln').value;
        var emailId = document.getElementById('el').value;
        var mobileNumber = document.getElementById('mn').value;
        var address = document.getElementById('add').value;
        var age = document.getElementById('age').value;
        var bdy = document.getElementById('bdy').value;

        // Extract checkbox values (Hobbies)
        var hobbies = [];
        var checkboxes = document.querySelectorAll('.input-field input[type="checkbox"]:checked');
        checkboxes.forEach(function (checkbox) {
            hobbies.push(checkbox.value);
        });

        // Extract dropdown value (City)
        var city = document.getElementById('city').value;

        // Create cells and append data
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        var cell9 = newRow.insertCell(8);

        cell1.appendChild(document.createTextNode(firstName));
        cell2.appendChild(document.createTextNode(lastName));
        cell3.appendChild(document.createTextNode(emailId));
        cell4.appendChild(document.createTextNode(mobileNumber));
        cell5.appendChild(document.createTextNode(address));
        cell6.appendChild(document.createTextNode(age));
        cell7.appendChild(document.createTextNode(bdy));
        cell8.appendChild(document.createTextNode(city));
        cell9.appendChild(document.createTextNode(hobbies.join(', ')));
    }

    // Attach click event to the "Save" button
    var saveButton = document.querySelector('.btn2 button');
    saveButton.addEventListener('click', displayFormData);
});