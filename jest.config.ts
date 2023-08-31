import type {Config} from '@jest/types'


const baseDir='<rootDir>/src/Utils'
const baseTestDir='<rootDir>/src/test'

const config :Config.InitialOptions={
    preset:'ts-jest', // this needed for typescript 
    testEnvironment:'node', // the environment 
    verbose:true, // to show us more info in console 
    collectCoverage:true, // for coverage report
    collectCoverageFrom:[ // path that collect coverge from
        `'${baseDir}/**/*.ts'`
    ],
    // testMatch:[
    //     `'${baseTestDir}/**/*.ts'`

    // ]
}

export default config; 