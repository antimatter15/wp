jQuery(document).ready(function($){
  $('.cat-checklist')
    .prepend(
      '<li><label class="selectit"><input value="1" type="checkbox" name="remove_categories" id="remove_categories"/> Remove Categories</label></li>'
    );
});

