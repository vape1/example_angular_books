angular.module('starter.controllers', [])
    .controller('GenresCtrl', function($scope,$stateParams,Authors) {
        $scope.authors = Authors.getAuthorsByGenre($stateParams.genre);
        $scope.genre = $stateParams.genre;
    })
    .controller('BooksCtrl', function($scope,$state, $stateParams, Authors) {
        $scope.authors = Authors.getAll();
        if(!$scope.authors.length) {
            Authors.getAuthors().then(function (data) {
                $scope.authors = data.data;
            });
        }
    })
    .controller('BookDetailCtrl', function($scope, $stateParams, Authors) {
        $scope.book = Authors.getBook($stateParams.authorId,$stateParams.bookId);
        $scope.author = Authors.get($stateParams.authorId);
    })

    .controller('AuthorsCtrl', function($scope,Authors,$ionicPopover) {
        $scope.authors = Authors.getAll();
        if(!$scope.authors.length) {
            Authors.getAuthors().then(function (data) {$scope.authors = data.data;});
        }
        $ionicPopover.fromTemplateUrl('templates/popover-author.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.popover = popover;

        });
        $scope.showPopover = function ($event, author) {
                $scope.popover.author = author;
                $scope.popover.show($event);
        };
    })

    .controller('AuthorDetailCtrl', function($scope,$stateParams,Authors) {
        $scope.author = Authors.get($stateParams.authorId);
    })
;
