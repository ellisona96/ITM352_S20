attributes = "Austin; 23; 23 + 0.5; 0.5 - age";
String.split(";");

function pieces (attributes) {
    return pieces
  };

  function splitAttributes(val, fieldDelimiter, valueDelimiter){
    var pieces = {},
    fields = val.split(fieldDelimiter),
    kvp;
    for (var i = 0; i < fields.length; i++) {        
        if (fields[i] !== "") {
            kvp = fields[i].split(valueDelimiter);        
            pieces[kvp[0]] = kvp[1];
        }
    }
    return pieces;    
}