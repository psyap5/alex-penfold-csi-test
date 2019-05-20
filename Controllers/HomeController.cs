using Microsoft.AspNetCore.Mvc;

namespace alex_penfold_csi_test.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
