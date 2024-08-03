import { ApiCall } from "../../lib/http.request";
import { reload } from "../../lib/utils";


const transactionForm = document.forms.namedItem('transaction-form');
const totalAmountElement = document.querySelector('#total');
const walletSelectElement = document.querySelector('#wallet');

const apiClient = new ApiCall("http://localhost:8080");

const user = JSON.parse(localStorage.getItem('user'));
const userId = user?.id;

const wallets = await apiClient.getData('/wallets');

function createWalletOption(wallet) {
    const option = document.createElement('option');
    option.textContent = wallet.wallet;  
    return option;
}

reload(wallets, walletSelectElement, createWalletOption);

transactionForm.onsubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const transaction = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        walletId: userId,
    };

    formData.forEach((value, key) => {
        transaction[key] = value;
    });

    try {
        const walletName = transaction.wallet;
        const walletData = await apiClient.getData(`/wallets?wallet-name=${walletName}`);

        if (walletData.length === 0) {
            alert('Wallet not found!');
            return;
        }

        const [walletFromDB] = walletData;

        if (walletFromDB.total < totalAmountElement.value) {
            alert('Insufficient funds!');
            return;
        }

        await apiClient.postData('/transactions', transaction);

        transactionForm.reset();
        location.assign('/');

    } catch (error) {
        console.error('Error processing transaction:', error);
        alert('An error occurred. Please try again later.');
    }
};
