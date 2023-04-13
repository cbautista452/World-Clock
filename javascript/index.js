let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.quereyselector(".date");
let losAngelesTimeselement = losAngelesElement.querySelector(".time");
losAngelesElement.innerHTML = moment().format("MMMM Do yyyy");
losAngelesTimeElement.innerHTML = "1:49:15<small>AM</small>!";
