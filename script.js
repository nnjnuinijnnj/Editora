// Welcome
console.log("Welcome to Editora!");

// Buttons
const photoBtn = document.getElementById("photoBtn");
const videoBtn = document.getElementById("videoBtn");
const projectBtn = document.getElementById("projectBtn");
const templateBtn = document.getElementById("templateBtn");
const settingBtn = document.getElementById("settingBtn");

// Photo Editor
photoBtn.addEventListener("click", () => {
    window.location.href = "photo-editor.html";
});

// Video Editor
videoBtn.addEventListener("click", () => {
    alert("🚧 Video Editor - Coming Soon");
});

// My Projects
projectBtn.addEventListener("click", () => {
    alert("🚧 My Projects - Coming Soon");
});

// Templates
templateBtn.addEventListener("click", () => {
    alert("🚧 Templates - Coming Soon");
});

// Settings
settingBtn.addEventListener("click", () => {
    alert("🚧 Settings - Coming Soon");
});
