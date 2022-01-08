//https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b8225b041c82080be7743e54e195af9a
const cityName = document.querySelector("h2");
const deg = document.querySelector(".degrees");
const clar = document.querySelector(".clarity");
const submit = document.querySelector(".load");
const cityInput = document.querySelector(".city");

//weather
async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b8225b041c82080be7743e54e195af9a&units=metric`
  );
  const data = await response.json();
  if (data.cod != 200) {
    return;
  }
  cityName.textContent = `${data.name}`;
  deg.textContent = ` ${Math.floor(data.main.temp)}\xB0C`;
  clar.textContent = `${data.weather[0].description}`;
  if (data.main.temp > 20) {
    document.body.style.background =
      "linear-gradient(to right, #ee0979, #ff6a00)";
  } else {
    document.body.style.background =
      "linear-gradient(to right, #2F80ED, #56CCF2)";
  }
}

submit.addEventListener("click", () => {
  getWeather(cityInput.value);
  cityInput.value = "";
});

//toDo

const taskInput = document.querySelector(".doer");
const addBtn = document.querySelector(".add");
const ul = document.querySelector("ul");
const toDoList = [];

function taskHandler(e) {
  e.preventDefault();

  if (taskInput.value === "") return;
  const task = document.createElement("li");
  task.innerHTML = taskInput.value + " <button class='done'>DONE</button>";
  toDoList.push(task);
  ul.appendChild(task);
  taskInput.value = "";
  task.querySelector(".done").addEventListener("click", taskDone);
}

function taskDone(e) {
  const element = e.target.parentElement;
  element.remove();
}

addBtn.addEventListener("click", taskHandler);
