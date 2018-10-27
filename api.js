'use strict';

const API_SEARCH_URL = "https://api.cdnjs.com/libraries";

function getDataFromAPI(searchTerm, callback) {
    const settings = {
        url: API_SEARCH_URL,
        data : {
            'search' : searchTerm,
            'fields' : "name,homepage"
        },
        dataType: 'jsonp',
        type: 'GET',
        success: callback,
        error: logError
    };
    $.ajax(settings);
}

function renderResult(result) {
    return `<div><p><a href="${result.homepage}">Name: ${result.name}</a></p><p>Latest CDN: ${result.latest}</p></div>`;
}

function displayAPIData(data) {
   const SHOWresults = data.results.map(item => renderResult(item));
      $(".results").html(SHOWresults);
}

function watchSubmit(){
    $(".formClass").submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find(".api-Box");
        const query = queryTarget.val();
        queryTarget.val("");
        getDataFromAPI(query, displayAPIData);
    });
}

function logError(jqXHRObj, statusStr, err){
    console.log("Status is: "+ statusStr);
    console.log("Error is: " + err);
}

$(watchSubmit);
