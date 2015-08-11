var main = function(){
  // show drop down menu
  $(".dropdown-toggle").click(function(){
    $(".dropdown-menu").toggle()
  })

  // arrow-next to switch slides
  $('.arrow-next').click(function(){
    var currentSlide = $(".active-slide")
    var nextSlide = currentSlide.next()
    // wrap around to the 1st slide
    if (nextSlide.length === 0) {
      nextSlide = $('.slide').first()
    }
    // animation effect
    currentSlide.fadeOut(600).removeClass("active-slide")
    nextSlide.fadeIn(600).addClass("active-slide")
    // update dots
    var currentDot = $('.active-dot')
    var nextDot = currentDot.next()
    if (nextDot.length === 0) {
      nextDot = $('.dot').first
    }
    currentDot.removeClass('active-dot')
    nextDot.addClass('active-dot')
  })

  // arrow-previous to switch slides
  $('.arrow-prev').click(function(){
    var currentSlide = $('.active-slide')
    var prevSlide = currentSlide.prev()
    // wrap around to the 1st slide
    if (prevSlide.length === 0) {
      prevSlide = $('.slide').last()
    }
    // animation effect
    currentSlide.fadeOut(600).removeClass("active-slide")
    prevSlide.fadeIn(600).addClass("active-slide")
    // update dots
    var currentDot = $('.active-dot')
    var prevDot = currentDot.prev()
    if (prevDot.length === 0) {
      prevDot = $('.dot').last()
    }
    currentDot.removeClass('active-dot')
    prevDot.addClass('active-dot')
  })
}
$(document).ready(main)
