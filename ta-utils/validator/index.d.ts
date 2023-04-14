/**
 *
 * @param rules
 * @param values
 * @param options
 * @param cb
 */
export default function (rules: Rules, values: Values, { first, firstFields, force, scroll, focus, }?: Options, cb?: (errors: unknown) => void): void;
/**
 * 配置验证规则
 * @key 与values的key相匹配
 */
declare type Rules = {
    [key: string]: Array<Rule>;
};
/**
 * 验证规则支持这些规则
 */
declare type Rule = {
    /**
     * 枚举类型
     */
    enum?: string;
    /**
     * 居民身份证类型
     */
    idCard?: '2' | '1';
    /**
     * 字段长度
     */
    len?: number;
    /**
     * 最大长度
     */
    max?: number;
    /**
     * 校验文案
     */
    message?: string;
    /**
     * 最小长度
     */
    min?: number;
    /**
     * 正则表达式校验
     */
    pattern?: RegExp;
    /**
     * 输入时，会按照预设规则检查用户输入内容是否满足其规则；目前仅支持手机号长度验证。
     */
    phone?: 'mobile';
    /**
     * 是否必须
     */
    required?: boolean;
    /**
     * 验证前转换字段值
     * @param value
     */
    transform?: (value: unknown) => unknown;
    /**
     * 内建校验类型（详细API见下方，示例见内建校验类型），以及扩展支持('idCard','phone'，表示二代身份证及手机号码，更多自定义验证可使用扩展支持的idCard、phone以及customRule属性）
     */
    type?: InnerType;
    /**
     * 自定义校验
     * @param rule
     * @param value
     * @param callback
     */
    validator?: (rule: unknown, value: unknown, callback: unknown) => void;
    /**
     * 必选时，空格是否会被视为错误
     */
    whitespace?: boolean;
};
declare type InnerType = {
    string: string;
    number: number;
    boolean: boolean;
    enum: string;
    url: string;
    email: string;
    hex: string;
};
/**
 * 配置验证规则
 * @key 与rules的key相匹配
 */
declare type Values = {
    [key: string]: unknown;
};
/**
 * 验证选项
 */
declare type Options = {
    /**
     * 若为 true，则每一表单域的都会在碰到第一个失败了的校验规则后停止校验
     */
    first?: boolean;
    /**
     * 指定表单域会在碰到第一个失败了的校验规则后停止校验
     */
    firstFields?: Array<string> | true;
    /**
     * 对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验
     */
    force?: boolean;
    /**
     * 定义 validateFieldsAndScroll 的滚动行为，详细配置见 [dom-scroll-into-view config](https://github.com/yiminghe/dom-scroll-into-view#function-parameter)
     */
    scroll?: Object;
    /**
     * 是否对第一个校验失败的表单项自动 focus
     */
    focus?: boolean;
};
export {};
