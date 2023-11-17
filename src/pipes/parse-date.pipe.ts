import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { data: isKeyGiven } = metadata;

    if (isKeyGiven) value = value;
    else value = value?.timestamp;

    const date = this.convertTimestamp(value);
    if (!date || isNaN(+date)) {
      const message = isKeyGiven ? `${isKeyGiven} is invalid` : `Invalid date`;
      throw new BadRequestException(message, {
        description: `The input ${
          isKeyGiven ? isKeyGiven : 'date'
        } is not a valid date`,
      });
    }
    const { metatype } = metadata;
    switch (metatype) {
      case Number:
        return date.getTime();
      case String:
        return date.toISOString();
      default:
        return date;
    }
  }

  private convertTimestamp(timestamp: string | number) {
    timestamp = +timestamp;
    // if timestamp is less than 10000000000 assume it is seconds and convert to milliseconds
    const isSecond = !(timestamp > (Date.now() + 24 * 60 * 60 * 1000) / 1000);

    return isSecond ? new Date(timestamp * 1000) : new Date(timestamp);
  }
}
