let count = 0
let countEl = document.getElementById("count-el")
let saveEntries = document.getElementById("save-entries")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " | "
    saveEntries.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function clearBtn() {
    saveEntries.textContent = "Previous Entries: "
    countEl.textContent = 0
    count = 0
}


