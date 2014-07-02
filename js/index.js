window.onload = function() {

    //get the default selected option
    //load the results using the default option

    //attach change handler on the location drop-down
    var container = document.querySelector(".result-container");
    dataRenderer.showData(DATA, "star_rating", container);

};


var dataRenderer = (function(w) {

    function constructDOMFragment() {

        var fragment = document.createDocumentFragment();
        for (var i = results.length - 1; i >= 0; i--)(function(r) {

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

            var h3_price = document.createElement("h3");
            h3_price.className = "pull-right";
            h3_price["innerHTML" || "textContent"] = r.price;

            div_caption_bottom.appendChild(h3_price);

            var clearfix = document.createElement("div");
            clearfix.className = "clearfix";
            div_caption_bottom.appendChild(clearfix);

            div_thumbnail.appendChild(div_caption_bottom);
            fragment.appendChild(div_container);

        })(results[i]);

        // "<div class=\"pull-left col-xs-4\">"
        //     "<div class=\"thumbnail\">"
        //         "<div class=\"caption\">"
        //             "<h5>Miami</h5>"
        //         "</div>"
        //         "<img class=\"img-responsive\" src=\"\" alt=\"\">"
        //         "<div class=\"caption\">"               
        //             "<h3 class=\"pull-right\">$177</h3>"
        //             "<div class=\"clearfix\"></div>"
        //         "</div>"
        //     "</div>"
        // "</div>"

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

        var f = constructDOMFragment();
        container.appendChild(f);
    };

    return {
        showData: showData
    };

})(window);
