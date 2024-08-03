import { Header } from "../../components/Header";
import { reload } from "../../lib/utils";
import { Transaction } from "../../components/Tranjaction";
import { ApiCall } from "../../lib/http.request";

const apiClient = new ApiCall("http://localhost:8080");
const addTransactionButton = document.querySelector('#add_transaction');
const transactionsData = await apiClient.getData('/transactions');

const sampleData = [
    {
        id: 1,
    },
];
const documentBody = document.body;
const tableBody = document.querySelector('.place');

reload(sampleData, documentBody, Header);
reload(transactionsData, tableBody, Transaction);
addTransactionButton.onclick = () => {
    location.assign('/pages/transaction/');
};