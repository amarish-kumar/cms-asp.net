//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace cms_asp.net.models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ImagesScore
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ImagesScore()
        {
            this.Scores = new HashSet<Score>();
        }
    
        public System.Guid ImagesScoreID { get; set; }
        public System.Guid ImageID { get; set; }
    
        public virtual Image Image { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Score> Scores { get; set; }
    }
}