var allImages = "";

var imageNames = ['duomo','rascalCallig','cyclingMe', 'poncho', 'drive','winterSmith','drawing', 'lakeFitz','wallArt','smith','calligraphy','wedding','cycling', 'rascal', 'firenzeHorse','horses','sketchPoncho', 'windyRoad'];
for (var i = 0; i < imageNames.length; i++) {
    allImages += '<img src="./img/' +imageNames[i]+'.jpg" height="30%" width="30%" alt="picture">';
}

$('#photos').append(allImages);
