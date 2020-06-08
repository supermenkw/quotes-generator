const urlAPI = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let quotesArray = [];

function getQuotes() {
    return $.getJSON(urlAPI, (data) => {
        $.each(data.quotes, (key, value) => {
            quotesArray.push(value);
        });
    }).done(() => {
        return quotesArray;
    })
}

getQuote = () => {
    const randomQuote = getRandomQuote();

    const currentQuote = randomQuote.quote;
    const currentAuthor = randomQuote.author;

    $('#text').text(currentQuote);
    $('#author').text(currentAuthor);
    $('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${currentQuote}" - ${currentAuthor}`)}`)
}

getRandomQuote = () => {
    return quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

$(document).ready(function () {
    getQuotes().then(onLoad => {
        getQuote()
    });

    $('#new-quote').click(getQuote);

})

