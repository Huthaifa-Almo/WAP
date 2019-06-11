(function(){
    function Foo(bar){ this.count = 0; this.bar = bar;
    }

    var obj1 = new Foo(5);
    console.log(obj1.count);
    //obj1.increment();

    Foo.prototype.increment = function () {
        this.count++;
    };

    obj1.increment();
    console.log(obj1.count);

    var obj2 = new Foo(10); console.log(obj2.count); obj2.increment(); console.log(obj2.count);

})();