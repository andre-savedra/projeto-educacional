function ajaxContent(element) {
    let myView = element.getAttribute("view");
    let path = "/html/views/" + myView + ".html";

    let content = document.querySelector("#main-content");

    fetch(path).then(
        (response) => {
            let html = response.text();
            return html;
        }
    ).then(
        (html) => {
            content.innerHTML = html;
        }
    )


}