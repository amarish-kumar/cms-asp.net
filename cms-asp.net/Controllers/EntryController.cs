using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using cms_asp.net.models;

namespace cms_asp.net.Controllers
{
    [Authorize]
    [RoutePrefix("api/Entry")]
    public class EntryController : ApiController
    {
        cmsContext context;
        public EntryController()
        {
            this.context = new cmsContext();
            context.Configuration.ProxyCreationEnabled = false;
        }
        // GET api/<controller>
        public IEnumerable<Entry> Get()
        {           
            var data = (from p in context.Entries
                        orderby p.Date
                select p).Take(1);
            var result = data.ToList();
            return result;
        }

        // GET: api/Entry/5
        public IEnumerable<Entry> Get(Guid id)
        {
            IEnumerable<Entry> result = from c in context.Entries
                                        where c.EntryID == id
                                        select c;
            return result;
        }

        public HttpResponseMessage Post(Entry entry)
        {
            HttpResponseMessage message;
            try
            {
                entry.Date = DateTime.Now;
                entry.EntryID = Guid.NewGuid();
                entry.Image = "/Images/blog.jpg";
                string userAspNetId = "962d145e-e640-46a2-bd1c-8f58ff1e6e92";
                var profileUser =
                    (from m in context.ProfileUsers
                     where m.AspNetUser.Id == userAspNetId
                     select m).ToList();
                entry.ProfileUserID = profileUser.ElementAt(0).ProfileUserID;
                this.context.Entries.Add(entry);
                this.context.SaveChanges();
                message = Request.CreateResponse(HttpStatusCode.OK);

                return message;
            }
            catch (Exception e)
            {
                //throw new NotImplementedException();
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e.Message);
            }

        }

        // PUT: api/Entry/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Entry/5
        public void Delete(int id)
        {
        }
    }
}
