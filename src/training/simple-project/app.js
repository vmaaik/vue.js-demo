new Vue({
  el: '#app',
  data: {
    isGameStarted: false,
    info: [],
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
      this.player1.health -= this.calculateDamage(false);
      this.rambo.health -= this.calculateDamage(false);
      this.checkResult;
    },
    specialAttack() {
      this.player1.health -= this.calculateDamage(false);
      this.rambo.health -= this.calculateDamage(true);
      this.checkResult;
    },
    heal() {
    },
    giveUp() {
      if (confirm("Click OK to start new game otherwise click CANCEL")) {
        this.startGame();
      } else {
        this.isGameStarted = false;
      }
    },
    calculateDamage(isSpecialAttack) {
      return (isSpecialAttack) ? Math.floor((Math.random() * 50) + 1) : Math.floor((Math.random() * 15) + 1);
    },
  },

  computed: {
    checkResult() {
      if (this.rambo.health < 0) {
        this.isGameStarted = false;
        alert('You won!')
      } else if (this.player1.health < 0) {
        this.isGameStarted = false;
        alert('You lose!')
      }
    }
  }
});
