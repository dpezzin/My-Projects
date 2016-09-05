using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Category()
        {
            ViewBag.Message = "Your category page.";

            return View();
        }

        public ActionResult Review()
        {
            ViewBag.Message = "Your review page.";

            return View();
        }
    }
}