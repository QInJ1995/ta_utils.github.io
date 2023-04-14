declare function unbindEvent(): void;
declare const plugin: {
    install(Vue: any): void;
    directive: {
        bind(el: any, binding: any): void;
        componentUpdated(el: any, binding: any): void;
        unbind: typeof unbindEvent;
    };
};
export default plugin;
