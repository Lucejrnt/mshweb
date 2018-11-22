var view = new Vue({
  el: '#findBikesForm',
  data: {
    /* choix que l'utilisateur va effectuer dans le formulaire */
      filter1: null,
      pw: null,
      mail: null,
      // MOTEUR
      puissance : null,
      power : null,
      couple_max : null,
      rpm_cmax : null,
      fuel_system : null,
      cylindre_nb : null,
      cylindre_cm : null,
      architecture : null,
      // SECURTIE
      equipements : null,
      frein_av : null,
      frein_ar : null,
      pneus : null,
      // MANIABILITE
      masse : null,
      guidon : null,
      roue_av : null,
      roue_ar : null,
      cadre : null,
      // LOOK
      type : null,
      style : null,
      coloris : null,
      // CONFORT
      suspension : null,
      duo : null,
      position : null,
      hauteur : null,
      bulle : null,
      accessoires : null,
      // BRICOLOAGE
      entretiens : null,
      transformations : null,

    /* Valeurs retournées par la base de données afin d'afficher les possibilités dans le formulaire */
    powers: null, //Toutes les puissances disponibles dans la base de données

    display: false,
    options: null
  },
  methods: {
    submit: function() {
      this.display = !this.display
    },
    query: function(event) {
      // Those values are supposed to be queried in your database
      $.get( "/power", function(data) {
          var powers = data.map(function(el){
            return el.power;
          });
          view.powers = powers;
      });
    }
  }
});
