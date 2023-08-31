import { stringInfo, toUpperCase } from "../Utils/Utils"



// describe is used to compine multiple test cases : suite 
describe('Utils test suite',()=>{

    // it = test
    it ('should do something ',()=>{
        // structure of the unit test by following AAA principles 
        
        // arrange test modules and expected 
        const sut =toUpperCase // module need test // sut = system under test naming convientions 
        const expected='ABC'
        

        // act
        const actual=sut('abc')

        // assert
        expect(actual).toBe(expected) 
        // expect = assertion means the expectecd res = / != actual value 
    })

    it('get some info ',()=>{
        //arrange 
        const sut=stringInfo
        const toUpperCase='HELLO WORLD'
        const toLowerCase='hello world'
        const arr=["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
        //actual
        const actual=sut('hello world')
        const actual1=sut('hello world')

        // assertion
        expect(actual.upperCase).toBe(toUpperCase);
        
        expect(actual.length).toBe(11); 
        expect(actual.info).toBeUndefined()
        expect(actual.fahmy).toHaveLength(11); // toHavelength used to add property length and get it  
        expect(actual.ali).toEqual(arr) ;// used to check refrence type arr|obj
        expect(actual.ali).toEqual(
            expect.arrayContaining(["h", "d"])
        ) ;

    })
    

})

describe('test stringInfo with arg:hello world ',()=>{
    
    it('return upperCase should be HELLO WORLD',()=>{
    //arrange 
    const sut=stringInfo
    const toUpperCase='HELLO WORLD'
    
    //actual
    const actual=sut('hello world')
   
    // assertion
    expect(actual.upperCase).toBe(toUpperCase);
    });

    it('return toLowerCase should be hello world',()=>{
        //arrange 
        const sut=stringInfo
        const toLowerCase='hello world'
        
        //actual
        const actual=sut('hello world')
       
        // assertion
        expect(actual.fahmy).toBe(toLowerCase);
        })
})

describe.only('test this is ',()=>{
    it.each([ // to test def arguments in the same function
        {input:'hello world', expected:'HELLO WORLD'},
        {input:'ahmed', expected:'AHMED'},
        {input:'loka', expected:'LOKA'},
    ])('$input someting to test $expected',({input,expected})=>{
        const sut=stringInfo
        const actual=sut(input)

        expect(actual.upperCase).toBe(expected);
    })
})