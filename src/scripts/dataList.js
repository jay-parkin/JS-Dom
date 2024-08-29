// Declare data to use in the logic
let dataArray = [
  "warthog",
  "herbie",
  "interceptor",
  "lightning mcqueen",
  "batmobile",
  "bat tumbler",
  "cybertruck",
  "delorean",
  "elanore",
  "magic school bus",
  "toyota corolla",
];

// Find elements on the page for us to use in the logic
let carsContainerElement = document.getElementById("carsContainer");

function getRandomCarImageURL() {
  return `https://via.placeholder.com/50x50.png?text=Car`;
}

function renderData() {
  carsContainerElement.innerText = "";

  // Create elements to add to the page via the logic
  let carsContainerList = document.createElement("ul");

  // Do logic for each individual item in the array
  dataArray.forEach((car) => {
    console.log(car);

    // Create a new HTML element to help us format the data's value
    let newCarEntry = document.createElement("li");

    // Create an image element for each car entry
    let carImage = document.createElement("img");
    carImage.src = getRandomCarImageURL();

    // Create a text node to display the car's name
    let carText = document.createTextNode(car);

    // Create a remove button
    let removeButton = document.createElement("button");
    removeButton.innerText = `Remove ${car}`;
    removeButton.onclick = () => removeCarFromDataList(car);

    // Add the image and text to the car entry
    newCarEntry.appendChild(carImage);
    newCarEntry.appendChild(carText);
    newCarEntry.appendChild(removeButton);

    // Add the nicely-formatted element into the list container
    carsContainerList.appendChild(newCarEntry);
  });

  // Add the list container onto the actual HTML page
  carsContainerElement.appendChild(carsContainerList);
}

function removeCarFromDataList(targetItemToRemove) {
  dataArray = dataArray.filter((car) => car != targetItemToRemove);
  renderData();
}

function addCarToDataList(event, targetInputId) {
  let formElement = document.getElementById("carsInputForm");
  let isFormValid = formElement.checkValidity();

  if (!isFormValid) {
    formElement.reportValidity();
    return;
  }

  event.preventDefault();

  let targetTextInput = document.getElementById(targetInputId);
  dataArray.push(targetTextInput.value);

  targetTextInput.value = "";
  targetTextInput.focus();

  alert("Submitted a new entry: " + dataArray[dataArray.length - 1]);

  renderData();
}

let formInputButton = document.getElementById("formInputButton");
formInputButton.addEventListener("click", (event) =>
  addCarToDataList(event, "carInputText")
);

renderData();
