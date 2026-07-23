const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

const rotateBtn = document.getElementById("rotateBtn");
const brightness = document.getElementById("brightness");
const bwBtn = document.getElementById("bwBtn");
const resetBtn = document.getElementById("resetBtn");

let grayscale = 0;
const saturation = document.getElementById("saturation");
const contrast = document.getElementById("contrast");

let rotation = 0;

// انتخاب عکس
imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        preview.src = e.target.result;

    };

    reader.readAsDataURL(file);

});

// چرخش
rotateBtn.addEventListener("click", function () {

    rotation += 90;

    preview.style.transform = `rotate(${rotation}deg)`;

});

// اعمال فیلترها
function updateFilters(){

    preview.style.filter =
        `brightness(${brightness.value}%)
         contrast(${contrast.value}%)
         saturate(${saturation.value}%)
         grayscale(${grayscale}%)`;

}

brightness.addEventListener("input", updateFilters);
contrast.addEventListener("input", updateFilters);
saturation.addEventListener("input", updateFilters);

bwBtn.addEventListener("click", function(){

    grayscale = grayscale === 100 ? 0 : 100;

    updateFilters();

});

resetBtn.addEventListener("click", function(){

    brightness.value = 100;
    contrast.value = 100;
    saturation.value = 100;

    rotation = 0;
    grayscale = 0;

    preview.style.transform = "rotate(0deg)";

    updateFilters();

});

const textInput = document.getElementById("textInput");
const addTextBtn = document.getElementById("addTextBtn");

addTextBtn.addEventListener("click", function(){

    const text = document.createElement("div");

    text.innerText = textInput.value;

    text.className = "image-text";

    document.querySelector(".canvas-area").appendChild(text);

});
