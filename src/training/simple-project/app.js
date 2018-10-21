new Vue({
  el: '#app',
  data: {
    isGameStarted: false,
    logs: [],
    player1: {
      health: 78
    },

    rambo: {
      health: 100
    }
  },
  methods: {
    startGame() {
      this.isGameStarted = true;
      this.player1.health = 100;
      this.rambo.health = 100;
    },
    attack() {
      let monsterAttack = this.genRandomBarValue(false);
      let playerAttack = this.genRandomBarValue(false);
      this.player1.health -= monsterAttack;
      this.rambo.health -= playerAttack;
      this.generateLog(true, playerAttack, "PLAYER HITS MONSTER FOR");
      this.generateLog(false, monsterAttack, "MONSTER HITS PLAYER FOR");
      this.checkResult;
    },
    specialAttack() {
      let monsterAttack = this.genRandomBarValue(false);
      let playerAttack = this.genRandomBarValue(false);
      this.player1.health -= monsterAttack;
      this.rambo.health -= playerAttack;
      this.checkResult;
      this.generateLog(true, playerAttack, "PLAYER HITS MONSTER FOR");
      this.generateLog(false, monsterAttack, "MONSTER HITS PLAYER FOR");
    },
    heal() {
      if (this.player1.health <= 90) {
        this.player1.health += 10;
        this.generateLog(true, 10, "")
      }
      else {
        this.player1.health = 100;
      }
    },
    giveUp() {
      this.isGameStarted = false;
      this.logs = [];
      if (confirm("Click OK to start new game otherwise click CANCEL")) {
        this.startGame();
      } else {
        this.isGameStarted = false;
      }
    }
    ,
    genRandomBarValue(isBig) {
      return (isBig) ? Math.floor((Math.random() * 50) + 1) : Math.floor((Math.random() * 15) + 1);
    }
    ,

    generateLog(isPlayer, damage, text) {
      this.logs.unshift({
        isPlayer: isPlayer,
        text: text + " " + damage
      });
    }
  },

  computed: {
    checkResult() {
      if (this.rambo.health <= 0) {
        this.startGame();
        alert('You win!')
      } else if (this.player1.health <= 0) {
        this.startGame();
        alert('You lose!')
      }
    }
  }
});
