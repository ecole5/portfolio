import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('projects');
  this.route('blog', function () {
    this.route('post', { path: '/:series_id/:post_id' });
  });


  this.route('contact');


});

export default Router;
