import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";

export class JobValidationParameterPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata);

    if (!value) {
      throw new BadRequestException(
        `O valor do parametro ${metadata.data} deve ser preeenchido`
      );
    }
    return value;
  }
}
