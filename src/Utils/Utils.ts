

export function toUpperCase(arg:string){
    return arg.toUpperCase();
}

// type is create a new type in typescript // its like an interface 

export type info={
    upperCase:string,
    fahmy:string,
    ali:string[],
    length:number,
    info:object |undefined
}

export function stringInfo (arg:string):info {

    return {

    upperCase:arg.toUpperCase(),
    fahmy:arg.toLowerCase(),
    ali:Array.from(arg),
    //creates a new array instance from an array-like or iterable object.
    // It's often used to convert objects that are not arrays,
    // like NodeLists, strings, or other iterable structures, into proper arrays.
    length:arg.length,
    info:undefined

}
}
/* istanbul ignore next */
export class StringUtils {
    public toUpperCase(arg:string){
        if(!arg)throw new Error('invalid arg')
        return arg.toUpperCase();
    }
    public getLength(arg:string){
        return arg.length
    }

}