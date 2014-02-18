App.Router.map(function(){
	this.resource('courses',{ path :'/' }, function(){
	});
	this.resource("courseForm");
});

App.CoursesRoute = Ember.Route.extend({
	model: function(){
		return App.applicationController.initialize();
	}
});

App.CourseFormRoute = Ember.Route.extend({
	model: function(){
		App.TeachersController.initialize();
		this.set("controller",App.courseformController);
	}
	,save : function(){
    // here you could perform your actions like persisting to the server or so
    alert("now we can submit the model:" + this.get("model"));
	}
});