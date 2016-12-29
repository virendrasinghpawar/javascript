var displayMessage = function (count) {
    return function (message) {
        var content = "";
        for (var i = 0; i < count; i++) {
            content += message + "\n";

        }
        return content;
    }
}

var dm = new displayMessage(10);
// window.onload=function(){
// document.body.innerHTML+=dm("welcome");
// }
console.log(dm("welcome"));