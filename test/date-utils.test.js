const expect = require('chai').expect;
const { formattedDate } = require('../lib/date-utils');

describe('Date-utils', function (){

    it('formatted date', function (){
        const result = formattedDate(new Date(1538645653246));
        expect(result).to.equal("20181004");
    });

});