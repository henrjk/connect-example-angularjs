SystemJS.config({

  transpiler: "plugin-babel",

  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  globalEvaluationScope: false,

  map: {
    "angular-animate": "github:angular/bower-angular-animate@1.4.8",
    "angular-cookies": "github:angular/bower-angular-cookies@1.4.8",
    "angular-resource": "github:angular/bower-angular-resource@1.4.8",
    "angular-route": "github:angular/bower-angular-route@1.4.8",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.8",
    "angular-touch": "github:angular/bower-angular-touch@1.4.8",
    "connect-js": "github:anvilresearch/connect-js@0.1.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },

  packages: {
    "github:angular/bower-angular-animate@1.4.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.4.8"
      }
    },
    "github:angular/bower-angular-cookies@1.4.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.4.8"
      }
    },
    "github:angular/bower-angular-resource@1.4.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.4.8"
      }
    },
    "github:angular/bower-angular-route@1.4.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.4.8"
      }
    },
    "github:angular/bower-angular-sanitize@1.4.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.4.8"
      }
    },
    "github:angular/bower-angular-touch@1.4.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.4.8"
      }
    },
    "github:anvilresearch/connect-js@0.1.1": {
      "map": {
        "angular": "github:angular/bower-angular@1.4.8",
        "base64-js": "npm:base64-js@0.0.8",
        "bows": "npm:bows@1.4.8",
        "q": "npm:q@1.4.1",
        "text-encoder-lite": "npm:text-encoder-lite@1.0.0",
        "tiny-emitter": "npm:tiny-emitter@1.0.2",
        "vibornoff/webcrypto-shim": "github:vibornoff/webcrypto-shim@master",
        "webcrypto-shim": "github:vibornoff/webcrypto-shim@master"
      }
    },
    "npm:bows@1.4.8": {
      "map": {
        "andlog": "npm:andlog@1.0.0"
      }
    }
  }
});