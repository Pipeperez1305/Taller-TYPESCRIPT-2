import { Serie } from "./Serie.js";
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "BreakingBad.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "Orange.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "Got.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "BigBang.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "sherlock.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "Schandal.jpg"),
];
console.log(series);
function darPromedioSeasons() {
    var totalSeasons = 0;
    var totalSeries = 0;
    for (var index = 0; index < series.length; index++) {
        var serie = series[index];
        totalSeries += 1;
        totalSeasons += serie.seasons;
    }
    var promedio = (totalSeasons / totalSeries);
    return promedio;
}
var serieDescriptionTable = document.getElementById("serie");
var averageTable = document.getElementById("promedio");
var seriesTable = document.getElementById("series");
mostrarPromedio();
mostrarSeries();
function mostrarInfoSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<div class=\"card mb-3\">\n     <img src=\"".concat(serie.imagen, "\" class=\"card-img-top my-3\" alt=\"...\">\n     <div class=\"card-body\">\n       <h5 class=\"card-title\">").concat(serie.name, "</h5>\n       <p class=\"card-text\">").concat(serie.description, "</p>\n       <p><a href=\"").concat(serie.enlace, "\">https://www.amc.com/shows/breaking-bad</a>.</p>\n     </div>\n </div>");
    serieDescriptionTable.appendChild(tbodySerie);
}
function mostrarPromedio() {
    var promedioSeasons = darPromedioSeasons();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>  Seasons average: ".concat(promedioSeasons, "</td>");
    averageTable.appendChild(trElement);
}
function mostrarSeries() {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n          <th scope=\"row\">".concat(serie.num, "</th>\n          <td><a href=\"").concat(serie.enlace, "\">").concat(serie.name, "</a></td>\n          <td>").concat(serie.chanel, "</td>\n          <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
