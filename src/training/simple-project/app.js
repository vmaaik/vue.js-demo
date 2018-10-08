new Vue({
  el: '#app',
  data: {
    isPanelHidden: true,
    isListHidden: true,
    info: [],
    player1: {
      health: 78
    },

    player2: {
      health: 100
    }


  },
  methods: {
    startGame() {
      this.isPanelHidden = false;
      this.player1.health = 100;
      this.player2.health = 100;
    },
    attack() {
      let player1Attack = this.player1.health -= Math.floor((Math.random() * 8) + 1);
      let player2Attack = this.player2.health -= Math.floor((Math.random() * 18) + 1);

      this.info.push("Player 1 hits Player 2 for " + player1Attack);
      this.info.push("Player 2 hits Player 1 for " + player2Attack);
      this.isListHidden = false;
      return player1Attack, player2Attack;
    }

  },
  computed: {}

})
