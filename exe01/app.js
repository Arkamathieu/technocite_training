// 1) ouvrir et afficher 2) combien de ligne 3) ajout d'un nom depuis console 4) ajout de plusieurs nom avec virgules

let fs = require('fs');
let entree = process.argv[2];
let filePath = 'test01.txt';

// console.log(process.argv[2]); // va récupérer le nom dans la console (node app.js NOM)

fs.readFile(filePath, 'utf8', function(err,data){
  if (err) throw err;
  // let lines = data.split('\r');
  // console.log(`Liste des personnes:\n${data}`);
  // console.log(`Le nombre de personnes est de: ${lines.length}.`);
  if(!entree){
  	console.log(`Erreur! Vous avez oublié d'entrer des noms!`);
  }
  else{
  let inData = data+entree.replace(/,/g, "\r")+"\r";
	  fs.writeFile(filePath, inData , (err) =>{
	  if (err) throw err;
	  console.log(`Nom(s) ajouté(s)!\nNouvelle liste:`);
	  console.log(inData);
	  let lines = inData.split('\r');
	  console.log(`Le nombre de personnes est de: ${lines.length}.`);
	  });
  }
});