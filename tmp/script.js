(function() {
  $(function() {
    return $('div.params').on('click', 'a', function() {
      $(this).parent().find($('a')).removeClass('select');
      return $(this).addClass('select');
    });
  });

}).call(this);
