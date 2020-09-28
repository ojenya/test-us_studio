
var token = "69d253b119b12268d11888d1d6462f3cb7bf3d5c";

$("#address").suggestions({
    token: token,
    type: "ADDRESS",
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});