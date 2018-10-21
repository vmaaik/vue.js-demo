new Vue({
  el: '#app',
  data: {
    isGameStarted: false,
    logs: [],
    player1: {
      health: 78
    },

    monster: {
      health: 100
    }
  },
  methods: {
    startGame() {
      this.isGameStarted = true;
      this.player1.health = 100;
      this.monster.health = 100;
    },
    attack() {
      let monsterAttack = this.genRandomBarValue(false);
      let playerAttack = this.genRandomBarValue(false);
      this.player1.health -= monsterAttack;
      this.monster.health -= playerAttack;
      this.generateLog(true, playerAttack, "MONSTER - ");
      this.generateLog(false, monsterAttack, "PLAYER - ");
      this.checkResult;
    },
    specialAttack() {
      let monsterAttack = this.genRandomBarValue(false);
      let playerAttack = this.genRandomBarValue(false);
      this.player1.health -= monsterAttack;
      this.monster.health -= playerAttack;
      this.generateLog(true, playerAttack, "SPECIAL ATTACK! MONSTER - ");
      this.generateLog(false, monsterAttack, "SPECIAL ATTACK! PLAYER - ");
      this.checkResult;

    },
    heal() {
      if (this.player1.health <= 99) {
        if (this.player1.health <= 90) {
          this.player1.health += 10;
          this.player1.health -= this.genRandomBarValue(false);
          this.generateLog(true, 10, "RECOVERY MODE! PLAYER + ")
        }
        else {
          let recovery = 100 - this.player1.health;
          this.generateLog(true, recovery, "RECOVERY MODE! PLAYER + ");
          this.player1.health -= this.genRandomBarValue(false);
          this.player1.health = 100;
        }
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
      if (this.monster.health <= 0) {
        this.startGame();
        alert('You win!')
      } else if (this.player1.health <= 0) {
        this.startGame();
        alert('You lose!')
      }
    }
  }
});
