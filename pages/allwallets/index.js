import { Header } from "../../components/Header";
import { reload } from "../../lib/utils";
import { Card } from "../../components/Card"; 
import { ApiCall } from "../../lib/http.request";

(async function initialize() {
    const apiClient = new ApiCall("http://localhost:8080");
    const walletsData = await apiClient.getData('/wallets');
    const addWalletButton = document.querySelector('#add_wallet');
    
    const placeholderData = [
        {
            id: 1,
        },
    ];
    
    const documentBody = document.body;
    const cardContainer = document.querySelector('.wallets_all');

    reload(placeholderData, documentBody, Header);
    reload(walletsData, cardContainer, Card);
    
    addWalletButton.onclick = () => {
        location.assign('/pages/wallet/');
    };
})();