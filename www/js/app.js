// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            .state('tab.books', {
                url: '/books',
                views: {
                    'tab-books': {
                        templateUrl: 'templates/tab-books.html',
                        controller: 'BooksCtrl'
                    }
                }
            })
            .state('tab.book-detail', {
                url: '/book/:authorId/:bookId',
                views: {
                    'tab-books': {
                        templateUrl: 'templates/tab-book-detail.html',
                        controller: 'BookDetailCtrl'
                    }
                }
            })
            .state('tab.genres', {
                url: '/genres/:genre',
                views: {
                    'tab-books': {
                        templateUrl: 'templates/tab-books.html',
                        controller: 'GenresCtrl'
                    }
                }
            })
            .state('tab.authors', {
                url: '/authors',
                views: {
                    'tab-authors': {
                        templateUrl: 'templates/tab-authors.html',
                        controller: 'AuthorsCtrl'
                    }
                }
            })
            .state('tab.author-detail', {
                url: '/author/:authorId',
                views: {
                    'tab-authors': {
                        templateUrl: 'templates/tab-author-detail.html',
                        controller: 'AuthorDetailCtrl'
                    }
                }
            })
            ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/books');

    });
