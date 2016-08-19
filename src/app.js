
window.onload = function() {

var searchResults = div().style(style.vertical);
function performSearch(elified) {
    backend.search(elified.val.value, addSearchResults);
    searchResults.clear();
}

function addSearchResults(artistNames) {
    searchResults.clear();
    artistNames.forEach(
        function(name) {
            searchResults(div(name).style(style.base, style.listItem));
        }
    );
}

var backend = backends[backends.selected](function() {}, function() {});
var ratio = window.devicePixelRatio || 1;
var canv = canvas().width(window.innerWidth * ratio).height(window.innerHeight * ratio);
var ctx = canv.val.getContext('2d');
var inputvar = input('Hello World')
                .style(style.input, {width: '100%'})
                .placeholder('Artist')
                .onchange(performSearch);
body().style(style.body)(
    canv.style(style.background),
    div().style(style.center)(
        div(
            inputvar,
            div(searchResults).style({width: '100%'})
        ).style({width: '15rem'})
    )
);

};

nutmeg().global();
var backends = {selected: 'spotify'};

var foreground = '#ddd';
var background = '#333';

var style = mergeStyle({
    color: {
        color: foreground,
        backgroundColor: background
    },
    transition: {
        transition: 'all 0.3s linear'
    },
    button: {
        depends: ['input', 'clickable']
    },
    padded: {
        padding: '1rem'
    },
    margined: {
        margin: '1rem'
    },
    bordered: {
        border: '1px solid ' + foreground
    },
    clickable: {
        cursor: 'pointer'
    },
    input: {
        depends: ['base', 'padded', 'inverted'],
        focus: {
            outline: 'none'
        }
    },
    base: {
        depends: ['color'],
        border: '0',
        margin: '0',
        padding: '0',
        fontFamily: 'Raleway',
        fontSize: '1rem',
        fontWeight: '300',
        lineHeight: '1.15',
        display: 'block',
        transition: 'all 0.2s linear'
    },
    inverted: {
        color: background,
        backgroundColor: foreground
    },
    body: {
        depends: ['base', 'fill', 'abs'],
    },
    fill: {
        width: '100%',
        height: '100%'
    },
    fillScreen: {
        depends: ['fill', 'abs']
    },
    background: {
        depends: ['fillScreen'],
        zIndex: '-1'
    },
    abs: {
        position: 'absolute'
    },
    flex: {
        display: 'flex'
    },
    vertical: {
        flexDirection: 'column'
    },
    centerHor: {
        depends: ['flex'],
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center'
    },
    center: {
        depends: ['fill', 'centerHor'],
        alignItems: 'center'
    },
    hline: {
        depends: ['lower'],
        borderTop: '1px solid'
    },
    lower: {
        marginTop: '0.5rem'
    },
    disperse: {
        depends: ['flex'],
        justifyContent: 'space-around'
    },
    invertOnHover: {
        hover: {
            depends: ['inverted']
        }
    },
    normalOnHover: {
        hover: {
            depends: ['color']
        }
    },
    fillHor: {
        width: '100%'
    },
    listItem: {
        depends: ['inverted', 'padded', 'fillHor', 'normalOnHover'],
    }
});