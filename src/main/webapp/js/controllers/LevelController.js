App.LevelController = Ember.ArrayController.create({
     store: App.LevelStore.create()
    ,currentResult: null
    ,read: function(){
    	this.set('currentResult', this.store.read());
    	if(!this.currentResult.errorCode){
    		var array = Ember.ArrayController.create({content: []});
    		this.currentResult.forEach(function(item, index){
    			console.log(item);
    			array.pushObject(App.LevelModel.create({ 'name' : item}));
    		});
    		return array;
    	}
    	else{
    		return Ember.ArrayController.create({content:[]});
    	}
    }
	,levels: Ember.ArrayController.create({content:[]})
	,initialize: function(){
		var array = this.read();
		this.set('levels',array);
	}
});