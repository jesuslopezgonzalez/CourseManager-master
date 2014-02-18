App.CourseListRoute = Ember.Route.extend({
	model: function () {
		this.set('controller',App.applicationController);
        return App.applicationController.initialize();
    }
	,nextPage: function(){
		console.log("!!!!")
	}
});