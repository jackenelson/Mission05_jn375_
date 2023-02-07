using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Mission05_jn375.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Mission05_jn375.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Privacy(FormModel model)
        {
            return View();
        }
    }
}
