export interface buildPaths{
    entry:string;
    html:string;
    output:string;
    src:string;
    public:string;
}

export type buildMode = 'production'|'development';
export type buildPlatform = 'mobile'|'desktop';


export interface buildOptions {
    port:number;
    paths:buildPaths;
    mode:buildMode;
    analyzer?:boolean;
    platform:buildPlatform;
}