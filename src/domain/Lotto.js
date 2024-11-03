import { ERROR_MESSAGE, LOTTO_ERROR } from "../constants/error.js";
import { DELIMITER } from "../constants/message.js";
import { DELIMITER_REGEX } from "../utils/regex.js";
import LottoValidate from "../validation/LottoValidate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#delimiter(numbers);
    this.#numbers = this.#parseNumbers(numbers);
  }

  #delimiter(numbers) {
    if (!DELIMITER_REGEX.test(numbers)) {
      throw new Error(ERROR_MESSAGE + LOTTO_ERROR.INVALID_DELIMITER);
    }
  }

  #parseNumbers(numbers) {
    return numbers.split(DELIMITER).map(Number);
  }
}

export default Lotto;
