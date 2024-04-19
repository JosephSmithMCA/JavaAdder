var buttonElement = document.getElementById("addbutton");
buttonElement.addEventListener("click", btnClicked);

function btnClicked() {
    //grab elements
    var output = document.getElementById("sum");
    var number1 = document.getElementById("num1");
    var number2 = document.getElementById("num2");

    //grab values
    var nums1 = parseFloat(number1.value);
    var nums2 = parseFloat(number2.value);

    //calculate result
    var result = nums1 + nums2;
    
    //display value
    output.value = result;
}