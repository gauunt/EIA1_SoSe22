var deutschland_einwohnerzahl: number= 83.2;
var frankreich_einwohnerzahl: number= 65.3;
var italien_einwohnerzahl: number= 59.58;
var schweden_einwohnerzahl: number= 10.61;

var mio: string= " Mio.";

var frankreich: string= "Frankreich ";
var deutschland: string= "Deuschland ";
var italien: string= "Italien ";
var schweden: string= "Schweden ";

var before: string= "Einwohner*innen in ";

console.log(before+deutschland+deutschland_einwohnerzahl+mio);
console.log(before+frankreich+frankreich_einwohnerzahl+mio);
console.log(before+italien+italien_einwohnerzahl+mio);
console.log(before+schweden+schweden_einwohnerzahl+mio);


var beforerelation: string= "Relation zur Gesamtzahl der Einwohner*innen in der EU "

var eubuerger: number= 447.01;
var hundert: number= 100;
var prozent: string= " %";

console.log(beforerelation+deutschland+deutschland_einwohnerzahl/eubuerger*hundert+prozent);
console.log(beforerelation+frankreich+frankreich_einwohnerzahl/eubuerger*hundert+prozent);
console.log(beforerelation+italien+italien_einwohnerzahl/eubuerger*hundert+prozent);
console.log(beforerelation+schweden+schweden_einwohnerzahl/eubuerger*hundert+prozent);


var beforewachstum: string= "Wachstumsrate seit 2008 "

var deutschland2008: number= 82.0;
var frankreich2008: number= 62.14;
var italien2008: number= 59.0;
var schweden2008: number= 9.26;

console.log(beforewachstum+deutschland+((deutschland_einwohnerzahl-deutschland2008)/deutschland2008)*hundert+prozent)
console.log(beforewachstum+frankreich+((frankreich_einwohnerzahl-frankreich2008)/frankreich2008)*hundert+prozent)
console.log(beforewachstum+italien+((italien_einwohnerzahl-italien2008)/italien2008)*hundert+prozent)
console.log(beforewachstum+schweden+((schweden_einwohnerzahl-schweden2008)/schweden2008)*hundert+prozent)


var beforegesamt: string= "Wachstumsrate gesamt zwischen 2008 and 2021 "

console.log(beforegesamt+deutschland+(deutschland_einwohnerzahl-deutschland2008)+mio)
console.log(beforegesamt+frankreich+(frankreich_einwohnerzahl-frankreich2008)+mio)
console.log(beforegesamt+italien+(italien_einwohnerzahl-italien2008)+mio)
console.log(beforegesamt+schweden+(schweden_einwohnerzahl-schweden2008)+mio)