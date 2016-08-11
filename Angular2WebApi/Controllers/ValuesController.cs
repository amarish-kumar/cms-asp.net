using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2WebApi.Controllers
{
    //[Authorize]
    [RoutePrefix("api/Values")]
    public class ValuesController : ApiController
    {
        List<Hero> hero;

        public ValuesController() {
            hero = new List<Hero>();
            hero.Add(new Hero
            {
                id = 1,
                name = "value1"
            });
            hero.Add(new Hero
            {
                id = 2,
                name = "value2"
            });
        }        
        // GET api/values
        public IEnumerable<Hero> Get()
        {           
            return hero;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value#";
        }

        // POST api/values
        public string Post(Hero value)
        {
            return "value#";
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
        public class Hero
        {
            public int id { get; set; }
            public string name { get; set; }
        }
    }
}
