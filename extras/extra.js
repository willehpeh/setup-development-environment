const menu = document.querySelector('.dropdown-menu');
const values = ['#fe4503', '#abe493', '#7351eb'];
values.forEach(value => {
  const a = document.createElement('a');
  a.classList.add('dropdown-item');
  a.innerText = value;
  if (value === '#7351eb') {
    const div = document.createElement('div');
    div.classList.add('dropdown-divider');
    menu.append(div);
  }
  menu.append(a);
});
console.log(`%c${new Date().toDateString()}`, 'color:#0000ff;font-weight:bold');
const sq = document.querySelector('.squares');
sq.firstElementChild.style.width = 121 % 122 + 'px';
sq.lastElementChild.style.width += parseInt(sq.firstElementChild.style.width.substr(0, 3)) + (3 % 2) + 'px';
const fi = (3 % 12).toString();
const thi = (12 % 15).toString();
const fii = document.createElement('span');
const thii = document.createElement('span');
fii.classList.add('text');
thii.classList.add('text');
fii.innerText = fi;
thii.innerText = thi;
sq.firstElementChild.append(fii);
sq.lastElementChild.append(thii);
