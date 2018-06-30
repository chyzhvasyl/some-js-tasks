;(function(){

    var block = 'filter-block';
    $.fn.filterPlugin = function(options){

        var defaults = $.extend({
            filter: 'blur(10px)'
        }, options);

        var img = this.css('background-image');
        this.parent().prepend('<div class="'+block+'">');
        // $('.'+block).css('background-image', img);
        $('.'+block).css({
            'filter': defaults.filter,
            'background-image': img
        });
    }

}());