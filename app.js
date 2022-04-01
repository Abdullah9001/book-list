// Dom selection
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  if (title.value == '' && author.value == '' && year.value == '') {
    alert('Please enter your list');
  } else {
    const newRow = document.createElement('tr');

    // Creating new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new author
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating new year
    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);


    bookList.appendChild(newRow);
  }
})