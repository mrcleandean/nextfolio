const paginateWithBoundaryJS =
    `// JavaScript
const paginateWithBoundary = (dblist, pageNum, pageSize, pivotId) => {
    const result = [];
    const pivotIndex = dblist.indexOf(pivotId); // Index to find others from
    const boundaryIndex = pivotIndex + dblist.length; // If we circle, we cannot go on or past this index
    const startIndex = pivotIndex + pageNum * pageSize; // pageNum * pageSize is the offset from pivotIndex
    const endIndex = Math.min(startIndex + pageSize, boundaryIndex); // endIndex cannot go past boundary
    if (startIndex >= boundaryIndex) return []; // If false, we can iterate from start to boundary - 1
    for (let i = startIndex; i < endIndex; i++) {
        result.push(dblist[i % dblist.length]);
    }
    return result;
}
`;
const paginateWithBoundaryPy =
    `# Python
def paginate_with_boundary(dblist, page_num, page_size, pivot_id):
    result = []
    pivot_index = dblist.index(pivot_id)  # Index to find others from
    boundary_index = pivot_index + len(dblist)  # If we circle, we cannot go on or past this index
    start_index = pivot_index + page_num * page_size  # page_num * page_size is the offset from pivot_index
    end_index = min(start_index + page_size, boundary_index)  # end_index cannot go past boundary
    if start_index >= boundary_index:
        return []  # If false, we can iterate from start to boundary - 1
    for i in range(start_index, end_index):
        result.append(dblist[i % len(dblist)])
    return result
`
export { paginateWithBoundaryJS, paginateWithBoundaryPy }