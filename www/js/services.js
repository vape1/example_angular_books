angular.module('starter.services', [])
    .factory('Authors', function($http) {
        var authors = [];
        return {
            getAuthors: function () {
                ////возможно правильно было бы вынести books и genre в отдельные файлы...
                return $http.get('/data/authors.json')
                    .then(function (result) {
                        authors = result.data;
                        return result;
                    });
            },
            get: function(authorId) {
                for (var i = 0; i < authors.length; i++) {
                    if (authors[i].id === parseInt(authorId)) {
                        return authors[i];
                    }
                }
                return null;
            },
            getBook: function(authorId,bookId) {
                for (var i = 0; i < authors.length; i++) {
                    if (authors[i].id === parseInt(authorId) && authors[i].books) {
                        console.log(authors[i].books)
                        for (var y = 0; y < authors[i].books.length; y++) {
                            if (authors[i].books[y].id === parseInt(bookId)){
                                return authors[i].books[y];
                            }
                        }
                    }
                }
                return null;
            },
            getAuthorsByGenre: function(genre) {
                var authors_genre = [];
                for (var i = 0; i < authors.length; i++) {
                    var books = authors[i].books;
                    var books_genre = [];
                    for (var y = 0; y < books.length; y++) {
                        if (books[y].genre === genre){
                            books_genre.push(books[y]);
                        }
                    }
                    if(books_genre.length) {
                        authors[i].books = books_genre;
                        authors_genre.push(authors[i]);
                    }
                }
                return authors_genre;
            }
        };
    });
