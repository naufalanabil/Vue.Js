Vue.component('custom-message', {
    template: '<div>{{ message }}</div>',
    data: function() {
      return {
        message: 'Halo dari komponen Vue!'
      };
    }
  });
  
  new Vue({
    el: '#app'
  });
  