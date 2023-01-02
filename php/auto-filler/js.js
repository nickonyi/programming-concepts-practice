// onkeyup event will occur when the user
// release the key and calls the function
// assigned to this event
function GetDetail(str) {
    if (str.length == 0) {
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        return;
    } else {

        var xmlhttp;

        // code for IE7+, Firefox, Chrome, Opera, Safari
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        // code for IE6, IE5
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var a = JSON.parse(xmlhttp.responseText);
                document.getElementById("first_name").value = a[0];
                document.getElementById("last_name").value = a[1];
            }
        }

        xmlhttp.open("GET", "gfg.php?id=4", true);
        xmlhttp.send();
    }
}