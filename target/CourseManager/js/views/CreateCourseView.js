App.CreateCourseView = Ember.View.extend({
	Title: 'A�adir curso'
	,template: getView('create_course')
    ,name: "CreateCourseView"
	,didInsertElement: function(){
		this.$("#spinner").spinner();
	}
});