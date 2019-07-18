export class RelationshipMock implements Xrm.Navigation.Relationship {
  public attributeName: string;
  public name: string;
  public navigationPropertyName?: string;
  public relationshipType?: XrmEnum.RelationshipType;
  public roleType?: XrmEnum.RoleType;

  constructor(components: IRelationshipComponents) {
    this.attributeName = components.attributeName;
    this.name = components.name;
    this.navigationPropertyName = components.navigationPropertyName;
    this.relationshipType = components.relationshipType;
    this.roleType = components.roleType;
  }
}

export interface IRelationshipComponents {
  attributeName: string;
  name: string;
  navigationPropertyName?: string;
  relationshipType?: XrmEnum.RelationshipType;
  roleType?: XrmEnum.RoleType;
}
