var app = angular.module('halfmarathon', []);

var people = null;

app.controller('votingController', function($scope, $http) {

    $scope.totalVotes = 0;


    $scope.people = [{
            name: "Miles",
            votes: "72"
        },
        {
            name: "Amanda",
            votes: "31"
        },
        {
            name: "Jarvis",
            votes: "45"
        },
        {
            name: "Kalyn",
            votes: "74"
        },
        {
            name: "Maggie",
            votes: "818"
        },
        {
            name: "Nathan",
            votes: "242"
        },
        {
            name: "Rachel",
            votes: "638"
        },
        {
            name: "Ross",
            votes: "23"
        },
        {
            name: "Trevor",
            votes: "453"
        }
    ];

    for (var i = 0; i < $scope.people.length; i++) {
        $scope.totalVotes = $scope.totalVotes + parseInt($scope.people[i].votes);
    }



$scope.voteFor = function() {
$http.post('http://mtpweekend.com/halfmarathon/php/voteFor.php', { name: $scope.selectPeople.name }).
success(function(data, status, headers, config) {
    for (var i = 0; i < $scope.people.length; i++) {
        if ($scope.people[i].name == $scope.selectPeople.name) {
            $scope.people[i].votes = parseInt($scope.people[i].votes) + 1;
            $scope.totalVotes = parseInt($scope.totalVotes) + 1;
        }
    }
}).
error(function(data, status, headers, config) {
    alert("Sorry there seems to be an error :(");
});
};

});


$(document).ready(function() {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


});