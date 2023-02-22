declare type CursorType = 'pointer' | 'no-drop' | 'none' | 'text' | 'zoom-in' | 'zoom-out' | 'default' | 'grab'

declare interface StoreObject {
    cursor:                 CursorType
}