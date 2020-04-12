const dice = document.querySelectorAll('.die');

dice.forEach(die => {
  const instance = new Vue({
    el: die,
    data: {
      number: 1,
    },
    methods: {
      roll() {
        const newNum = getRandomInt(1,6);
        this.number = newNum;
      }
    }
  });
});


/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
