App.CourseListTitleOrderView = Ember.View.extend({
	click: function(event){
		App.applicationController.order();
	}
});