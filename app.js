var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', '$timeout','$log', function($scope, $mdSidenav, studentService, $timeout, $log) {
  var allStudents = [];
  
  $scope.subgroups = [1,2,3];
  $scope.selectedsubgroups = [1,2,3];
  $scope.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx >-1) {
      list.splice(idx, 1);
    } else {
      list.push(item);
    }
  };
  $scope.exists = function(item, list) {
    return list.indexOf(item) > -1;
  };

    $scope.filterBySubgroup = function (student) {
        return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    }

  
  $scope.selected = null;
  $scope.students = allStudents;
  $scope.selectStudent = selectStudent;
  $scope.toggleSidenav = toggleSidenav;
  
  loadStudents();
  
  function loadStudents() {
    studentService.loadAll()
      .then(function(students){
        allStudents = students;
        $scope.students = [].concat(students);
        $scope.selected = $scope.students[0];
      })
  };
  
  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  };
  
  function selectStudent(student) {
    $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
    $scope.toggleSidenav('left');
  };
  
  
  
  
}])


app.service('studentService', ['$q', function($q) {
  //162.1
  var students = [{
      name: 'Victoria Raba',
      subgroup: 1,
      photo: 'images/students/victoria_raba.jpg',
      websiteUrl: 'http://viktoriaraba.github.io/weather/',
      codeSourceUrl: 'https://github.com/viktoriaraba/weather',
      cvUrl: 'https://github.com/viktoriaraba/wheather/blob/master/CV.doc'
  }, {
      subgroup: 1,
      name: 'Orest Sarabun',
      websiteUrl: 'http://c0r5a1r.github.io/TheWhether/',
      codeSourceUrl: 'https://github.com/c0r5a1r/TheWhether',
      cvUrl: null,
      photo: 'images/students/orest_sarabun.jpg'
  }, {
      subgroup: 1,
      name: 'Olga Nagorna',
      websiteUrl: 'http://olganagorna.github.io/sunnyvacation/',
      codeSourceUrl: 'https://github.com/olganagorna/sunnyvacation/tree/gh-pages',
      cvUrl: null,
      photo: 'images/students/olga_nagorna.jpg'
  }, {
      subgroup: 1,
      name: 'Nazar Kret',
      websiteUrl: '',
      codeSourceUrl: 'https://github.com/NazarKret/homework/tree/gh-pages',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }, {
      subgroup: 1,
      name: '',
      websiteUrl: '',
      codeSourceUrl: '',
      cvUrl: null,
      photo: 'images/students/'
  }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(students);
      }
  };
}]);
