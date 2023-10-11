import { FileValidator } from '@nestjs/common/pipes/file/file-validator.interface';

export type FileNameValidatorOptions = {
  pattern: RegExp;
};

export class FileNameValidator extends FileValidator<
  FileNameValidatorOptions,
  Express.Multer.File
> {
  constructor(option: FileNameValidatorOptions) {
    super(option);
  }

  buildErrorMessage(file: Express.Multer.File): string {
    return `Validation failed (expected file name follow pattern ${this.validationOptions.pattern})`;
  }

  isValid(file: Express.Multer.File): boolean | Promise<boolean> {
    return this.validationOptions.pattern.test(file.originalname);
  }
}
