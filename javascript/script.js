const btn1El = document.querySelector("#btn-1");
const btn2El = document.querySelector("#btn-2");
const btn3El = document.querySelector("#btn-3");
const invoicebtnEl = document.querySelector(".invoice-btn");
const totalAmount = document.querySelector("#total-amount");
const innertask = document.querySelector(".innertask");
const washCarTask = { tasks: "Wash Car", total: 10 };
const mowLawnTask = { tasks: "Mow Lawn", total: 20 };
const pullWeedsTask = { tasks: "Pull Weeds", total: 30 };
let servicesArr = [];

function renderTasks() {
    let taskItems = "";
    let totalCash = 0;
    for (let i = 0; i < servicesArr.length; i++) {
        taskItems += `<div class="items show">
                            <p>${servicesArr[i].tasks} <button class="remove-btn" id="remove-${i}">Remove</button></p>
                            <p>$${servicesArr[i].total}</p>
                        </div>`;
        totalCash += servicesArr[i].total;
    }
    innertask.innerHTML = taskItems;
    totalAmount.textContent = `$${totalCash}`;
}

btn1El.addEventListener("click", function () {
    if (!servicesArr.includes(washCarTask)) {
        servicesArr.push(washCarTask);
        renderTasks();
    }
});

btn2El.addEventListener("click", function () {
    if (!servicesArr.includes(mowLawnTask)) {
        servicesArr.push(mowLawnTask);
        renderTasks();
    }
});

btn3El.addEventListener("click", function () {
    if (!servicesArr.includes(pullWeedsTask)) {
        servicesArr.push(pullWeedsTask);
        renderTasks();
    }
});

invoicebtnEl.addEventListener("click", function () {
    servicesArr = [];
    totalAmount.textContent = 0;
    innertask.innerHTML = "";
});

innertask.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        let btnName = event.target.id;
        let btnIndex = btnName.charAt(btnName.length - 1);
        subArray = servicesArr.splice(btnIndex, 1);
        renderTasks();
    }
});
