export abstract class Serializer{
    static encode(data: String){
        try{
            return Buffer.from(data).toString("base64");
        }
        catch{}
    }
    static decode(data: string){
        try{
            const result = Buffer.from(data,"base64").toString("utf-8");
            return JSON.parse(result);
        }
        catch{}
    }
}