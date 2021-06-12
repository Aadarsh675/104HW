Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("camera")
function capture() {
    Webcam.snap(
        function (img) {
            document.getElementById("snapshot").innerHTML = `<img id="picture" src=${img}>`
        }
    )
}
console.log("ml5.version = " + ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/epbJj_Rqh/model.json", modelLoader)