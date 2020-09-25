import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
import navigation from "./navigation";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

// Solution 1


// Solution 2


