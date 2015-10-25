Array.prototype.inArray = function() {
    for(var j in this) {
        if(this[j] == argument[0]) {
            return true;
        }
    }
    return false;
}