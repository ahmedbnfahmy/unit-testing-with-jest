import { StringUtils } from "../Utils/Utils"




    describe('testing error ',()=>{

        //setup
    let sut = new StringUtils

    //hooks 
    beforeEach(()=>{
        sut = new StringUtils()
    })
    afterEach(()=>{
        console.log('done');
    })

        // it.skip('testing error case ',()=>{
         xit('testing error case ',()=>{ // xit === it.skip alias name
            
            // actual
            function toThrowError(){

                const actual=sut.toUpperCase('')
                // const expected='invalid arg'
            }
            // assertion
            expect(toThrowError).toThrowError('we')

        })
        // it.only('testing error with arrow() ',()=>{
        fit('testing error with arrow() ',()=>{ // fit === it.only
            expect(()=>{sut.toUpperCase('')}).toThrowError()
            // expect(()=>{sut.toUpperCase('')}).toHaveProperty("messege")
        })

        it.todo('test something later Todo must be called with only a description')
        
        // it.only('testing error Try Catch ',(done)=>{
        //     try {
        //         sut.toUpperCase('')
        //         done('invalid arg')
        //     }
        //     catch(error){
        //         expect(error).toBeInstanceOf(Error)
        //     }

        //     // expect(()=>{}).toThrowError()
        // })
        
})