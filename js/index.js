window.onload = function() {
    var select = document.getElementById("location"),
        container = document.querySelector(".result-container");

    dataRenderer.showData(DATA, select.options[select.selectedIndex].value, container);

    addEvent(select, "change", function() {
        dataRenderer.showData(DATA, select.options[select.selectedIndex].value, container);
    });
};


function addEvent(el, event_name, fn) {
    //IE
    if (el.attachEvent)
        el.attachEvent("on" + event_name, function() {
            fn.call(el);
        });
    else if (el.addEventListener)
        el.addEventListener(event_name, fn, false);
}

var dataRenderer = (function(w) {

    function constructDOMFragment() {

        var fragment = document.createDocumentFragment();
        for (var i = 0; i < results.length; i++)(function(r) {

            var div_container = document.createElement("div");
            div_container.className = "pull-left col-xs-4";

            var div_thumbnail = document.createElement("div");
            div_thumbnail.className = "thumbnail";

            div_container.appendChild(div_thumbnail);

            var div_caption_top = document.createElement("div");
            div_caption_top.className = "caption";

            var h5 = document.createElement("h5");
            h5["innerHTML" || "textContent"] = r.name;
            div_caption_top.appendChild(h5);
            div_thumbnail.appendChild(div_caption_top);

            var img = document.createElement("img");
            img.className = "img-responsive";
            img.src = r.img;
            img.alt = r.name;

            div_thumbnail.appendChild(img);

            var div_caption_bottom = document.createElement("div");
            div_caption_bottom.className = "caption";

            var starFragment = document.createDocumentFragment();
            var stars = [];
            for (var i = 5; i >= 1; i--) {
                var star = document.createElement("span");
                star.className = 5 - r.star_rating >= i ? "glyphicon glyphicon-star-empty" : "glyphicon glyphicon-star";
                starFragment.appendChild(star);
            };
            div_caption_bottom.appendChild(starFragment);

            var h3_deal_price = document.createElement("h3");
            h3_deal_price.className = "pull-right";
            if (r.price !== undefined && r.price && r.price != r.deal_price) {
                var price = document.createElement("small");
                var strikethrough = document.createElement("s");
                strikethrough["innerHTML" || "textContent"] = r.currency + " " + r.price;
                price.appendChild(strikethrough);
                h3_deal_price.appendChild(price);
            }
            h3_deal_price.appendChild(document.createTextNode("  " + r.currency + " " + r.price));

            div_caption_bottom.appendChild(h3_deal_price);

            var clearfix = document.createElement("div");
            clearfix.className = "clearfix";
            div_caption_bottom.appendChild(clearfix);

            div_thumbnail.appendChild(div_caption_bottom);
            fragment.appendChild(div_container);

        })(results[i]);

        var clearfix = document.createElement("div");
        clearfix.className = "clearfix";
        fragment.appendChild(clearfix);

        return fragment;
    };

    function showData(d, filter, container) {
        results = d.slice(0);
        if (filter === "star_rating") {
            results.sort(function(a, b) {
                return b.star_rating - a.star_rating;
            });
        } else if (filter === "dist") {
            results.sort(function(a, b) {
                return a.dist - b.dist;
            });
        }
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        container.appendChild(constructDOMFragment());
    };

    return {
        showData: showData
    };

})(window);
