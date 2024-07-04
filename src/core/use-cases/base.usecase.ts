
export interface UseCaseArg{
    [key: string]: any;
}

export interface UseCaseResponse{
    [key: string]: any;
}


export abstract class BaseUseCase<
TArg extends UseCaseArg |string,
 TResponse extends UseCaseResponse | boolean | void
>{

 abstract execute(arg:TArg): Promise<TResponse>;
 
}