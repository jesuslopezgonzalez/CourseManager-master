App.CreateCourseController = Ember.ObjectController.extend({
	actions: {
	    save: function(course){
	      course.set("active",(($("INPUT:checked").length==0) ? false : true));
	      App.applicationController.save(course);
	      this.transitionToRoute('courseList');
	    }
	}
});