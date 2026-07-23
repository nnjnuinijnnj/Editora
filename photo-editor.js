const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

const rotateBtn = document.getElementById("rotateBtn");
const brightness = document.getElementById("brightness");
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
function updateFilters() {

    preview.style.filter =
        `brightness(${brightness.value}%)
         contrast(${contrast.value}%)
         saturate(${saturation.value}%)`;

}

brightness.addEventListener("input", updateFilters);
contrast.addEventListener("input", updateFilters);
saturation.addEventListener("input", updateFilters);
