document.getElementById('estimateButton').addEventListener('click', function() {
    window.location.href = '#contact';
  });
const carTips = ["Check your tire pressure monthly to save fuel. No one wants to donate extra money to Big Oil!", "Your check engine light is like a needy ex-ignoring it won't make it go away.", "Regular maintenance keeps your car from taking spontaneous napsin the middle of traffic. Unlike you, it doesn't need a 15-minute power snooze to function.", "Keep an emergency kit in your car for those moments when 'I can make it' turns into 'I shouldn't have done that.'", "Change your oil regularly. Your car doesn't run on positive vibes and good intentions, no matter what that mechanic on TikTok says.", "Battery corrosion is like glitter-it spreads, it's annoying, and it doesn't belong there. Clean it off!"];
function generateTip() {
  const randomIndex = Math.floor(Math.random() * carTips.length);
  document.getElementById("dailyTip").innerText = carTips[randomIndex];
}
window.onload = generateTip;
document.getElementById("newTipBtn").addEventListener("click", generateTip);