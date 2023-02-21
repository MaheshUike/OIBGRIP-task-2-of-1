
    function add(n) {
        if (document.getElementById('display').value == "") {
            document.getElementById('display').value = n
        }
        else {
            document.getElementById('display').value += n
        }
    }

    function back() {
        var value = document.getElementById('display').value;
        document.getElementById('display').value = value.substr(0, value.length - 1);
    }

    function result() {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    }

    function clearDisplay() {
        document.getElementById('display').value = ' '
    }
