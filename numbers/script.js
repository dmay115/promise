axios
    .get("http://numbersapi.com/12/trivia?json")
    .then(function (response) {
        $("body").append(response.data.text);
        $("body").append($("<br>"));
        return axios.get("http://numbersapi.com/28/trivia?json");
    })
    .then(function (response) {
        $("body").append(response.data.text);
        $("body").append($("<br>"));
        return axios.get("http://numbersapi.com/6/trivia?json");
    })
    .then(function (response) {
        $("body").append(response.data.text);
        $("body").append($("<br>"));
        return axios.get("http://numbersapi.com/8/trivia?json");
    })
    .then(function (response) {
        $("body").append(response.data.text);
    })
    .catch(function (error) {
        console.log("Error", error);
    });
