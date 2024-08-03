export function Header(item) {

    const userInfo = JSON.parse(localStorage.getItem('user'));


    const headerElement = document.createElement('header');
    const headerContainer = document.createElement('div');
    const navLeft = document.createElement('nav');
    const navRight = document.createElement('nav');
    const homeLink = document.createElement('a');
    const walletsLink = document.createElement('a');
    const transactionsLink = document.createElement('a');
    const emailLink = document.createElement('a');
    const profileImageContainer = document.createElement('a');
    const logoutIcon = document.createElement('img');


    headerElement.classList.add('header');
    headerContainer.classList.add('header_container');
    navLeft.classList.add('nav_left');
    navRight.classList.add('nav_right');
    homeLink.classList.add('nav_link');
    walletsLink.classList.add('nav_link');
    transactionsLink.classList.add('nav_link');
    emailLink.classList.add('nav_link');
    profileImageContainer.classList.add('profile_image_container');
    logoutIcon.src = '/exit.svg';


    homeLink.textContent = 'Главная';
    walletsLink.textContent = 'Мои кошельки';
    transactionsLink.textContent = 'Мои транзакции';
    emailLink.textContent = userInfo.email;


    headerElement.append(headerContainer);
    headerContainer.append(navLeft, navRight);
    navLeft.append(homeLink, walletsLink, transactionsLink);
    navRight.append(emailLink, profileImageContainer);
    profileImageContainer.append(logoutIcon);


    profileImageContainer.onclick = () => {
        location.assign('/pages/signin/');
    };
    homeLink.onclick = () => {
        location.assign('/');
    };
    walletsLink.onclick = () => {
        location.assign('/pages/allwallets/');
    };
    transactionsLink.onclick = () => {
        location.assign('/pages/alltransactions/');
    };

    return headerElement;
}
