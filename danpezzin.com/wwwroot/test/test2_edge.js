/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Symbol_2',
                type: 'rect',
                rect: ['236', '53','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_1',
                type: 'rect',
                rect: ['416', '168','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Symbol_1',
                symbolName: 'Symbol_1'
            },
            {
                id: 'Symbol_2',
                symbolName: 'Symbol_2'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Symbol_2}": [
                ["style", "left", '236px'],
                ["style", "top", '53px']
            ],
            "${_Symbol_1}": [
                ["style", "left", '416px'],
                ["style", "top", '168px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_Symbol_2}", "top", '44px', { fromValue: '53px'}], position: 0, duration: 750 },
                { id: "eid5", tween: [ "style", "${_Symbol_1}", "left", '387px', { fromValue: '416px'}], position: 0, duration: 750 },
                { id: "eid6", tween: [ "style", "${_Symbol_1}", "top", '117px', { fromValue: '168px'}], position: 0, duration: 750 },
                { id: "eid9", tween: [ "style", "${_Symbol_2}", "left", '303px', { fromValue: '236px'}], position: 0, duration: 750 }            ]
        }
    }
},
"Symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'spotify',
                    type: 'image',
                    rect: ['0px', '0px', '63px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/spotify.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_spotify}": [
                ["style", "height", '63px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '63px']
            ],
            "${symbolSelector}": [
                ["style", "height", '63px'],
                ["style", "width", '63px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Symbol_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'LinkedIn-Button',
                    type: 'image',
                    rect: ['0px', '0px', '78px', '83px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/LinkedIn-Button.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '78px']
            ],
            "${_LinkedIn-Button}": [
                ["style", "height", '83px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1331660048");
