new Vue({
  el: '#app',
  data: {
    isShown: true,
    barStyle: {
      backgroundColor: 'green',
      margin: 0,
      color: 'white'
    },
    pWidth: 0,
    mWidth: 0,
    mAttack: 0,
    pAttack: 0,
    heals: 0,
    array: []
  },
  methods: {
    startButton: function() {
      this.startGame();
      this.isShown = !this.isShown;
    },
    startGame: function() {
      this.pWidth = 100;
      this.mWidth = 100;
      this.array = [];
    },
    attack: function() {
      var final;
      this.pAttack = Math.floor(Math.random() * 10) + 1;
      this.mAttack = Math.floor(Math.random() * 10) + 1;
      this.mWidth -= this.pAttack;
      this.pWidth -= this.mAttack;
      this.array.push('PLAYER HITS MONSTER FOR ' + this.pAttack);
      this.array.push('MONSTER HITS PLAYER FOR ' + this.mAttack);
      if(this.pWidth <= 0){
        final = confirm("You loose, start over?");
      }else if(this.mWidth <= 0) {
        final = confirm("You won, start over?");
      }
      if(final){
        this.startGame();
      } else if (final === false){
        this.isShown = true;
      }
    },
    specialAttack: function() {
      var final;
      this.pAttack = Math.floor(Math.random() * 16) + 5;
      this.mAttack = Math.floor(Math.random() * 16) + 5;
      this.mWidth -= this.pAttack;
      this.pWidth -= this.mAttack;
      this.array.push('PLAYER HITS MONSTER FOR ' + this.pAttack);
      this.array.push('MONSTER HITS PLAYER FOR ' + this.mAttack);
      if(this.pWidth <= 0){
        final = confirm("You loose, start over?");  
      }else if(this.mWidth <= 0) {
        final = confirm("You won, start over?");  
      }
      if(final){
        this.startGame();
      } else if (final === false){
        this.isShown = true;
      }
    },
    heal: function() {
      this.mAttack = Math.floor(Math.random() * 15) + 1;
      if(this.pWidth <= 100) {
        if(100 - this.pWidth < 10){
          this.heals = 100 - this.pWidth;
          this.pWidth += this.heals;
        } else {
          this.heals = 10;
          this.pWidth += this.heals;
        }
      }
      this.pWidth -= this.mAttack;
      this.array.push('PLAYER HEALS FOR ' + this.heals);
      this.array.push('MONSTER HITS PLAYER FOR ' + this.mAttack);
    },
    checkClass: function(val) {
      return val % 2 === 0;
    }
  }
});