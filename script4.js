let books = ["Book A", "Book B", "Book C", "Book D", "Book E"];

let bookList = document.getElementById("bookList");

for (let i = 0; i < books.length; i++) {
  let li = document.createElement("li");
  li.textContent = books[i];
  bookList.appendChild(li);
}