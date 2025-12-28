        // Letter scores (Scrabble-like)
        const letterScores = {
          'أ': 1, 'ا': 1, 'ب': 1, 'ت': 2, 'ث': 7, 'ج': 4, 'ح': 4, 'خ': 3,
          'د': 3, 'ذ': 5, 'ر': 2, 'ز': 4, 'س': 3, 'ش': 5, 'ص': 5, 'ض': 7,
          'ط': 5, 'ظ': 7, 'ع': 3, 'غ': 6, 'ف': 4, 'ق': 5, 'ك': 3, 'ل': 2,
          'م': 2, 'ن': 2,'ه':6 ,'و':4 ,'ي':3,'ء': 6,'ة':6
      };

      // Array to hold players
      let players = [];

      // Function to calculate word score
      function calculateWordScore(word) {
          let score = 0;
          for (let letter of word.toUpperCase()) {
              if (letterScores[letter]) {
                  score += letterScores[letter];
              }
          }
          return score;
      }

      // Function to update leaderboard
      function updateLeaderboard() {
          // Sort players by score descending
          players.sort((a, b) => b.score - a.score);
          
          const tbody = document.getElementById('leaderboardBody');
          tbody.innerHTML = '';
          
          players.forEach(player => {
              const row = document.createElement('tr');
              row.innerHTML = `<td>${player.name}</td><td>${player.score}</td>`;
              tbody.appendChild(row);
          });
      }

      // Add player button event
      document.getElementById('addPlayerBtn').addEventListener('click', () => {
          const playerName = document.getElementById('playerName').value.trim();
          if (playerName) {
              // Create player object
              const player = { name: playerName, score: 0, words: [] };
              players.push(player);
              
              // Create player card
              const card = document.createElement('div');
              card.className = 'player-card';
              card.innerHTML = `
                  <h3>${playerName}</h3>
                  <p>الرصيد: <span id="score-${playerName}">0</span></p>
                  <input type="text" class="word-input" id="word-${playerName}" placeholder="أدخل كلمة">
                  <button class = "add-word" id="addWordBtn-${playerName}">إضافة كلمة</button>
                  <ul id="words-${playerName}" class="words-list"></ul>
              `;
              document.getElementById('playersContainer').appendChild(card);
              
              // Add word button event
              document.getElementById(`addWordBtn-${playerName}`).addEventListener('click', () => {
                  const wordInput = document.getElementById(`word-${playerName}`);
                  const word = wordInput.value.trim();
                  if (word) {
                      const wordScore = calculateWordScore(word);
                      player.score += wordScore;
                      player.words.push(word); // Add word to player's words array
                      document.getElementById(`score-${playerName}`).textContent = player.score;
                      
                      // Append word to the list
                      const wordsList = document.getElementById(`words-${playerName}`);
                      const li = document.createElement('li');
                      li.textContent = word;
                      wordsList.appendChild(li);
                      
                      wordInput.value = '';
                      updateLeaderboard();
                  }
              });
              
              // Clear input
              document.getElementById('playerName').value = '';
              updateLeaderboard();
          }
      });