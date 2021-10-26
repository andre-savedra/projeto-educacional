let data = [
    [
        ['Task', 'Hours per Day'],
        ['Trabalho', 5],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
        ['Teste', 15]
    ],
    [
        ['Cliente', 'Faturamento'],
        ['Honda', 5],
        ['Toyota', 2],
        ['Volvo', 2],
        ['BMW', 2]
    ]
];



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

            drawChart(data[document.querySelector(".myGraphic")
                .getAttribute("dataid")]);
        }
    )



}