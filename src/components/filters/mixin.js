export const mixin = {
  data() {
    return {
      fruits: ['mango', 'banana', 'melon'],
      filterText: '',
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((elem) => {
        return elem.match(this.filterText);
      })
    }
  },
  created(){
    console.log('mixin created');
  }
};
