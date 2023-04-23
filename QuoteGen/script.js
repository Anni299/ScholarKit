const text=document.getElementById("quote");
const author=document.getElementById("author");

const getNewQuote = async () =>
{
    //api for quotes
    var quotes=[
        {
          "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
          "author": "Thomas Edison"
        },
        {
          "text": "You can observe a lot just by watching.",
          "author": "Yogi Berra"
        },
        {
          "text": "A house divided against itself cannot stand.",
          "author": "Abraham Lincoln"
        },
        {
          "text": "Difficulties increase the nearer we get to the goal.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "Fate is in your hands and no one elses",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Be the chief but never the lord.",
          "author": "Lao Tzu"
        },
        {
          "text": "Nothing happens unless first we dream.",
          "author": "Carl Sandburg"
        },
        {
          "text": "Well begun is half done.",
          "author": "Aristotle"
        },
        {
          "text": "Life is a learning experience, only if you learn.",
          "author": "Yogi Berra"
        },
        {
          "text": "Self-complacency is fatal to progress.",
          "author": "Margaret Sangster"
        }
      ]

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*quotes.length);

    //Store the quote present at the randomly generated index
    const quote=quotes[indx].text;

    //Store the author of the respective quote
    const auth=quotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

}
getNewQuote();