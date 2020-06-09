/*            

* This is the file which will call

* our javascript file that need to be tested.

* Each describe block is equivalent to one test case    

*    

*/   


// describe your code

describe("", function(){

      // what it should do
      it("Calculation of insurance based on the arguments given" ,function(){
              //expect something
              expect(result( 'UserName', 30 , 134,'Austria')).toEqual('UserName, your insurance will cost 497 €' );        
      });
});


/*

Note how describe - it() argument reads like a sentence.

*/