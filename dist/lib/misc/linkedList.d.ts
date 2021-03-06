// Type definitions for ag-grid v13.3.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare class LinkedList<T> {
    private first;
    private last;
    add(item: T): void;
    remove(): T;
    isEmpty(): boolean;
}
