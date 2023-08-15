new Vue({
    el: '#app',
    data: {
      newItem: '',
      items: []
    },
    methods: {
      addItem: function() {
        if (this.newItem !== '') {
          this.items.push(this.newItem);
          this.newItem = '';
        }
      }
    }
  });
  