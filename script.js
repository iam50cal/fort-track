const apiKey = 'f772cce3-bb2c-480f-8940-6f62a4305d5c';

const apiUrl = 'https://fortnite-api.com/v2/stats/br/v2/';

// usernames
const tio = '45878ea1c3754afb9595b93f1f4ae9b6';
const vic = '0b2e9370d59b45c0995fbc5373f1e993' ;
const john = 'a8147e78845643efb22fb4f4fb516927';
const davy = '04ad8bd9ab884b03b1c2569157ea4fa7';
const julio = 'd6a115c081764f04a1cdd585f82a23d6';
const stem = '9b7b11021efe443a9632acd811b04170';

const players = [
    // tio
    { username: `${tio}`},
    // vic
    { username: `${vic}`},
    // john
    { username: `${john}`},
    // davy
    { username: '04ad8bd9ab884b03b1c2569157ea4fa7'},
     // julio
    { username: 'd6a115c081764f04a1cdd585f82a23d6'},
    // stem
    { username: `${stem}`},
];


function fetchAndUpdatePlayerStats(player) {
    fetch(`${apiUrl}/${player.username}`,{
        headers: {
            'Authorization': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const overallStats = data.data.stats.all.overall; 
    
        // Update the HTML elements with the overall kills and wins
        document.getElementById(`${player.username}Kills`).innerText = "Overall Kills: " + overallStats.kills;
        document.getElementById(`${player.username}Wins`).innerText = "Overall Wins: " + overallStats.wins;
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error(`Error fetching stats for ${player.username}:`, error);
      });
  }

  // Loop through the players array and fetch stats for each player
players.forEach(player => {
    fetchAndUpdatePlayerStats(player);
  });
