import { ColumnType } from "./enums"

export interface TaskModel {
    id: string;
    title: string;
    column: ColumnType;
    color: string;
}

//Drag n drop
export interface DragItem {
    index: number;
    id: TaskModel['id'];
    from: ColumnType;
}