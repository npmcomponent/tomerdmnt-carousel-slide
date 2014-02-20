*This repository is a mirror of the [component](http://component.io) module [tomerdmnt/carousel-slide](http://github.com/tomerdmnt/carousel-slide). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/tomerdmnt-carousel-slide`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# carousel-slide

  Simple carousel [component](http://github.com/component/component) with slide transition.
  Based on [tomerdmnt/carousel](http://github.com/tomerdmnt/carousel)

  ```html
    <div id="myCarousel">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  ```

  ```js
    var Carousel = require('carousel-slide');
    var c = Carousel(document.getElementById('myCarousel');

    // show next item
    c.next();

    // show previous item
    c.prev();
  ```

## Installation

    $ component install tomerdmnt/carousel

## API

### (el)

Binds to the container element of the carousel.

### next()

Show the next item. if there is none returns null.

### prev()

Show the previous item. if there is none returns null.

## License

  MIT

