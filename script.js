 // Change text content dynamically
function changeText() {
    document.getElementById("about-text").textContent = "Kiem Trading provides innovative solutions for global trade!";
}

// Modify CSS styles via JavaScript
function changeStyle() {
    document.getElementById("heading").style.color = "#007bff";
    document.getElementById("tagline").style.fontSize = "22px";
    document.getElementById("services").style.backgroundColor = "#f8f9fa";
}

// Add a new service dynamically
function addElement() {
    let newItem = document.createElement("li");
    newItem.textContent = "Custom Brokerage & Compliance";
    document.querySelector("#services ul").appendChild(newItem);
}

// Remove the last added service
function removeElement() {
    let items = document.querySelectorAll("#services ul li");
    if (items.length > 4) {
        items[items.length - 1].remove();
    }
}