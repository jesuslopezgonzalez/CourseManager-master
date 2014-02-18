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
  ,read: function (startPosition,maxResults)
  {
      var message = null;
      var xhr = $.ajax(
          {
              url: './course/read/'+startPosition+'/'+maxResults,
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