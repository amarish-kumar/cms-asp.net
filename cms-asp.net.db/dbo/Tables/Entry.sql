CREATE TABLE [dbo].[Entry]
(
	[EntryID] [uniqueidentifier] NOT NULL PRIMARY KEY,
	[Title] [nvarchar](max) NULL,
	[Content] [nvarchar](max) NULL,
	[Date] [datetime] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
	[ProfileUserID] [uniqueidentifier] NOT NULL,
	CONSTRAINT [FK_dbo.Entries_dbo.ProfileUsers_ProfileUserID] FOREIGN KEY([ProfileUserID])REFERENCES [ProfileUser] ([ProfileUserID])
)
