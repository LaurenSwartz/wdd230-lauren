const url = 'https://laurenswartz.github.io/wdd230/chamber/data/members.json';

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('article.mani-grid');

    prophets.forEach((prophet) => {
        // create elements to add to the div.cards element
        let card = document.createElement('section');
        let portrait = document.createElement('img');
        let h2 = document.createElement('h3');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let url =document.createElement('url');
        

        // Build the h2 content out to show the prophets full name - finish the template string
        h2.textContent =`${prophet.name}`;
        h3.textContent =`Address: ${prophet.address}`;
        p.textContent =`Phone Number: ${prophet.phonenumber}`;
        url.textContent = `${prophet.websiteurl}`;

        //Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src',prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}Joseph Smith`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width','340');
        portrait.setAttribute('height','440');

        //Append the section (card) with the created elements
        card.appendChild(portrait);
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(url);
        
        
        cards.appendChild(card);

        
    });

    
}