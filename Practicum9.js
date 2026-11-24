// Practicum 9: interactive animations for the banking services webpage
const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");
let toastTimer;

// Show a short notification and hide it after a few seconds.
function showToast(message) {
  toastText.textContent = message;
  toast.classList.remove("show");
  // Allow the browser to restart the CSS animation.
  void toast.offsetWidth;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Display or hide extra details inside each service card.
document.querySelectorAll(".details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".service-card");
    const isExpanded = card.classList.toggle("expanded");
    button.setAttribute("aria-expanded", isExpanded);
    button.innerHTML = isExpanded
      ? 'Hide details <span>−</span>'
      : 'View details <span>＋</span>';
  });
});

// Hero button interaction.
document.getElementById("welcomeBtn").addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  showToast("Explore our banking services below.");
});

// Offer button interaction.
document.getElementById("offerBtn").addEventListener("click", () => {
  showToast("Your banking journey starts with a clear plan.");
});

// Open and close the quick-help panel.
const helpToggle = document.getElementById("helpToggle");
const helpPanel = document.getElementById("helpPanel");

helpToggle.addEventListener("click", () => {
  const isOpen = helpPanel.classList.toggle("open");
  helpToggle.classList.toggle("active");
  helpToggle.setAttribute("aria-expanded", isOpen);
  helpToggle.innerHTML = isOpen
    ? 'Close quick help <span>−</span>'
    : 'Open quick help <span>＋</span>';
});
