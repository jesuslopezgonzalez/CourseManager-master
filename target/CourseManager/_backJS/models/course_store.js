App.CourseStore = Ember.Object.extend({
	create: function (course) {
        var message = null;
        var xhr = $.ajax(
            {
                url: './course/create/',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(course),
                type: 'POST',
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
  ,read: function (pk_course) // !id read all
  {
      var message = null;
      var xhr = $.ajax(
          {
              url: './course/read/',
              dataType: 'json',
              contentType: 'application/json; charset=utf-8',
              data: JSON.stringify({ 'pk_course': pk_course }),
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