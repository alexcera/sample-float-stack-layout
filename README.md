###Sample Search/Filter Page
===

#####What is this?
> This is an experimental page which uses twitter-bootstrap for the UI and pure-javascript for the simple implementation of the interactions.
> It is a simple page which mimics the page of deals-site.
> This has limited functionality and all the images and data are hard-coded.

===
#####Where can I see it?
[Live Demo](http://alexcera.github.io/sample-float-stack-layout/)

===
#####Tech-Stack
* [Twitter Bootstrap](http://getbootstrap.com)
* `Javascript`
* `HTML5/CSS`

===
#####Some Thoughts on Implementation
* A single panel of hotel-thumbnail <img src="https://raw.githubusercontent.com/alexcera/sample-float-stack-layout/gh-pages/img/screens/screenshot-thumbnail.png" height="100" width="100"></img> is implemented using simple template which is embedded on the `html` page itself.
```html
<!-- THIS IS THE TEMPLATE -->
    <div class="pull-left col-xs-4 template" style="display: none;">
        <div class="thumbnail">
            <div class="caption">
                <h5>#TITLE#</h5>
            </div>
            <img class="img-responsive" src="#IMGURL#" alt="#ALT#">
            <div class="caption">
                <span class="glyphicon glyphicon-star-empty"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
                <h3 class="pull-right">
                    <small>
                        <s>#CURRENCY# #PRICE#</s>
                    </small>#CURRENCY# #DEALPRICE#</h3>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
```

> > and this is being populated by `replace` function of javascript and passed down to a `DocumentFragment` before appending to the `DOM` itself.
