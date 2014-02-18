App.CreateCourseRoute = Ember.Route.extend({
	model: function () {
		App.TeachersController.initialize();
		App.LevelController.initialize();
		var course = App.CourseModel.create();
		return course;
    }
});