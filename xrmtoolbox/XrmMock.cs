using System.ComponentModel.Composition;
using XrmToolBox.Extensibility;
using XrmToolBox.Extensibility.Interfaces;

namespace XrmMock.XrmToolBox
{
    [Export(typeof(IXrmToolBoxPlugin)),
        ExportMetadata("Name", "Xrm Mock Generator"),
        ExportMetadata("Description", "Generates a fake implementation of the Xrm object for unit testing client-side scripts."),
        ExportMetadata("SmallImageBase64", null),
        ExportMetadata("BigImageBase64", null),
        ExportMetadata("BackgroundColor", "White"),
        ExportMetadata("PrimaryFontColor", "Black"),
        ExportMetadata("SecondaryFontColor", "Gray")]
    public class XrmMock : PluginBase
    {
        public override IXrmToolBoxPluginControl GetControl()
        {
            return new XrmMockControl();
        }
    }
}