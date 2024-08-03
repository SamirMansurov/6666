import { ApiCall } from "../../lib/http.request";

const walletForm = document.forms.namedItem('wallet-form');

const user = JSON.parse(localStorage.getItem('user'));
const userId = user?.id;

const apiClient = new ApiCall("http://localhost:8080");

walletForm.onsubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const wallet = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: userId,
    };

    formData.forEach((value, key) => {
        wallet[key] = value;
    });

    try {
        const response = await apiClient.postData('/wallets', wallet);

        if (response.status === 201) {
            walletForm.reset();
            location.assign('/');
        } else {
            alert('Failed to create wallet. Please try again.');
        }
    } catch (error) {
        console.error('Error creating wallet:', error);
        alert('An error occurred while creating the wallet. Please try again later.');
    }
};
