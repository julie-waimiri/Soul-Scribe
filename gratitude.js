// DOM Elements
const form = document.getElementById("Gratitude");
const savedGratitude = document.getElementById("savedGratitude");

// Load saved entries from localStorage
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem("gratitude")) || [];
    savedGratitude.innerHTML = ""; // Clear existing entries

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "entry";
        entryDiv.innerHTML = `
            <h3>${entry.title}</h3>
            <p><strong>Date:</strong> ${entry.date}</p>
            <p><strong>Mood:</strong> <span class="mood">${entry.mood}</span></p>
            <p><strong>Reflection:</strong> ${entry.journalEntry}</p>
            <div class="actions">
                <button class="edit-btn" onclick="editEntry(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteEntry(${index})">Delete</button>
            </div>
        `;
        savedGratitude.appendChild(entryDiv);
    });
}
