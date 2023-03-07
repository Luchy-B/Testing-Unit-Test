const stringCheck = (string) => {
  const { length } = string;
  if (length >= 1 && length <= 10) {
    throw new RangeError('String valid and accepted');
  }
  if (length === 0) {
    throw new RangeError('String must be at least 1 character long');
  }
  if (length > 10) {
    throw new RangeError('String must not be longer than 10 characters');
  }
  return length;
};

export default stringCheck;