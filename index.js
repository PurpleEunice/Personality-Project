const messageButton = document.getElementById("submit");

const Loyalty = Math.floor(Math.random() * 100);
const Cuteness = Math.floor(Math.random() * 100);
const Beauty = Math.floor(Math.random() * 100);
const Sarcasm = Math.floor(Math.random() * 100);
const Happiness = Math.floor(Math.random() * 100);

const name = document.getElementById("name");

const message = `${name}'s personality is: %0a
*Anger: ${Anger}%  %0a
Care: ${Care}%  %0a
Cuteness: ${Cuteness}%  %0a
Happiness: ${Happiness}% %0a
Love: ${Love}%  %0a
Loyalty: ${Loyalty}% %0a
Sarcasm: ${Sarcasm}% %0a
Wisdom: ${Wisdom}% %0a
*
`;
messageButton.href = `whatsapp://send?text=${message}`;