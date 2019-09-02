function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat:-34.93,lng:138.6},
            zoom: 8
        });
}

var themes = [["#FF3B3F", "#EFEFEF", "#565656", "#A9A9A9", "#CAEBF2"],
    ["#88BBD6", "#CDCDCD", "#02C8A7", "#DFDCE3", "#99D3DF"]
];

function swapTheme(theme_number){
    document.querySelector("html").style.setProperty("--header-footer-colour", themes[theme_number][0]);
    document.querySelector("html").style.setProperty("--body-colour", themes[theme_number][1]);
    document.querySelector("html").style.setProperty("--nav-colour", themes[theme_number][2]);
    document.querySelector("html").style.setProperty("--sidebars", themes[theme_number][3]);
    document.querySelector("html").style.setProperty("--bottom-colour", themes[theme_number][4]);
}
