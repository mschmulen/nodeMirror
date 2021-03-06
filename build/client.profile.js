var profile = (function(){
    return {
        basePath: "../src",
        releaseDir: "../release",
        releaseName: "client",
        action: "release",
        layerOptimize: "closure",
        optimize: "closure",
        cssOptimize: "comments",
        stripConsole: "warn",
        
        packages:[{
            name: "dojo",
            location: "dojo"
        },{
            name: "dijit",
            location: "dijit" 
        },{
            name: "dojox",
            location: "dojox" 
        },{
            name: "dgrid",
            location: "dgrid" 
        },{
            name: "put-selector",
            location: "put-selector" 
        },{
            name: "xstyle",
            location: "xstyle" 
        },{
            name: "main",
            location: "main"
        },{
            name: "client",
            location: "client"
        },{
            name: "sol",
            location: "sol"
        },{
            name: "jshint",
            location: "jshint"
        },{
            name: "peg",
            location: "peg"
        },{
          name: "codemirror",
          location: "codemirror"
        },{
          name: "modules"
        , location: "modules"
        }, {
          name: "style"
        , location: "style"
        }],
        staticHasFeatures: {
          "dom": 1
          , "host-browser": 1
          , "dojo-firebug": 0
          , "server-modules": false
        },
        defaultConfig: {
          hasCache:{
            "dom": 1
            , "host-browser": 1
            , "dojo-firebug": 0
            , "server-modules": false
          },
          async: 1,
          deps: [ "client/client" ]
        },
        layers: {
            "dojo/dojo": {
                include: [ 
                  "dojo/dojo"
                , "client/client"
                , "dgrid/Grid"
                , "xstyle/load-css"
                , "dojo/selector/lite"
                , "main/serverOnly"
                , "sol/string"
                , "main/codemirror/fake"
                , "modules/Text"
                , "modules/Directory"
                , "modules/Binary"
                , "modules/Less"
                , "modules/Html"
                , "modules/binary/HexGrid"
                , "modules/directory/Grid"
                , "modules/directory/NewDlg"
                , "modules/Peg"
                , "modules/peg.js/Parser"
                 ,"sol/wgt/CodeMirror"
                 ,"codemirror/theme/all"
                 ,"dijit/form/Select"
                 ,"codemirror/mode/allModes"
                 ,"codemirror/addon/dialog/dialog"
                 ,"codemirror/addon/search/search"
                 ,"codemirror/addon/search/searchcursor"
                 ,"codemirror/addon/edit/matchbrackets"
                 ,"modules/html/Tester"
                 ,"modules/less/Tester"
                 ,"sol/wgt/Iframe"
                 ,"modules/base/WidgetMixin"
                , "dojo/io/iframe"
                , "sol/dlg/YesNoCancel"
                ]
              , boot: true
              , customBase: true
            }
        }
    };
})();
