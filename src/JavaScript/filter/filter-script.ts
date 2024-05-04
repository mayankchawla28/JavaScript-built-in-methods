
(function main() {
  Array.prototype.filter = function(callback) {
    const response = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            response.push(this[i]);
        }
    }
    return response;
  };

  const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

  const result = words.filter((word) => word.length > 6);

  console.log(result);
  
}());