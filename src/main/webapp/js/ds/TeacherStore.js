App.TeacherStore = Ember.Object.extend({
  read: function ()
  {
      var message = null;
      var xhr = $.ajax(
          {
              url: './teacher/read/',
              dataType: 'json',
              contentType: 'application/json; charset=utf-8',
              type: 'GET',
              async: false,
              success: function (data) {
                  message = data;
              }
          });

      if (xhr.status != 200) { // error
          message = { errorCode: xhr.status, errorMessage: xhr.statusText };
      }

      return message;
  }
});