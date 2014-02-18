App = Ember.Application.create();
function getView(name) {
    var template = '';
    $.ajax(
            {
                url: './js/templates/' + name + '.handlebars',
                async: false,
                success: function (text) {
                    template = text;
                }
            });
    return Ember.Handlebars.compile(template);
};