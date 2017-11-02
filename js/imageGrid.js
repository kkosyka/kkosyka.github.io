var allImages = "";

var imageNames = ['duomo','rascalCallig','cyclingMe', 'reflection','poncho', 'drive','winterSmith','bee','drawing', 'lakeFitz','wallArt','smith','calligraphy','wedding','cycling','reading','rascal', 'firenzeHorse','horses','sketchPoncho', 'windyRoad'];
for (var i = 0; i < imageNames.length; i++) {
    allImages += '<img src="./img/' +imageNames[i]+'.jpg" height="30%" width="30%" alt="picture">';
}

$('#photos').append(allImages);
