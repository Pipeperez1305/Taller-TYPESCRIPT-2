import { Serie } from "./Serie.js";
export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","BreakingBad.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","Orange.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "Got.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "BigBang.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "sherlock.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "Schandal.jpg"),
  ];

console.log(series);

    function darPromedioSeasons():number{
    let totalSeasons: number=0;
    let totalSeries: number=0;
    for (const element of series){
        let serie: Serie = element;
        totalSeries+=1;
        totalSeasons+= serie.seasons;
    }
    let promedio: number=(totalSeasons/totalSeries);
    return promedio;
   }

let serieDescriptionTable: HTMLElement= document.getElementById("serie")!;
let averageTable: HTMLElement= document.getElementById("promedio")!;
let seriesTable: HTMLElement= document.getElementById("series")!;
mostrarPromedio();
mostrarSeries();

function mostrarInfoSerie(serie: Serie):void{
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML=`<div class="card mb-3">
     <img src="${serie.imagen}" class="card-img-top my-3" alt="...">
     <div class="card-body">
       <h5 class="card-title">${serie.name}</h5>
       <p class="card-text">${serie.description}</p>
       <p><a href="${serie.enlace}">https://www.amc.com/shows/breaking-bad</a>.</p>
     </div>
 </div>`
     serieDescriptionTable.appendChild(tbodySerie);
}


function mostrarPromedio():void{
    let promedioSeasons:number= darPromedioSeasons();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML= `<td>  Seasons average: ${promedioSeasons}</td>`;
    averageTable.appendChild(trElement);
}

function mostrarSeries():void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for (let serie of series) {

        let trElement:HTMLElement= document.createElement("tr");
        trElement.innerHTML=`
          <th scope="row">${serie.num}</th>
          <td><a href="${serie.enlace}">${serie.name}</a></td>
          <td>${serie.chanel}</td>
          <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);

    



}