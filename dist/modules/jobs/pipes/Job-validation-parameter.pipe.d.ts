import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
export declare class JobValidationParameterPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}