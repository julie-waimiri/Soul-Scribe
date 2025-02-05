// DOM Elements
const form = document.getElementById("growth");
const savedGrowth = document.getElementById("savedPersonalGrowth");

// Load saved entries from localStorage
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem("growth")) || [];
    savedGrowth.innerHTML = ""; // To clear existing entries
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
        savedGrowth.appendChild(entryDiv);
    });
}

// Save entry to localStorage
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate date
    const dateInput = document.getElementById("date").value;
    const [year, month, day] = dateInput.split("-");
    if (parseInt(month) > 12 || parseInt(day) > 31) {
        alert("Invalid date! Month must be ≤ 12 and day must be ≤ 31.");
        return;
    }

    // Create entry object
    const entry = {
        date: dateInput,
        title: document.getElementById("title").value,
        mood: document.getElementById("mood").value,
        journalEntry: document.getElementById("journalEntry").value,
    };

    // Save to localStorage
    const entries = JSON.parse(localStorage.getItem("growth")) || [];
    entries.push(entry);
    localStorage.setItem("growth", JSON.stringify(entries));

    // Reload entries
    loadEntries();
    form.reset(); // Clear form
});

// Load entries on page load
loadEntries();
