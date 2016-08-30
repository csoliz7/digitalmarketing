<?php
// Routes

$app->get('/', function ($request, $response) {
    // Render index view
    return $this->view->render($response, 'index.twig');
});

$app->get('/solution', function ($request, $response) {
    return $this->view->render($response, 'solution.twig');
});

$app->get('/work', function($request, $response) {
  return $this->view->render($response, 'work.twig');
});

$app->get('/contact', function($request, $response) {
  return $this->view->render($response, 'contact.twig');
});
