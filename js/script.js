document.getElementById("my-button").addEventListener("click", function () {
  console.log("hello world");
  document.getElementById("main-heading").textContent = "Moi maailma";
});

document.getElementById("add-data").addEventListener("click", function () {
  const text = document.getElementById("custom-text").value;

  if (text.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    document.getElementById("my-list").appendChild(li);
    document.getElementById("custom-text").value = "";
  }
});
