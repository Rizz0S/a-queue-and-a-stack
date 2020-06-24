// arrays are already kind of a stack but whatever
const Stack = function() {
   this.items = [];
};

Stack.prototype.push = function(obj) {
    this.items.push();
};

Stack.prototype.pop = function() {
    return this.items.pop();
};

Stack.prototype.peek = function() {
    return this.items[this.items.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.items.length === 0;
};
