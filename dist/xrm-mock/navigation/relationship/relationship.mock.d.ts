/// <reference types="xrm" />
export declare class RelationshipMock implements Xrm.Navigation.Relationship {
    attributeName: string;
    name: string;
    navigationPropertyName?: string;
    relationshipType?: XrmEnum.RelationshipType;
    roleType?: XrmEnum.RoleType;
    constructor(components: IRelationshipComponents);
}
export interface IRelationshipComponents {
    attributeName: string;
    name: string;
    navigationPropertyName?: string;
    relationshipType?: XrmEnum.RelationshipType;
    roleType?: XrmEnum.RoleType;
}
