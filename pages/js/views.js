var view = new Vue({
  el: '#mainVue',
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
      userChoice : {
        power : null, //Toutes les puissances disponibles dans la base de données
        maxtorque : null,
        maxtorquerpm : null,
        strokenb : null,
        strokecm : null,
        architecture : null,
        // SECURTIE
        equipment : null,
        frontbrake : null,
        rearbrake : null,
        tires : null,
        // MANIABILITE
        weight : null,
        handlebar : null,
        frontwheel : null,
        rearwheel : null,
        frame : null,
        // LOOK
        type : null,
        style : null,
        coloris : null,
        // CONFORT
        suspension : null,
        duo : null,
        position : null,
        seatheight : null,
        windprotection : null,
        confortaccessories : null,
        // BRICOLOAGE
        homemadeservice : null,
        transformations : null,
      },

      results : [],
      // Options utilisées pour le slider
      sliderOptions : {
        value: [
          1,
          200
        ],
        width: "100%",
        height: 8,
        dotSize: 20,
        min: 0,
        max: 200,
        disabled: false,
        show: true,
        tooltip: "always",
        tooltipDir: [
          "bottom",
          "top"
        ],
        piecewise: false,
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
        },
        display : false
      },

    display: false,
    options: null
  },
  methods: {
    submit: function() {

      var filteredUserChoice = {};
      for (var property in view.userChoice) {
        if (view.userChoice[property] != null) {
            filteredUserChoice[property] = view.userChoice[property];
        }
      }

      $.get("/motos", filteredUserChoice, function(data) {
          view.results = data;
      });
    },
    query: function(event) {
      // Those values are supposed to be queried in your database


      $.get( "/power", function(data) {
        view.sliderOptions.min = parseInt(data[0]);
        view.sliderOptions.max = parseInt(data[data.length-1]);
        view.sliderOptions.value = [view.sliderOptions.min +1, view.sliderOptions.max - 1];
        view.powers = data;
      });

      // $.get( "/name", function(data) {
      //   view.randommoto = data[Math.floor(Math.random()*data.length)];
      //   view.names = data;
      // });

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
