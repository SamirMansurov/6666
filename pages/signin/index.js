import { ApiCall } from "../../lib/http.request";

const signInForm = document.forms.namedItem('sign-form');
const passwordInput = document.querySelector('#password');


const apiService = new ApiCall("http://localhost:8080");


signInForm.onsubmit = async (event) => {
    event.preventDefault();


    const formData = new FormData(event.target);
    

    const userCredentials = {};
    formData.forEach((value, key) => userCredentials[key] = value);

    try {

        const responseData = await apiService.getData(`/users?email=${userCredentials.email}`);

        if (responseData.length === 0) {
            alert('User not registered!');
            return;
        }

        const [userFromDatabase] = responseData;

        if (userFromDatabase.password !== passwordInput.value) {
            alert('Incorrect password!');
            return;
        }


        delete userFromDatabase.password;


        localStorage.setItem('user', JSON.stringify(userFromDatabase));
        signInForm.reset();

        location.assign('/');

    } catch (error) {
        console.error('Error during login process:', error);
        alert('An error occurred. Please try again.');
    }
};
