/**
 * @category 数组工具
 * @import import findTree from '@yh/ta-utils/findTree'
 */
/**
 *
 */
interface TerrResult {
  index: number;
  item: any;
  path: Array<string>;
  items: any[];
  parent: any;
  nodes: any[];
}

interface FindTreeOptions {
  children?: string;
}

/**
 * 从树结构中查找匹配第一条数据的键、值、路径
 * @param {Object} list 数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function findTree<T, C>(list: T[], iterate: (this: C, item: T, index: number, items: T[], path: string[], parent: T, nodes: T[]) => boolean, options?: FindTreeOptions, context?: C): TerrResult;

declare module './ctor' {
  interface XEUtilsMethods {
    findTree: typeof findTree;
  }
}

export default findTree
