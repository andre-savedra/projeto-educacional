var baseUrl = "https://swapi.dev/api/"

function GetRequest(body, path, response){
    let request = new XMLHttpRequest();
    let fullPath = baseUrl + path;

    request.onreadystatechange = function()
    {
        //FINALIZOU A REQUISIÇÃO:
        if(request.readyState === 4)
        {
            // console.log("FINALIZEI MINHA REQUISIÇÃO!");
            // console.log(request.status);
            // console.log(request.responseText);
            response(request.status, request.responseText);
        }
    };

    request.open('GET',fullPath, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));    
}


function responsePeople(status, apiContent)
{
    //STATUS CODE = 200 É OK:
    if(status === 200)
    {
        let data = JSON.parse(apiContent);
        // console.log(data['results']);

        for(let i=0; i<data.results.length; i++)
        {
            console.log(data['results'][i].hair_color);
        }
        //console.log(data.results[3]);
    }   
}

GetRequest(null, "people", responsePeople);

