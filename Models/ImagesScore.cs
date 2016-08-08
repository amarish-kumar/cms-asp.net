using System;

namespace Models
{
    public class ImagesScore
    {
        public Guid ImagesScoreID { get; set; }

        public bool IsLike { get; set; }
        
        public Guid ProfileUserID { get; set; }
        
        public Guid ScoreID { get; set; }
     }
}