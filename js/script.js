document.getElementById("my-button").addEventListener("click", function () {
  console.log("hello world");
  document.getElementById("main-heading").textContent = "Moi maailma";
});

document.getElementById("add-data").addEventListener("click", function () {
  const text = document.getElementById("custom-text").value.trim();

  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    document.getElementById("my-list").appendChild(li);
    document.getElementById("custom-text").value = ""; // Clear the textarea after adding
  } else {
    const li = document.createElement("li");
    li.textContent = "Default text for task 4";
    document.getElementById("my-list").appendChild(li);
  }
});
