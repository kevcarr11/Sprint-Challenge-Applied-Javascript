// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headerContent = document.createElement('div');
    const date = document.createElement('span');
    const hTitle = document.createElement('h1');
    const hTemp = document.createElement('span');

    headerContent.classList.add('header');
    date.classList.add('date');
    hTemp.classList.add('temp');

    date.textContent = 'March 28, 2019';
    hTitle.textContent = 'Lambda Times';
    hTemp.textContent = '98 deg';

    headerContent.appendChild(date);
    headerContent.appendChild(hTitle);
    headerContent.appendChild(hTemp);

    return headerContent;
}
document.querySelector('.header-container').appendChild(Header())
