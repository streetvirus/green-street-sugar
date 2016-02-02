(function(window, $, Modernizr, undefined){
  
  var _   = require('underscore');
  var AF  = require('request-frame');
  var rAF = AF('request');
  var cAF = AF('cancel');

  require('./components/SvOverlay');

  var smoothScroll = require('smooth-scroll'); // https://github.com/cferdinandi/smooth-scroll

  // Component Classes
  var ContactForm             = require('./components/ContactForm');
  var DesktopStrainStickiness = require('./components/desktopStrainStickiness');
  var MobileStrainStickiness  = require('./components/mobileStrainStickiness');
  var MobileStrainSlider      = require('./components/mobileStrainSlider');

  // Cached Elements
  var $win       = $(window);
  var $doc       = $(document);
  var $body      = $(document.body);

  // Misc. Variables
  var contactForm; // Instance of ContactForm.  Set in `initialize`
  var bp = { // Update these if they change in _variables.scss
    xs : 480,
    sm : 768,
    md : 992,
    lg : 1200
  };

  function initialize() {
    
    contactForm = new ContactForm( $('form#contact') );

    smoothScroll.init({
      speed: 800,
      easing: 'easeOutCubic',
      updateURL: false
    });

    DesktopStrainStickiness.init();
    MobileStrainStickiness.init();
    MobileStrainSlider.init();

    attachHandlers();

    $win.trigger('resize');
  }

  function attachHandlers() {
    $doc.scroll(scrollHandler);
    $win.resize(_.debounce(resizeHandler, 100));

    $('#overlay-contact').on('shown.overlay', function(){
      contactForm.focus();
    })
    .on('hidden.overlay', function(){
      contactForm.reset();
    });

  }
  
  function scrollHandler(e) {
    // rAF(function(){});
  }

  function resizeHandler(e) {
    // console.log('calling resizeHandler ' + Date.now());
    breakpointCheck();
  }

  function breakpointCheck() {
    // Pause the strain scroll stuff while not visible
    if(window.innerWidth >= bp.sm){
      DesktopStrainStickiness.unpause();
      MobileStrainStickiness.pause();
    } else {
      DesktopStrainStickiness.pause();
      MobileStrainStickiness.unpause();
    }
  }

  // DOM Ready
  $( initialize )

})(window, jQuery, Modernizr);
