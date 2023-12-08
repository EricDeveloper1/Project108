function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5H1n3lfgv/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        document.getElementById("result_label").innerHTML = "I can hear- " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy- "+ (results[0].confidence*100).toFixed(2)+" %";    

    img = document.getElementById('dog');
    img1 = document.getElementById('cat');

    if (results[0].label == "Background Noise") {
        img.src = 'dog.png'
        img1.src = 'cat.png'
    }

    if (results[0].label == "Barking") {
        img.src = 'dog.gif';
        img1.src = 'cat.png';
}
if (results[0].label == "Meowing") {
    img.src = 'dog.png'
    img1.src = 'cat.gif'
}
    }
}