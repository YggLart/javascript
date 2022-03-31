// Tweet Character Counter 
var tweet = prompt("Digite seu Tweet:");
var tweetCounter = tweet.length;
var tweet = tweet.slice(0,140);
alert(tweet + " // Your tweet had " + tweetCounter + "characters.");
alert("You have written " + tweet.length + " characters, you have " + charactersLeft + " characters left.")
tweet.toUpperCase()
tweet.toLowerCase()