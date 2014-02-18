App.CreateCourseRoute = Ember.Route.extend({
	model: function () {
		App.TeachersController.initialize();
		var course = App.CourseModel.create();
		return course;
    }
});