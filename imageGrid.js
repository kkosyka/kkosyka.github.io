var allImages = "";

var imageNames = ['airBalloon', 'cars', 'chairs', 'houses'];
for (var i = 0; i < imageNames.length; i++) {
    allImages += '<img src="./img/' +imageNames[i]+'.jpg" height="30%" width="30%" alt="picture">';
}

$('#photos').append(allImages);
