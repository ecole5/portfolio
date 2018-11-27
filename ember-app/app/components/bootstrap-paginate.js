import Component from '@ember/component';

export default Component.extend({
    next: false, //false until proven true
    prev: false,
    activeIndex: null,

    didReceiveAttrs() {
        this._super(...arguments);
        this.set('errors', []);


        var links = this.get('links');
        var currentPost = this.get('post_title')

        for (var i = 0; i < links.length; i++) {
            console.log(currentPost);
            console.log(links[i]);
            if (links[i] == currentPost) {
                this.set('activeIndex', i);
                if (i > 0) {
                    this.set('prev', links[i - 1]);
                }
                else {
                    this.set('prev', false);
                }
                if (i < links.length - 1) { //set next if not last index
                    this.set('next', links[i + 1]);
                }
                else {
                    this.set('next', false);
                }
            }
        }


    }



});
