export default interface ISiteMapNode {
    name: string,
    id: string,
    childNodes: Array<ISiteMapNode>
}