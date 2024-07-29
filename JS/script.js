//ini java script
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-btn");
  let colorChangeRate = 0;

  function animateRGB() {
    const red = Math.sin(0.3 * colorChangeRate + 0) * 127 + 128;
    const green =
      Math.sin(0.3 * colorChangeRate + (2 * Math.PI) / 3) * 127 + 128;
    const blue =
      Math.sin(0.3 * colorChangeRate + (4 * Math.PI) / 3) * 127 + 128;

    submitButton.style.backgroundColor = `rgb(${red},${green},${blue})`;
    colorChangeRate += 0.01;

    requestAnimationFrame(animateRGB);
  }

  submitButton.addEventListener("mouseover", () => {
    requestAnimationFrame(animateRGB);
  });

  submitButton.addEventListener("mouseout", () => {
    cancelAnimationFrame(animateRGB);
    submitButton.style.backgroundColor = ""; // Reset to original color
    colorChangeRate = 0.01; // Reset rate if needed
  });

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Example fail condition
      if (document.getElementById("name").value === "") {
        alert("Fail Message: Name is required");
        return false;
      }

      alert("Form Submitted Successfully!");
    });
});
