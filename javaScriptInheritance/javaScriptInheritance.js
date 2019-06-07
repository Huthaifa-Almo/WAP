(function () {
    "use strict";
    var createBicyclePrototye = function () {
        var proparity = [];
        var speed = 0;

        function applyBrake(value) {
            speed = speed - value;
        };

        function speedup(value) {
            speed = speed + value;
        }

        proparity[0] = speed;
        proparity[1] = applyBrake();
        proparity[2] = speedup();
        return proparity;
    }

    var createMountainBikeProtoype = function () {
        var prototype = Object.create(prototype);
        prototype.gear = 1;

        function setGear(gearValue) {
            prototype.gear = gearValue;
        }

        return prototype;
    }
    var start = function () {
        var cbp = Object.create(createBicyclePrototye);
        var cmbp = Object.create(createMountainBikeProtoype);
        function test(){
            console.log(cmbp(2))
            console.log(cbp["speedup"](5));
            console.log(cbp["applyBrake"](1));

        }

        return test();
    }
    start();
})();