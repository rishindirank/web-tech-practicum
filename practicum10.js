// getElementById()

const serviceInput =
    document.getElementById("serviceInput");

const addBtn =
    document.getElementById("addBtn");

const modifyBtn =
    document.getElementById("modifyBtn");

const clearBtn =
    document.getElementById("clearBtn");

const serviceContainer =
    document.getElementById("serviceContainer");

const message =
    document.getElementById("message");


// Add New Service

addBtn.addEventListener("click", function () {

    if (serviceInput.value.trim() === "") {
        message.textContent =
            "Please enter a service name.";
        return;
    }

    // createElement()

    const card =
        document.createElement("div");

    const title =
        document.createElement("p");

    const removeButton =
        document.createElement("button");

    // textContent

    title.textContent =
        serviceInput.value;

    removeButton.textContent =
        "Remove";

    // setAttribute()

    card.setAttribute(
        "class",
        "service-card"
    );

    // appendChild()

    card.appendChild(title);
    card.appendChild(removeButton);

    serviceContainer.appendChild(card);

    removeButton.addEventListener(
        "click",
        function () {
            card.remove();  // remove()
        }
    );

    message.textContent =
        "Service Added Successfully";

    serviceInput.value = "";
});


// Modify First Card

modifyBtn.addEventListener("click", function () {

    const firstCard =
        document.querySelector(
            ".service-card p"
        );

    if (firstCard) {

        // innerHTML

        firstCard.innerHTML =
            "Premium Savings Account";

        message.textContent =
            "First Service Modified";
s    }
});


// Remove All Services

clearBtn.addEventListener("click", function () {

    serviceContainer.innerHTML = "";

    message.textContent =
        "All Services Removed";
});


// Remove Existing Services

function removeService(button) {

    button.parentElement.remove();

    document.getElementById("message")
        .textContent =
        "Service Removed";
}