export class NavigationMock implements Xrm.Controls.Navigation {
  public items: Xrm.Collection.ItemCollection<Xrm.Controls.NavigationItem>;

  constructor(items: Xrm.Collection.ItemCollection<Xrm.Controls.NavigationItem>) {
    this.items = items;
  }
}
