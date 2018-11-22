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
      architecturedb : null,
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
    maxtorques: null,
    paxtorquerpms: null,
    stroquenbs: null,
    stroquecms: null,
    architectures: null,

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
          var puissance = data.map(function(el){
            return el.power;
          });
          view.puissance = powers;
      });

      $.get( "/maxtorque", function(data) {
          var couple_max = data.map(function(el){
            return el.maxtorque;
          });
          view.couple_max = maxtorques;
      });

      $.get( "/maxtorquerpm", function(data) {
          var rpm_cmax = data.map(function(el){
            return el.maxtorquerpm;
          });
          view.rpm_cmax = maxtorquerpms;
      });

      $.get( "/strokenb", function(data) {
          var cylindre_nb = data.map(function(el){
            return el.stroquenb;
          });
          view.cylindre_nb = stroquenbs;
      });

      $.get( "/strokecm", function(data) {
          var cylindre_cm = data.map(function(el){
            return el.stroquecm;
          });
          view.cylindre_cm = stroquecms;
      });

      $.get( "/architecture", function(data) {
          var architecturedb = data.map(function(el){
            return el.architecture;
          });
          view.architecturedb = architectures;
      });

    }
  }
});

$( document ).ready(function() {
  view.query();
});
