App.CourseFormController = Ember.ObjectController.extend({
    currentCourse: null
	,actions: {
		save: function(){
			var course = this.get('currentCourse');
			App.applicationController.save(course);
		}
	}
	,initialize: function(){
		 this.set("currentCourse",App.CourseModel.create());
	}
});
App.courseformController = App.CourseFormController.create();