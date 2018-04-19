/**
 * Created by Valeri on 7/6/2017.
 */
(function () {
    String.prototype.ensureStart = function (str) {
      if(this.startsWith(str)){
          return this.toString();
      }else{
          return str + this;
      }
    };

    String.prototype.ensureEnd = function (str) {
        if(this.endsWith(str)){
            return this.toString()
        }else{
            return this + str;
        }
    }

    String.prototype.isEmpty = function () {
        if(this.length < 1){
            return true;
        }else {
            return false;
        }
    }
    
    String.prototype.truncate = function (n) {
        let result = '';
        if(this.length <= n){
            return this.toString();
        }else if(n < 4){
            return '.'.repeat(n);
        }else{
            let splitted = this.split(' ');
            if(splitted.length < 2){
                result += this.substring(0, n - 3) + '...';
                return result;
            }else{
                splitted.pop();
                result = splitted.join(' ') + '...';
                while(result.length > n){
                    splitted.pop();
                    result = splitted.join(' ') + '...';
                }
                return result;
            }
        }
    }

    String.format = function () {
        let str = arguments[0];
        let placeholderRegex = /\{\d\}/;

        for (let i = 1; i < arguments.length; i++) {
            str = str.replace(placeholderRegex, arguments[i]);
        }
        return str;
    }
})();
let text = 'my string';

text = text.ensureStart('hello ');
console.log(text);
text = text.ensureEnd('.');
console.log(text);
console.log(text.isEmpty());
text = text.truncate(14);
text = text.truncate(8);
text = text.truncate(4);
console.log(text);
text = text.truncate(2);
console.log(text);
txt = String.format('The {0} {1} fox',
    'quick');
console.log(txt);

