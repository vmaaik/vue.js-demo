new Vue({
  el: '#app',
  data: {
    isPanelHidden: true,
    player1: {
      health: 78
    },

    player2: {
      health: 100
    }


  },
  methods: {
    startGame() {
      if (this.isPanelHidden) {
        this.isPanelHidden = false;
      }
    }
  }
})
