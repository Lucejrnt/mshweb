var view = new Vue({
  el: '#findBikesForm',
  data: {
    /* Valeurs retournées par la base de données afin d'afficher les possibilités dans le formulaire */
      filter1: null,
      pw: null,
      mail: null,
      // MOTEUR
      powers: null, //Toutes les puissances disponibles dans la base de données
      maxtorques: null,
      maxtorquerpms: null,
      strokenbs: null,
      strokecms: null,
      architectures: null,
      // SECURTIE
      equipments : null,
      frontbrakes : null,
      rearbrakes : null,
      tiress : null,
      // MANIABILITE
      weights : null,
      handlebars : null,
      frontwheels : null,
      rearwheels : null,
      frames : null,
      // LOOK
      types : null,
      styles : null,
      coloriss : null,
      // CONFORT
      suspensions : null,
      duos : null,
      positions : null,
      seatheights : null,
      windprotections : null,
      confortaccessoriess : null,
      // BRICOLOAGE
      homemadeservices : null,
      transformationss : null,

      /* Valeurs choisie par l'utilisateur afin de chercher les valeurs correspondantes dans la base de données */
      transformations : null,
      entretiens: null,
      accessoires: null,
      bulle : null,
      duo: null,
      hauteur: null,
      position: null,
      suspension: null,
      coloris: null,
      style: null,
      type: null,
      roue_ar: null,
      roue_av: null,
      cadre: null,
      guidon: null,
      masse: null,
      pneus: null,
      frein_ar: null,
      frein_av: null,
      equipements: null,
      architecture: null,
      cylindre_nb: null,
      cylindre_cm: null,
      rpm_cmax: null,
      couple_max: null,
      power: null,

      // Options utilisées pour le slider
      sliderOptions : {
        value: [ //valeur de départ des sliders
          0,
          100
        ],
        min: 0,
        max: 200, //bornes max et min
        tooltipDir: [
          "bottom",
          "top"
        ],
        style: {
          "marginBottom": "30px"
        },
        bgStyle: {
          "backgroundColor": "#fff",
          "boxShadow": "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"
        },
        sliderStyle: [
          {
            "backgroundColor": "#f05b72"
          },
          {
            "backgroundColor": "#3498db"
          }
        ],
        tooltipStyle: [
          {
            "backgroundColor": "#f05b72",
            "borderColor": "#f05b72"
          },
          {
            "backgroundColor": "#3498db",
            "borderColor": "#3498db"
          }
        ],
        processStyle: {
          "backgroundImage": "-webkit-linear-gradient(left, #f05b72, #3498db)"
        }
      },

      // powersliderOptions : {
      //   value: [ //valeur de départ des sliders
      //     0,
      //     200
      //   ],
      //   data: [
      //     view.powers
      //   ],
      //   tooltipDir: [
      //     "bottom",
      //     "top"
      //   ],
      //   style: {
      //     "marginBottom": "30px"
      //   },
      //   bgStyle: {
      //     "backgroundColor": "#fff",
      //     "boxShadow": "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"
      //   },
      //   sliderStyle: [
      //     {
      //       "backgroundColor": "#f05b72"
      //     },
      //     {
      //       "backgroundColor": "#3498db"
      //     }
      //   ],
      //   tooltipStyle: [
      //     {
      //       "backgroundColor": "#f05b72",
      //       "borderColor": "#f05b72"
      //     },
      //     {
      //       "backgroundColor": "#3498db",
      //       "borderColor": "#3498db"
      //     }
      //   ],
      //   processStyle: {
      //     "backgroundImage": "-webkit-linear-gradient(left, #f05b72, #3498db)"
      //   }
      // },
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
          view.powers = data;
      });

      $.get( "/maxtorque", function(data) {
          view.maxtorques = data;
      });

      $.get( "/maxtorquerpm", function(data) {
          view.maxtorquerpms = data;
      });

      $.get( "/strokenb", function(data) {
        view.strokenbs = data;
      });

      $.get( "/strokecm", function(data) {
          view.strokecms = data;
      });

      $.get( "/architecture", function(data) {
          view.architectures = data;
      });

      $.get( "/equipment", function(data) {
          view.equipments = data;
      });

      $.get( "/frontbrake", function(data) {
          view.frontbrakes = data;
      });

      $.get( "/rearbrake", function(data) {
          view.rearbrakes = data;
      });

      $.get( "/tires", function(data) {
          view.tiress = data;
      });

      $.get( "/weight", function(data) {
          view.weights = data;
      });

      $.get( "/handlebar", function(data) {
          view.handlebars = data;
      });

      $.get( "/frame", function(data) {
          view.frames = data;
      });

      $.get( "/frontwheel", function(data) {
          view.frontwheels = data;
      });

      $.get( "/rearwheel", function(data) {
          view.rearwheels = data;
      });

      $.get( "/type", function(data) {
          view.types = data;
      });

      $.get( "/style", function(data) {
          view.styles = data;
      });

      $.get( "/coloris", function(data) {
          view.coloriss = data;
      });

      $.get( "/suspension", function(data) {
          view.suspensions = data;
      });

      $.get( "/position", function(data) {
          view.positions = data;
      });

      $.get( "/seatheight", function(data) {
          view.seatheights = data;
      });

      $.get( "/duo", function(data) {
          view.duos = data;
      });

      $.get( "/windprotection", function(data) {
          view.windprotections = data;
      });

      $.get( "/confortaccessories", function(data) {
          view.confortaccessoriess = data;
      });

      $.get( "/homemadeservice", function(data) {
          view.homemadeservices = data;
      });

      $.get( "/transformations", function(data) {
          view.transformationss = data;
      });

    }
  },
  components: {
    'vue-slider': window[ 'vue-slider-component' ]
  }
});

$( document ).ready(function() {
  view.query();
});
