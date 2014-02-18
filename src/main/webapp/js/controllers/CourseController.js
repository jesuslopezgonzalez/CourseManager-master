App.CourseController = Ember.Controller.extend({
	store: App.CourseStore.create()
   ,currentResult: null
   ,currentCourse: null
   ,create: function (course) {
       this.set('currentResult', this.get('store').create(course));
       if (!this.currentResult.errorCode) {
           this.set('currentCourse', App.CourseModel.create());
       }
   }
   ,save: function (course) {
       if (!course.pk_course) { // create
           this.create(course);
       }
       else { // edit
           this.update(course);
       }
   }
   ,read: function () {
	    this.set('currentResult', this.store.read(this.get('offset'),this.get('maxResults')));
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
  ,actions:{
	  prevPage:function(){
		  var maxResults = this.get('maxResults');
	  	  var offset = this.get('offset') - maxResults;
		  if(this.get('offset') >0){
			  this.get('courses').set('sortProperties','');
			  this.get('courses').clear();
			  this.get('courses').pushObjects(this.store.read(offset,maxResults));
			  this.set('offset',offset);
		  }
	  }
  	 ,nextPage:function(){
  		var maxResults = this.get('maxResults');
  		var offset = this.get('offset') + maxResults;
  		var results = this.store.read(offset,maxResults);
  		if(results.length > 0){
  			this.get('courses').set('sortProperties','');
	  		this.get('courses').clear();
			this.get('courses').pushObjects(results);
			this.set('offset',offset);
  		}
  	 }
  }
  ,offset: 0 
  ,maxResults: 5
  ,order: function(){
	  this.get('courses').set('sortProperties', ['title']);
	  this.get('courses').toggleProperty('sortAscending');
  }
  ,courses: Ember.ArrayController.create({ content: [] })
  ,initialize: function () {
      var array = this.read();
      this.set('courses', array);
      return this.get('courses');
  }
});
App.applicationController = App.CourseController.create();