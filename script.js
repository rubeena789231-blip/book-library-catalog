function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let availability = document.getElementById("availability").value;

    if (title === "" || author === "" || genre === "") {
        alert("Please fill in all details.");
        return;
    }

    let table = document.getElementById("bookList");

    let row = table.insertRow();

    row.insertCell(0).innerText = title;
    row.insertCell(1).innerText = author;
    row.insertCell(2).innerText = genre;
    row.insertCell(3).innerText = availability;

    let actionCell = row.insertCell(4);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.onclick = function () {
        row.remove();
    };

    actionCell.appendChild(deleteButton);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";
}
