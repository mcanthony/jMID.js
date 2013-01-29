var jMID = (function(jMID) {

  jMID.File = function(decoded) {
    for (var key in decoded) {
      if (decoded.hasOwnProperty(key)) {
        this[key] = decoded[key];
      }
    }
  };

  jMID.File.prototype = {
    getHeader : function() {
      return this.header;
    },
    encode : function() {
      return new jMID.Encoder().encode(this);
    },
    base64Encode : function() {
      return btoa(this.encode());
    }
  };

  return jMID;

}(jMID || {}));