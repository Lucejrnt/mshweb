new Vue({
  el: '#findBikesForm',
  data: {
    filter1: null,
    pw: null,
    mail: null,
    // MOTEUR
    puissance : null,
    couple_max : null,
    rpm_cmax : null,
    allumage : null,
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
    puissances : null
  },
  methods: {
    submit: function() {
      this.display = !this.display
    },
    query: function() {
      // Those values are supposed to be queried in your database
      this.puissances = {
        puissance1 : { id : 1, value : '100cv'},
        puissance2 : { id : 2, value : '200cv'},
        puissance3 : { id : 3, value : '300cv'}
      }

      $.get( "/motos", function( data ) {
          console.log(data);
      });

      $.get( "/puissances",
        function( data ) {
            this.puissances = data;
        },
        function ( data ) {
           console.log("Could not get the puissances in the database");
        }
      );
      console.log(this.puissance);
    }
  }
});
