import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){
    it('should greet Andre correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });

    it('should greet Karen correctly', function(){
        assert.equal('Hello, Karen', greet('Karen'));
    });

    it('should greet Nkosingiphile correctly', function(){
        assert.equal('Hello, Nkosingiphile', greet('Nkosingiphile'));
    });

    it('should greet Qhawe correctly', function(){
        assert.equal('Hello, Qhawe', greet('Qhawe'));
    });

    it('should greet James correctly', function(){
        assert.equal('Hello, James', greet('James'));
    });
});
