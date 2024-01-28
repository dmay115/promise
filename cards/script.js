let deck_id;

axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(function (response) {
        console.log(response.data.deck_id);
        deck_id = response.data.deck_id;
    });

function drawCard() {
    axios
        .get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        .then(function (response) {
            let cardImg = response.data.cards[0].image;

            let randomRotation =
                Math.floor(Math.random() * 30) - Math.random() * 20;

            let randomX = Math.floor(Math.random() * 11);
            let randomY = Math.floor(Math.random() * 11);

            $("body").append(
                $("<img />", {
                    src: cardImg,
                    alt: "Image Alt Text",
                    width: "200px",
                    class: "card",
                    style: `transform: translate(-50%, -50%) rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px);`,
                })
            );
        });
}
