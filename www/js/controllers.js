angular.module('starter.controllers', [])
    .controller('GenresCtrl', function($scope,$stateParams,Authors) {
        $scope.authors = Authors.getAuthorsByGenre($stateParams.genre);
        $scope.genre = $stateParams.genre;
    })
    .controller('BooksCtrl', function($scope,$state, Authors) {
        Authors.getAuthors().then(function (data) {$scope.authors = data.data;});
    })
    .controller('BookDetailCtrl', function($scope, $stateParams, Authors) {
        $scope.book = Authors.getBook($stateParams.authorId,$stateParams.bookId);
        $scope.author = Authors.get($stateParams.authorId);
    })

    .controller('AuthorsCtrl', function($scope,Authors) {
        Authors.getAuthors().then(function (data) {$scope.authors = data.data;});
    })

    .controller('AuthorDetailCtrl', function($scope,$stateParams,Authors) {
        $scope.author = Authors.get($stateParams.authorId);
    })
;
