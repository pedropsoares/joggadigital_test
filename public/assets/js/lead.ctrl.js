app.controller('leadCtrl', function($scope, $http){

    $scope.init = function() {
        $scope.leads = [];
        $scope.clearFields();
        $scope.getLeads();
    };

    $scope.update = function(lead) {
        $scope.isUpdating = true;
        $scope.formLead = lead;
    }

    $scope.clearFields = function() {
        $scope.formLead = {
            name: "",
            email: ""
        };
        $scope.isUpdating = false;
        $scope.isCreating = false;
    }

    $scope.create = function() {
        $scope.isCreating = true;
        $scope.formLead = {
            name: "",
            email: ""
        };
    }

    $scope.getLeads = function() {
        $http.get("http://localhost:3000/api/leads")
        .then(function(res) {
            $scope.leads = res.data.leads;
        }, function (err) {
            console.log(err);
        })
    }
    
    $scope.createLead = function(lead) {
        $http.post("http://localhost:3000/api/leads", lead)
        .then(function(res) {
           $scope.clearFields();
           $scope.getLeads();
            alert(res.data.message);
        }, function (err) {
            console.log(err);
            alert(err.data.message);
        })
    }

    $scope.updateLead = function(lead) {
        $http.put("http://localhost:3000/api/leads/"+lead._id, lead)
        .then(function(res) {
            $scope.clearFields();
            $scope.getLeads();
            alert(res.data.message);
        }, function (err) {
            console.log(err);
            alert(err.data.message);
        })
    }

    $scope.deleteLead = function(id) {
        $http.delete("http://localhost:3000/api/leads/"+id)
        .then(function(res) {
            $scope.getLeads();
            alert(res.data.message);
        }, function (err) {
            console.log(err);
            alert(err.data.message);
        })
    }

    $scope.init();
});