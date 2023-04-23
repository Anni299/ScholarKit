const text=document.getElementById("fact");

const getNewFact = async () =>
{
    var facts=[
        {
          "text": "Did you know that the original name of Back To The Future was going to be 'Spaceman from Pluto'?"
        },
        {
          "text": "Did you know that Michael J. Fox was the first choice, but couldn’t take the role of Marty at first because he was filmimg 'Family Ties' at that time?"
        },
        {
          "text": "Did you know that Eric Stoltz was the original Marty, and even filmed part of the movie?"
        },
        {
          "text": "Did you know that the first time traveler in the movie is not Doc Brown, but his dog Einstein?"
        },
        {
          "text": "Did you know that Huey Lewis contributed multiple songs and a cameo appearance in Back to the Future?"
        },
        {
          "text": "Did you know that by the end of 1985 Back to the Future had made over $380 million, making it the highest-grossing film of the year?"
        },
        {
          "text": "Did you know that “Back to the Future” was up for four Academy Awards and won the award for best sound effects editing?"
        }
      ]

    // Generates a random number between 0 and the length of the facts array
    const indx = Math.floor(Math.random()*facts.length);

    //Store the fact present at the randomly generated index
    const fact=facts[indx].text;

    //function to dynamically display the fact
    text.innerHTML=fact;

}
getNewFact();