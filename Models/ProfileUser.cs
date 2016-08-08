namespace Models
{
    using System;
   
    public class ProfileUser
    {
        public DateTime DateBird { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public string NickName { get; set; }

        public string Password { get; set; }
        
        public Guid ProfileUserID { get; set; }        
    }
}