let income = 0;
let expense = 0;
let balance = 0;

const form = document.getElementById("expenseForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const list = document.getElementById("list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);
    const type = typeInput.value;

    if (description === "" || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const item = document.createElement("li");

    if (type === "income") {
        income += amount;
        balance += amount;
        item.textContent = "+ ₹" + amount + " - " + description;
    } else {
        expense += amount;
        balance -= amount;
        item.textContent = "- ₹" + amount + " - " + description;
    }

    list.appendChild(item);

    updateSummary();

    form.reset();
});

function updateSummary() {
    document.getElementById("balance").textContent =
        "₹" + balance.toFixed(2);

    document.getElementById("income").textContent =
        "₹" + income.toFixed(2);

    document.getElementById("expense").textContent =
        "₹" + expense.toFixed(2);
}
