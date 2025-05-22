const btnChange = document.getElementById('change');
const paragraph = document.getElementsByTagName('p')[0];
const text = paragraph.textContent;

const btnTheme = document.getElementById('theme');

btnTheme.addEventListener('click', function () {
  const classList = document.body.classList;
  if (classList.contains('dark')) {
    document.body.classList.remove('dark');
    btnTheme.textContent = 'dark';
  } else {
    document.body.classList.add('dark');
    btnTheme.textContent = 'light';
  }
});
btnChange.addEventListener('click', function () {
  const title = document.getElementById('title');

  if (title.classList.contains('yellow')) {
    title.classList.remove('yellow');
  } else {
    title.classList.add('yellow');
  }

  paragraph.textContent =
    paragraph.textContent === text ? 'Hello From Moslem' : text;
});
