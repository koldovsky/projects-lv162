var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function($scope, $mdSidenav, studentService) {
  var allStudents = [];
  
  $scope.subgroups = [1,2];
  $scope.selectedsubgroups = [1,2];
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
    };
  
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
  }
  
  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }
  
  function selectStudent(student) {
    $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
    $scope.toggleSidenav('left');
  }

}]);

app.service('studentService', ['$q', function($q) {
  var students = [{
      subgroup: 2,
      name: 'Alina Boiarchuk',
      websiteUrl: 'http://aboyarchuk.github.io/pogoda/',
      codeSourceUrl: 'https://github.com/aboyarchuk/pogoda',
      cvUrl: '',
      photo: 'images/students/alina_boiarchuk.jpg'
  }, {
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
      cvUrl: 'https://yadi.sk/d/G1wtMCjWitBM7',
      photo: 'images/students/olga_nagorna.jpg'
  }, {
      subgroup: 1,
      name: 'Nazar Kret',
      websiteUrl: 'http://nazarkret.github.io/homework',
      codeSourceUrl: 'https://github.com/NazarKret/homework/tree/gh-pages',
      cvUrl: 'https://github.com/NazarKret/homework/blob/gh-pages/CV%20and%20Photo/%D0%9A%D1%80%D0%B5%D1%82%20%D0%9D%D0%B0%D0%B7%D0%B0%D1%80-%D1%80%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5.pdf',
      photo: 'images/students/nazar_kret.jpg'
  }, {
      subgroup: 1,
      name: 'Volodymyr Sekh',
      websiteUrl: 'http://mrdevsv.github.io/myweather.ua/',
      codeSourceUrl: 'https://github.com/MrDevSV/myweather.ua/tree/gh-pages',
      cvUrl: 'http://mrdevsv.github.io/resume/',
      photo: 'images/students/volodymyr_sekh.jpg'
  }, {
      subgroup: 1,
      name: 'Vitaliy Andrianov',
      websiteUrl: 'http://andrianovv.github.io/weather',
      codeSourceUrl: 'https://github.com/andrianovv/weather.git',
      cvUrl: 'https://github.com/andrianovv/weather/blob/gh-pages/Resume%20Andrianov%20Vitali.pdf',
      photo: 'images/students/vitaliy_andianov.jpg'
  }, {
      subgroup: 1,
      name: 'Oleh Kapral',
      websiteUrl: 'http://kapraloleh.github.io/Weather/index.html',
      codeSourceUrl: 'https://github.com/KapralOleh/Weather',
      cvUrl: '',
      photo: 'images/students/oleh_kapral.jpg'
  }, {
      subgroup: 1,
      name: 'Bohdana Filimon',
      websiteUrl: 'http://danafil.github.io/weatherApp',
      codeSourceUrl: 'https://github.com/danafil/weatherApp',
      cvUrl: 'https://dochub.com/bohdanakleputs/18pyxQ/filimonbohdana-resume',
      photo: 'images/students/bohdana_filimon.jpg'
  }, {
      subgroup: 1,
      name: "Nataliia Korchyns'ka",
      websiteUrl: 'http://nata7890.github.io/weather3',
      codeSourceUrl: 'https://github.com/nata7890/weather3.git',
      cvUrl: '',
      photo: 'images/students/natalia_korchynska.jpg'
  }, {
      subgroup: 1,
      name: 'Mykola Kudlyk',
      websiteUrl: 'http://webmint.github.io/weathercast/',
      codeSourceUrl: 'https://github.com/webmint/weathercast/tree/gh-pages',
      cvUrl: 'https://www.dropbox.com/s/dww9k755mi9suor/CV_Mykola_Kudlyk_en.pdf?dl=0',
      photo: 'images/students/mykola_kudlyk.jpg'
  }, {
      subgroup: 1,
      name: 'Mykola Fedan',
      websiteUrl: 'http://kolja153.github.io/weather/',
      codeSourceUrl: 'https://github.com/Kolja153/weather',
      cvUrl: '',
      photo: 'images/students/mykola_fedan.jpg'
  }, {
      subgroup: 2,
      name: 'Vitalii Shabat',
      websiteUrl: 'http://shabat.github.io/Weather_Site/',
      codeSourceUrl: 'https://github.com/shabat/Weather_Site',
      cvUrl: '',
      photo: 'images/students/vitalii_shabat.jpg'
  }, {
      subgroup: 2,
      name: 'Taras Lahotskyy',
      websiteUrl: 'http://lahotskyy.github.io/weather',
      codeSourceUrl: 'https://github.com/lahotskyy/weather',
      cvUrl: '',
      photo: 'images/students/taras_lahotskyy.jpg'
  }, {
      subgroup: 2,
      name: 'Roman	Buryy',
      websiteUrl: 'http://romanburyy.github.io/Weather_v2/',
      codeSourceUrl: 'https://github.com/RomanBuryy/Weather_v2',
      cvUrl: 'https://drive.google.com/file/d/0B7zRTa5W4jtOd1BIdFVsQk5fNWc/view?usp=sharing',
      photo: 'images/students/roman_buryy.jpg'
  }, {
      subgroup: 2,
      name: 'Oleh Kyliushyk',
      websiteUrl: 'http://slowflow.github.io/sample/',
      codeSourceUrl: 'https://github.com/Slowflow/sample.git',
      cvUrl: '',
      photo: 'images/students/oleh_kyliushyk.jpg'
  }, {
      subgroup: 2,
      name: 'Bohdan Holovatyi',
      websiteUrl: 'http://golovatiybogdan.github.io/work_weather',
      codeSourceUrl: 'https://github.com/golovatiybogdan/work_weather.git',
      cvUrl: 'https://drive.google.com/file/d/0B2Wt14oxEX-AOXl2TXhuXzJCQUk/view?usp=sharing',
      photo: 'images/students/bohdan_holovatyi.jpg'
  }, {
      subgroup: 2,
      name: 'Anton Romaniv',
      websiteUrl: 'http://antonmayer.github.io/WeatherForecast/',
      codeSourceUrl: 'https://github.com/AntonMayer/WeatherForecast/tree/gh-pages',
      cvUrl: 'https://github.com/AntonMayer/WeatherForecast/blob/gh-pages/CV/CV.pdf',
      photo: 'images/students/anton_romaniv.jpg'
  }, {
      subgroup: 2,
      name: 'Iryna Mocherniuk',
      websiteUrl: 'http://imocherniuk.github.io/weather_for_kids/',
      codeSourceUrl: 'https://github.com/imocherniuk/weather_for_kids.git',
      cvUrl: 'https://onedrive.live.com/view.aspx?cid=9bc7a500985276ed&page=view&resid=9BC7A500985276ED!106&parId=9BC7A500985276ED!101&app=WordPdf&wacqt=undefined',
      photo: 'images/students/iryna_mocherniuk.jpg'
  }, {
      subgroup: 2,
      name: 'Ksenia Terentyeva',
      websiteUrl: 'http://kseniawinchester.github.io/Cosmoweather/',
      codeSourceUrl: 'https://github.com/kseniawinchester/Cosmoweather.git',
      cvUrl: '',
      photo: 'images/students/ksenia_terentyeva.jpg'
  }, {
      subgroup: 2,
      name: 'Marko Sozansky',
      websiteUrl: 'http://demimark.github.io/weathertogo3/',
      codeSourceUrl: 'https://github.com/DemiMark/weathertogo3',
      cvUrl: 'https://onedrive.live.com/redir?resid=C114CA6D9723B8F5!514&authkey=!AENv5Lgnjoci9y4&ithint=file%2cpdf',
      photo: 'images/students/marko_sozansky.jpg'
  }, {
      subgroup: 2,
      name: 'Taras Terekh',
      websiteUrl: 'http://hearbi.github.io/weathersite/',
      codeSourceUrl: 'https://github.com/hearbi/weathersite',
      cvUrl: '',
      photo: 'images/students/taras_terekh.jpg'
  }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(students);
      }
  };
}]);
