/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', async () => {
  return { hello: 'world' };
});

Route.post('add', 'EventsController.add').as('add-new-event');
Route.post('update', 'EventsController.update').as('update-an-event');
Route.post('delete', 'EventsController.delete').as('delete-an-event');
Route.get('fetch', 'EventsController.fetch').as('fetch-an-event');
Route.get('fetch-all', 'EventsController.fetchAll').as('fetch-all-event');
