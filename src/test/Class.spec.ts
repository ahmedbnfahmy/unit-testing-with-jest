import { StringUtils } from "../Utils/Utils"


describe.only('',()=>{
    
    describe ('',()=>{
    // setup
    let sut=new StringUtils; // declare new class 
    
    //hook
    beforeEach(()=>{
        sut=new StringUtils() //initialize new class method before every suite 
    })
    //hook
    afterEach(()=>{
        console.log('tear down ') //for closing 
    })
    
    it ('class method should return AHMEDFAHMY',()=>{
        // arrange or setup 
        // actual 
        const actual=sut.toUpperCase('ahmedfahmy')
        const expected= 'AHMEDFAHMY'
                //assertion 
        expect(actual).toBe(expected)
    })
    it ('class should return length',()=>{
        const actual=sut.getLength('ahmedfahmy')
        const expected= 10

        expect(actual).toBe(expected)
    })

    })
})