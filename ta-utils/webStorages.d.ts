/**
 * 创建和管理WebStorage的工具
 * 只需要通过init即可简单的创建一个{@link StorageCreatorInterface}对象,通过这个对象即可管理其所代表的的对象
 *
 * @import import {webStorage} from '@yh/ta-utils'
 *
 * @example
 *
 * ```javascript
 *
 * const storage = webStorage.init('customStorage', {isLocal: true})
 * storage.set('aaa',1)
 * ```
 *
 * @category WebStorage 存储工具
 * @module webStorage
 */
/**
 * 表示一个WebStorage对象
 * @private
 */
export interface StorageCreatorInterface {
    /**
     * 设置一个存储
     * @param key 键
     * @param value 值
     */
    set: (key: string, value: unknown) => void;
    /**
     * 获取一个存储的值
     * @param key 键
     * @return 若不存在则返回false
     */
    get: (key: string) => string | false | null;
    /**
     * 移除一个存储
     * @param key
     */
    remove: (key: string) => void | false;
    /**
     * 获取当前WebStorage的所有存储
     */
    getAll: () => any;
    /**
     * 获取当前WebStorage的所有存储的key
     */
    getAllKeys: () => Array<string>;
    /**
     * 清理过时的存储
     */
    cleanData: () => void;
    /**
     * 清理失败的存储
     */
    cleanFailureData: () => void;
    /**
     * 移除所有存储
     */
    removeData: () => void;
}
/**
 * 表示初始化的对象
 */
export declare type InitOption = {
    /**
     * 是否是[localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)对象
     *
     * | 值 | 注释 |
     * | --- | --- |
     * | true | [localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) |
     * | false | [sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage) |
     *
     * @default false
     */
    isLocal?: boolean;
    /**
     * 存储的数据的有效时间
     * @default -1,代表永不过时,单位`ms`
     */
    invalidTime?: number;
};
/**
 * 初始化一个webStorage
 * @param name 存储名称,默认为`TA$webstorage`
 * @param initOption 初始化选项
 * @returns false代表创建失败,否则会返回一个{@link StorageCreatorInterface}对象
 */
export declare function createWebStorage(name?: string, { isLocal, invalidTime }?: InitOption): StorageCreatorInterface | false;
/**
 * createWebStorage的别名
 * @deprecated
 * @param args
 */
export declare function init(...args: any[]): false | StorageCreatorInterface;
/**
 * 快速获取一个storage里边的某个值
 * @param storageName
 * @param storageKey
 * @param isLocal
 */
export declare function getStorage(storageName: string, storageKey?: string, isLocal?: boolean): any;
