export function Card(item) {

    const cardContainer = document.createElement('div');
    const titleParagraph = document.createElement('p');
    const currencyParagraph = document.createElement('p');


    cardContainer.classList.add('card');
    titleParagraph.classList.add('card_title');
    currencyParagraph.classList.add('card_currency');

   
    titleParagraph.textContent = item["wallet-name"];
    currencyParagraph.textContent = item.currency;

    
    cardContainer.append(titleParagraph, currencyParagraph);

    return cardContainer;
}
