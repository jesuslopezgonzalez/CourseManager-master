App.CourseController = Ember.ObjectController.extend({
	store: App.CourseStore.create()
   ,currentResult: null
   ,currentCourse: null
   ,create: function (course) {
       this.set('currentResult', this.get('store').create(course));
       if (!this.currentResult.errorCode) {
           this.set('currentCourse', App.Course.create());
           var newCourse = App.CourseModel.create(this.get('currentResult'));
           this.get('course').pushObject(newCourse);
       }
   }
   ,save: function (course) {
	   console.log("11")
	   console.log(course);
       if (!course.pk_course) { // create
           this.create(course);
       }
       else { // edit
           this.update(course);
       }
   }
   ,read: function (id) {
	    this.set('currentResult', this.store.read(id));
	    if (!this.currentResult.errorCode) {
	        if (Ember.isArray(this.currentResult)) { // Read all
	            var array = Ember.ArrayController.create({ content: [] });
	            this.currentResult.forEach(function (item, index) {
	                array.pushObject(App.CourseModel.create(item));
	            });
	            return array;
	        }
	        else { // An object
	            var course = this.get('courses').findProperty('pk_course', this.currentResult.pk_course)
	            course && course.setProperties(this.currentResult);
	            return course;
	        }
	    }
	    else { // Empty result
	        return id ? null : Ember.ArrayController.create({ content: [] });
	    }
	}
   ,courses: Ember.ArrayController.create({ content: [] })
   ,initialize: function () {
       var array = this.read();
       this.set('courses', array);
       return this.get('courses');
   }
});
App.applicationController = App.CourseController.create();