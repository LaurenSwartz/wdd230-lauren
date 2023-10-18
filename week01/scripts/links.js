const baseURL = "https://laurenswartz.github.io/wdd230/";
const linksURL = "https://laurenswartz.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch (linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);

}

getLinks();

function displayLinks(weeks){
    const cards = document.querySelector('div.cards');

    weeks.forEach((week) => {
        // create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        

        links.forEach((link)=>{
            let url = document.createElement('url');
            let h3 = document.createElement('h3');

            url.textContent =`${link.url}`;
            h3.textContent =`Title: ${link.title}`;

        })

        
        

        // Build the h2 content out to show the prophets full name - finish the template string
        h2.textContent =`${week}`;

        
        
        

        //Append the section (card) with the created elements
        card.appendChild(h2);

        cards.appendChild(card);

        
    });
}
