App.TeachersController = Ember.ArrayController.create({
	 store: App.TeacherStore.create()
	,currentResult: null
	,read: function () {
	    this.set('currentResult', this.store.read());
	    if (!this.currentResult.errorCode) {
	        var array = Ember.ArrayController.create({ content: [] });
	        this.currentResult.forEach(function (item, index) {
	        	array.pushObject(App.TeacherModel.create(item));
	        });
	        return array;
	    }
	    else { // Empty result
	        return Ember.ArrayController.create({ content: [] });
	    }
	}
	,teachers: Ember.ArrayController.create({ content: [] })
	,initialize: function () {
		var array = this.read();
		this.set('teachers', array);
    }
});