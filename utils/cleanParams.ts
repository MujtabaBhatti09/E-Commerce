import { ignoreParamCode } from "@/constants/ignoreParamCode";
import { ParamValue } from "next/dist/server/request/params";

export const cleanParams = (param: ParamValue | string) => {
    const cleanedParam: string = ignoreParamCode.reduce(
        (acc: any, code) => acc.replaceAll(code, " "),
        param ?? ""
    ).replace(/\s+/g, " ").trim();
    return cleanedParam
}