//Nav Fetch
    fetch('Nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });

        fetch('Social.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('endCard').innerHTML = data;
        });