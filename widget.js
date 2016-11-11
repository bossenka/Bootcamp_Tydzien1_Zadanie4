$('#add').on('click', function() {
   var guestName = $('#name').val();
   if (guestName != "") {
     $('<li>' + guestName + '</li>').appendTo('#guests');
     $('#name').val('');
   }
});
