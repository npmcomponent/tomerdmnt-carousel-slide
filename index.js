var Carousel = require('tomerdmnt-carousel')
  , inherit = require('component-inherit')
  , classes = require('component-classes');

module.exports = CarouselSlide;
inherit(CarouselSlide, Carousel);

function CarouselSlide(el, opts) {
  if (!(this instanceof CarouselSlide)) return new CarouselSlide(el, opts);
  Carousel.call(this, el, opts);

  this.forEach(function (item) {
    setTimeout(function () {
      classes(item).add('carousel-slide');
    }, 0);
  })
}
