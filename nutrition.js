
function caloriesCalculator() {
    var gender, weight, height, age, result;

    gender = document.getElementById("gender").value;
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    age = document.getElementById("age").value;

    if (gender === "male") {
      result = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      result = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    document.getElementById("calories-result").innerHTML = result;
}