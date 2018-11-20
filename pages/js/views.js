new Vue({
  el: '#findBikesForm',
  data: {
    filter1: null,
    pw: null,
    mail: null,
    // MOTEUR
    puissance : null,
    power : null
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
    transformation : null,


    display: false,
    options: null,

  },
  methods: {
    submit: function() {
      this.display = !this.display
    },
    query: function() {
      // Those values are supposed to be queried in your database

      $.get( "/motos", function( data ) {
          console.log(data);
      });

      $.get( "/power", function( data ) {
            this.power = data;
            console.log(data);
        },

      function ( data ) {
           console.log("Could not get the puissances in the database");
        }
      );
      console.log(this.puissance);
    }
  }
});
