App.CourseListView = Ember.View.extend({
	Title: 'Cat�logo de cursos'
	,template: getView('course_list')
    ,name: "CourseListView"
    ,init: function () {
        this._super();
        this.set("controller",App.applicationController);
    }
	
});