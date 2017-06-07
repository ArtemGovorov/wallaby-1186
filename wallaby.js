module.exports = function () {
  return {
    debug: true,
    files: [
      {pattern: 'src/languages/en-US/*.json', instrument: false},
      {pattern: 'src/test-fixtures/**/*', instrument: false},
      {pattern: "test/polyfills/*.js", instrument: false},
      {pattern: "build/all-protos.d.ts", instrument: false}, // wallaby hack: Make sure protos are loaded so enums are defined properly
      {pattern: "vendor/jquery.min.js", instrument: false}, // make sure jQuery is loaded before angular
      {pattern: "vendor/long.min.js", instrument: false}, // wallaby hack: Make sure long is loaded before bytebuffer.js
      {pattern: "vendor/bytebuffer.min.js", instrument: false}, // wallaby hack: Make sure byte array are loaded before protobuf.js
      {pattern: "vendor/angular.min.js", instrument: false}, // Make sure angular is loaded before angular-translate
      {pattern: "vendor/angular-translate.min.js", instrument: false}, // Make sure angular-translate is loaded before angular-translate-loader-partial
      {pattern: "vendor/*.min.js", instrument: false},
      {pattern: "vendor/ui-bootstrap-tpls.js", instrument: false},
      {pattern: "vendor/angular-ui-tab-scroll.js", instrument: false},
      {pattern: 'vendor/angular-busy.js', instrument: false},
      {pattern: 'vendor/bmc-dpl/src/components/busy-preloader/busy-preloader.js', instrument: false},
      {pattern: 'vendor/bmc-dpl/src/components/timepicker/timepicker.js', instrument: false},
      {pattern: 'vendor/bmc-dpl/src/components/datepicker-new/datepicker.js', instrument: false},
      {pattern: 'vendor/bmc-dpl/src/components/datetimepicker/datetimepicker.js', instrument: false},
      {pattern: 'vendor/bmc-dpl/src/components/counter/counter.js', instrument: false},
      {pattern: 'vendor/jsbn.js', instrument: false},
      {pattern: 'vendor/rsa.js', instrument: false},
      {pattern: 'vendor/jquery-ui-1.11.0.js', instrument: false},
      {pattern: 'vendor/date.js', instrument: false},
      {pattern: 'vendor/x2js.js', instrument: false},
      {pattern: "build/all-protos.js", instrument: false},
      {pattern: "vendor/go.js", instrument: false},
      {pattern: 'vendor/ag-grid.js', instrument: false},
      {pattern: 'vendor/ag-grid-new.noStyle.js', instrument: false},
      {pattern: 'vendor/ag-grid-new.css', instrument: false},
      {pattern: 'vendor/Chart.js', instrument: false},
      {pattern: 'vendor/ngDraggable.js', instrument: false},
      {pattern: 'vendor/angular-chart.js', instrument: false},
      {pattern: 'vendor/angular-vs-repeat.js', instrument: false},
      {pattern: 'vendor/diff_match_patch.js', instrument: false},
      {pattern: 'vendor/FileSaver.js', instrument: false},
      {pattern: 'vendor/jasmine-data_driven_tests/all.js', instrument: false},
      {pattern: "node_modules/angular-mocks/angular-mocks.js", instrument: false},
      {pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', instrument: false},
      {pattern: 'vendor/ag-grid7.noStyle.js', instrument: false},
      {pattern: 'src/styles/**/*.css'},
      'src/debugMode.ts',
      'src/common/applicationServices/*.ts',
      'src/common/applicationServices/**/*.ts',
      "src/*/*.ts",
      "src/*/*/*.ts",
      "src/*/*/*/*.ts",
      "src/*/*/*/*/*.ts",
      "src/*/*/*/*/*/*.ts",
      "src/*/*/*/*/*/*/*.ts",
      "src/*/*/*/*/*/*/*/*.ts",
      "src/**/*.ts",
      "!src/**/*.tests/**/*.ts",
      "!src/**/*.tests2/**/*.ts",
      "!src/**/*.tests3/**/*.ts",
      "!src/**/*.tests4/**/*.ts",
      "!src/**/*.tests5/**/*.ts",
      "!src/**/*.tests6/**/*.ts",
      "!src/**/*.tests7/**/*.ts",
      "!src/common/bootstrapApp.ts",
      "src/**/*.html",
      "src/images/*"
    ],

    tests: [
      "src/**/*.tests/**/*.ts",
      "src/**/*.tests2/**/*.ts",
      "src/**/*.tests3/**/*.ts",
      "src/**/*.tests4/**/*.ts",
      "src/**/*.tests5/**/*.ts",
      "src/**/*.tests6/**/*.ts",
      "src/**/*.tests7/**/*.ts"
    ],

    preprocessors: {
      "src/**/*.html": function (file) {
        return require('wallaby-ng-html2js-preprocessor').transform(file, {
          stripPrefix: 'src/',
          moduleName: 'st-templates'
        })
      }
    },

    env: {
      kind: 'electron'
    }
  }
};