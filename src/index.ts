
import { readSync } from 'read-text-file'

function getType(type){
    if(type == "Numbers")
        return "Number"
    if(type == "Table")
        return "any"
    return type;
}

function createInterfaceFromPath(path: string){
    let index = path + "index.markdown"
    console.log(path)
    const indexText = readSync(index)

    let details: Record<string, any> = {}

    details.name = /# (.+)/.exec(indexText)?.[1]
    details.parent = /> __Parent__ +?\[(.+)\]\[/.exec(indexText)?.[1]
    details.overview = /## Overview.+?#/s.exec(indexText)?.[0].replace("## Overview", "").replace("#", "").trim()
    let properties = indexText.match(/#### \[[^\]]+?\.([^\]]+?)\]/g)?.map(x=>/.+?\.(.+?)\]/.exec(x)?.[1]) || []  as  string[]  
    //console.log(properties)
    details.properties = [];
    for(const prop of properties){
        
        let propPath = path + prop?.replace("_", "") + ".markdown"
        const propText = readSync(propPath)
        const type = /> __Type__ +?\[(.+)\]\[/.exec(propText)?.[1]
        const overview = /## Overview.+?#/s.exec(propText)?.[0].replace("## Overview", "").replace("#", "").trim()
        details.properties.push({type, name: prop, overview})
    }
    let functions = indexText.match(/#### \[.+?\:(.+?)\]/g)?.map(x=>/.+?:(.+?)\(\)\]/.exec(x)?.[1]) || [] as  string[] 
    //console.log(functions)
    details.functions = [];

    for(const func of functions){
        let funcPath = path  + func + ".markdown"
        
        console.log(funcPath)
        const funcText = readSync(funcPath)
        const returnType = /> __Return value__ +?\[(.+)\]\[/.exec(funcText)?.[1]
        const overview = /## Overview.+?#/s.exec(funcText)?.[0].replace("## Overview", "").replace("#", "").trim()
        const validArgs: any = [];
        let parameterSets = funcText.match(new RegExp(`(\t|    )object:${func}\(.+\)`, "g")) || [] as string[]
        
        for(const parameters of parameterSets){
            
            const params = /\(.+\)/.exec(parameters)?.[0].replace("(", "").replace(")", "").split(",").map(x=>x.trim())  || [] as string[] 
            const argSet: any = [];
            for(const param of params){
                console.log(param)
                const getType = new RegExp(`#####.+${param}.+\n_\\[(.+?)\\]`)
                const type = getType.exec(funcText)?.[1]
                argSet.push({type: type, name: param})
            }
            validArgs.push(argSet)
        }


        details.functions.push({return: returnType, name: func, validArgs, overview})
    }

    let output = `interface ${details.name} `
    if(details.parent && !["Userdata"].includes(details.parent)) {
        output += `extends ${details.parent} {\n`
    } else {
        output += `{\n`
    }

    for(const prop of details.properties){
        output += `\/** ${prop.overview} *\/\n${prop.name}?: ${getType(prop.type)};\n`
    }

    for(const func of details.functions){
        output += `\/** ${func.overview} *\/\n`
        for(const paramSet of func.validArgs){
            output += `${func.name}(${paramSet.map(x=>`${x.name}: ${getType(x.type)}`).join(", ")}): ${getType(func.return || "void")};\n`
        }
    }

    output += "}"
    return output
}


import { readSync as readSyncDir, INCLUDE_DIRECTORIES } from 'readdir';
 
const allTextFilesFilter = ['*/'];
const options = INCLUDE_DIRECTORIES;
const contents = readSyncDir('./docs/type/', allTextFilesFilter, options);
const outputs: string[] = []
for(const dir of contents){
    let path = "./docs/type/" + dir
    outputs.push(`// ***${dir}***\n\n` + createInterfaceFromPath(path));
}
//console.log(contents)
import write from 'write';
write.sync('foo.d.ts', outputs.join(`\n\n\n`), { overwrite: true }); 
// let path = "./docs/type/Paint"
// console.log(createInterfaceFromPath(path))

