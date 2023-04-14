/**
 * @category 拼音工具
 * @import import pinyin from '@yh/ta-utils/pinyin'
 */
/**
 *
 */
interface Pinyin {
  getFullChars: (str: string) => string;
  getCamelChars: (str: string) => string;
  _getFullChars: (str: string) => string;
  _capitalize: (str: string) => string;
  _getChar: (str: string) => string;
}

export declare const pinyin: Pinyin

export default pinyin
