//Nav Fetch
    fetch('/MainPageAndElements/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
        fetch('/MainPageAndElements/Headline.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headline').innerHTML = data;
        });

    fetch('/MainPageAndElements/Social.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('endCard').innerHTML = data;
        });

//Contruction Page Fetch
fetch('/MainPageAndElements/Construction.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('construction').innerHTML = data;
        });