CREATE TABLE [dbo].[Category]
(
	[CategoryID] [uniqueidentifier] NOT NULL  PRIMARY KEY,
	[NameCategory] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL
)
