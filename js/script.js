(function($) {
  $.modal.defaults = {
    overlay: "#000",        // Overlay color
    opacity: 0.75,          // Overlay opacity
    zIndex: 1,              // Overlay z-index.
    escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
    clickClose: true,       // Allows the user to close the modal by clicking the overlay
    closeText: 'Close',     // Text content for the close <a> tag.
    closeClass: '',         // Add additional class(es) to the close <a> tag.
    showClose: true,        // Shows a (X) icon/link in the top-right corner
    modalClass: "modal",    // CSS class added to the element being displayed in the modal.
    spinnerHtml: null,      // HTML appended to the default spinner during AJAX requests.
    showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
    fadeDuration: 200,      // Number of milliseconds the fade transition takes (null means no transition)
    fadeDelay: 1.0          // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
  };

  $(function() {
    if (window.location.search === '?thanks') {
      $('#thanks').modal();
    }

    if (window.location.pathname === '/contact/') {
      $('#submit').on('click', function(e) {

        var $email = $("[type='email']");
        var $msg   = $("textarea");
        var errorMsg = '';
        var errorStyle = {'border': '1px solid red'};

        if ($email.val() === '' && $msg.val() === '') {
          errorMsg = "Email and Message fields are both required";
          $email.css(errorStyle);
          $msg.css(errorStyle);
        }
        else if ($email.val() === '') {
          errorMsg = "Email field is required";
          $email.css(errorStyle);
          $msg.css({'border-color' : '#eee'});
        }
        else if ($msg.val() === '') {
          errorMsg = "Message field is required";
          $email.css({'border-color' : '#eee'});
          $msg.css(errorStyle);
        }
        else {
          $email.css({'border-color' : '#eee'});
          $msg.css({'border-color' : '#eee'});
        }

        if (errorMsg !== '') {
          e.preventDefault();
        }
      });
    }
  });
})(jQuery);