CREATE TABLE [dbo].[Image]
(
	[ImageID] [uniqueidentifier] NOT NULL  PRIMARY KEY,
	[Date] [datetime] NOT NULL,
	[Title] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[ImageP] [nvarchar](max) NULL,	
	[ProfileUserID] [uniqueidentifier] NOT NULL,	
	[GalleryID] [uniqueidentifier] NOT NULL,
	CONSTRAINT [FK_dbo.Images_dbo.Galleries_GalleryID] FOREIGN KEY([GalleryID]) REFERENCES [dbo].[Gallery] ([GalleryID]),	
	CONSTRAINT [FK_dbo.Galleriy_dbo.ProfileUsers_ProfileUserID] FOREIGN KEY([ProfileUserID]) REFERENCES [dbo].[ProfileUser] ([ProfileUserID])
)
