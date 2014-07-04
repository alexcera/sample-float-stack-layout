/**
 * README:
 *
 * Regarding the design:
 * I opted to use twitter-bootstrap for I honestly admit that my design skills are not excellent enough to come-up
 * with a design given the time constraint.
 *
 * Regarding the js:
 * This is a simple javascript implementation according to the problem presented.
 * I resort on not using jQuery because reliance on such libraries may speed-up development process
 * handle cross-browser bugs, but on the expense of not learning javascript on it's deepest sense. :)
 * Anyway, if development speed and cross-browser compatibility is the main goal, resorting to such libraries will be 
 * beneficial. As for this coding exam, I want to demonstrate my javascript ability. :)
 *
 * There are two approaches that comes to my mind as I am writing this implementation.
 * The first is:
 * 1.) of course through DOM-manipulation/building;
 * 2.) second, is templating.
 *
 * There are many templating libraries out there which makes this task easy but for the sake of demo,
 * I implemented a simple templating mechanism.
 *
 * I hardcoded the DATA in the form of object array, (data.js) for the sake of demo, 
 * but in a real-world scenario, this DATA can be fetched via db calls. 
 * 
 * Anyway, coming from a java background, this is a cool task! :)
 *
 */


/**
 * a cross-browser prop-detection for attaching events
 * 
 * @param {[type]}   el
 * @param {[type]}   eventName
 * @param {Function} fn
 */
function addEvent(el, eventName, fn) {
    //IE
    if (el.attachEvent)
        el.attachEvent("on" + eventName, function() {
            fn.call(el);
        });
    else if (el.addEventListener)
        el.addEventListener(eventName, fn, false);
}

/**
 * simple implementation of setting text,
 * with cross-browser prop-detection in mind.
 * 
 * @param {[type]} el
 * @param {[type]} text
 */
function setText(el, text) {
    while (el.firstChild !== null)
        el.removeChild(el.firstChild);
    el.appendChild(document.createTextNode(text));
}

/**
 * added a util function which replaces the
 * first up to the nth match of the string.
 *
 * @param  {[type]} regex
 * @param  {[type]} replacement
 * @param  {[type]} nthOccurence
 * @return {[type]}
 */
String.prototype.replaceByOccurence = function(regex, replacement, nthOccurence) {
    if (nthOccurence > 0)
        return this.replace(regex, replacement)
            .replaceByOccurence(regex, replacement, --nthOccurence);
    return this;
};

var dataRenderer = (function(w) {

    var results, temp;

    function constructDOMFragment() {

        var fragment = document.createDocumentFragment();

        for (var i = 0; i < results.length; i++) {

            var r = results[i],
                containerNode = createStyledElement("div", "pull-left col-xs-4");

            //FIRST APPROACH: templating
            containerNode.innerHTML = temp.replace("#TITLE#", r.hotelName)
                .replace("#IMGURL#", r.img)
                .replace("#ALT#", r.hotelName)
                .replaceByOccurence(/glyphicon-star-empty/, "glyphicon-star", r.starRating)
                .replace(/#CURRENCY#/g, r.currency)
                .replace("#PRICE#", r.price)
                .replace("#DEALPRICE#", r.dealPrice);

            //SECOND APPROACH: DOM-building using fragments
            /*thumbnailNode = createStyledElement("div", "thumbnail"),
                topCaptionNode = createStyledElement("div", "caption"),
                h5 = createStyledElement("div", ""),
                imgNode = createStyledElement("img", "img-responsive"),
                bottomCaptionNode = createStyledElement("div", "caption"),
                dealPriceNode = createStyledElement("h3", "pull-right");

            setText(h5, r.hotelName);
            topCaptionNode.appendChild(h5);
            thumbnailNode.appendChild(topCaptionNode);
            imgNode.src = r.img;
            imgNode.alt = r.hotelName;
            thumbnailNode.appendChild(imgNode);

            if (r.price && r.price !== r.dealPrice) {
                var priceNode = document.createElement("small");
                var strikethrough = document.createElement("s");
                setText(strikethrough, r.currency + " " + r.price);
                priceNode.appendChild(strikethrough);
                dealPriceNode.appendChild(priceNode);
            }

            bottomCaptionNode.appendChild(buildStarFragment(document.createDocumentFragment(), r.starRating));
            dealPriceNode.appendChild(document.createTextNode("  " + r.currency + " " + r.dealPrice));
            bottomCaptionNode.appendChild(dealPriceNode);
            bottomCaptionNode.appendChild(createStyledElement("div", "clearfix"));
            thumbnailNode.appendChild(bottomCaptionNode);
            containerNode.appendChild(thumbnailNode);*/


            fragment.appendChild(containerNode);
        }

        fragment.appendChild(createStyledElement("div", "clearfix"));
        return fragment;
    };

    function buildStarFragment(frag, rating) {
        for (var i = 5; i >= 1; i--) {
            frag.appendChild(createStyledElement("span", (5 - rating >= i) ? "glyphicon glyphicon-star-empty" : "glyphicon glyphicon-star"));
        };
        return frag;
    };

    /**
     * a util function which creates element using the given
     *  tag and className
     * @param  {[type]} tag - example: "div"
     * @param  {[type]} className
     * @return {[type]} returns the HTMLElement
     */
    function createStyledElement(tag, className) {
        var el = document.createElement(tag);
        if (className)
            el.className = className;
        return el;
    };

    function clearContainer(c) {
        while (c.hasChildNodes())
            c.removeChild(c.firstChild);
        return c;
    };


    /**
     * Gets the data, applies some filter,
     * construct the DOMFragment, clears the container
     * and appends the DOMFragment to the container.
     * 
     * @param  {[type]} d
     * @param  {[type]} filter
     * @param  {[type]} container
     * @param  {[type]} template
     * @return {[type]}
     */
    function showData(d, filter, container, template) {
        results = d.slice(0);
        temp = template;

        if (filter === "star_rating") {
            results.sort(function(a, b) {
                return b.starRating - a.starRating;
            });
        } else if (filter === "dist") {
            results.sort(function(a, b) {
                return a.dist - b.dist;
            });
        }
        clearContainer(container).appendChild(constructDOMFragment());
    };

    /**
     * Expose only this method which is the
     * bread and butter of this function
     */
    return {
        showData: showData
    };

})(window);

window.onload = function() {
    var select = document.getElementById("location"),
        container = document.querySelector(".result-container"),
        template = document.querySelector(".template").innerHTML;

    dataRenderer.showData(DATA, select.options[select.selectedIndex].value, container, template);

    addEvent(select, "change", function() {
        dataRenderer.showData(DATA, select.options[select.selectedIndex].value, container, template);
    });
};
