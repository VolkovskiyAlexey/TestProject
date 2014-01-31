var user = require('connect-roles');

module.exports = function(app) {

  app.get('/', user.can('readHomePage'), require('./frontpage').get);


  /**
   * User CRUD
   */

  app.get('/user', require('./user').list);
  app.get('/user/:id', require('./user').read);
  app.get('/user/create', require('./user').create);
  app.get('/user/:id/update', require('./user').update);
  app.get('/user/:id/delete', require('./user').del);

  app.post('/user/create', require('./user').create);
  app.put('/user/:id', require('./user').update);
  app.delete('/user/:id', require('./user').del);


  /**
   * Project CRUD
   */
/*
  app.get('/project', user.can('readProjectList'), require('./project').list);
  app.get('/project/:id', user.can('readProject'), require('./project').read);
  app.get('/project/create', user.can('createProject'), require('./project').create);
  app.get('/project/:id/update', user.can('updateProject'), require('./project').update);
  app.get('/project/:id/delete', user.can('deleteProject'), require('./project').del);

  app.post('/project/create', user.can('createProject'), require('./project').create);
  app.put('/project/:id', user.can('updateProject'), require('./project').update);
  app.delete('/project/:id', user.can('deleteProject'), require('./project').del);
*/

  /**
   * Milestone CRUD
   */
/*
  app.get('/milestone', user.can('readMilestoneList'), require('./milestone').list);
  app.get('/milestone/:id', user.can('readMilestone'), require('./milestone').read);
  app.get('/milestone/create', user.can('createMilestone'), require('./milestone').create);
  app.get('/milestone/:id/update', user.can('updateMilestone'), require('./milestone').update);
  app.get('/milestone/:id/delete', user.can('deleteMilestone'), require('./milestone').del);

  app.post('/milestone/create', user.can('createMilestone'), require('./milestone').create);
  app.put('/milestone/:id', user.can('updateMilestone'), require('./milestone').update);
  app.delete('/milestone/:id', user.can('deleteMilestone'), require('./milestone').del);
*/



  //app.get('/login', require('./login').get);
  //app.post('/login', require('./login').post);

  //app.post('/logout', require('./logout').post);

};
