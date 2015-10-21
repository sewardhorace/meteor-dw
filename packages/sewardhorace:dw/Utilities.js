var Utilities = {
  
  deepClone: function(obj) {
    if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
        return obj;
    var temp = obj.constructor();
    for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = this.deepClone(obj[key]);
            delete obj['isActiveClone'];
        }
      }
    return temp;
  },
  randomItem: function(arr) {
    if (!arr) {
      return undefined;
    }
    var idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  }
}
