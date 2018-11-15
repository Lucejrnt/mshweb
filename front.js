var field = new Vue({
  el: '#defaultVue',
  data: {
    result : {value: "la réponse de Luce Journet"}
  },
  methods: {
    getMotos: function(event) {
      $.get('/motos').then(
        function(data) {
          console.log("J'ai réussi");
          console.log(data);
          this.result = data;
        },
        function(data) {
          console.log("Raté ça ne fonctionne pas");
        }
    );
    }
  }
})
