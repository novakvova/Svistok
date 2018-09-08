using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebAppShop.Startup))]
namespace WebAppShop
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
