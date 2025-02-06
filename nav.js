//Nav Fetch
    fetch('/elements/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
        fetch('/elements/headline.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headline').innerHTML = data;
        });

    fetch('/elements/socmed.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('endCard').innerHTML = data;
        });

//Contruction Page Fetch
fetch('/elements/construction.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('construction').innerHTML = data;
        });