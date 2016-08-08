CREATE TABLE [dbo].[ProfileUser]
(
	[ProfileUserID] [uniqueidentifier] NOT NULL PRIMARY KEY,
	[AspNetUserID] NVARCHAR(128) NOT NULL, 
	[DateBird] [datetime] NOT NULL,
	[Email] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
	[NickName] [nvarchar](max) NULL,
	[Password] [nvarchar](max) NULL,
	CONSTRAINT [FK_PerfilUsuario_AspNetUsers] FOREIGN KEY ([AspNetUserID]) REFERENCES [AspNetUsers]([Id])
)
