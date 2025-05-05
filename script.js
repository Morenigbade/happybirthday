function showSurprise() {
const surpriseDiv = document.getElementById('surprise');
surpriseDiv.classList.remove('hidden');
document.getElementById('message').textContent = "Surprise!!!";
}


//   const fileInput = document.getElementById("imageUpload");
//   const imageDisplay = document.getElementById("userImage");
//   const surpriseDiv = document.getElementById("surprise");
//   const file = fileInput.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       imageDisplay.src = e.target.result;
//       surpriseDiv.classList.remove("hidden");

//       document.getElementById("message").textContent =
//         " You're my forever gift !";
//       launchHearts();
//     };

//     reader.readAsDataURL(file);
//   } else {
//     alert("Please upload a photo first!");
//   }
// }
// function launchHearts() {
//   const container = document.getElementById("heartsContainer");
//   container.innerHTML = "";
//   for (let i = 0; i < 20; i++) {
//     const heart = document.createElement("div");
//     heart.classList.add(heart);
//     heart.style.left = Math.random() * 90 + "%";
//     heart.style.animationDelay = Math.random() * 3 + "s";
//     container.appendChild(heart);
//   }
// }
