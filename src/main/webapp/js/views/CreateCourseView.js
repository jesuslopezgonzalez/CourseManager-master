App.CreateCourseView = Ember.View.extend({
	Title: 'Añadir curso'
	,template: getView('create_course')
    ,name: "CreateCourseView"
	,didInsertElement: function(){
		this.$("#spinner").spinner();
	}
});