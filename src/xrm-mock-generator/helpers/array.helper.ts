export function findIndex<T extends Xrm.Events.ContextSensitiveHandler[]>(handlers: T, handler: Xrm.Events.ContextSensitiveHandler): number {
    return handlers.findIndex(item => item.name === handler.name);
}
