interface dataGraph {
    label?: string,
    data?: dataXY,
    borderColor?: string,
    backgroundColor?: string,
}
export interface dataXY {
    x?: string,
    y?: number,
}
export default dataGraph;