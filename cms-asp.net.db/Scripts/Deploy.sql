INSERT INTO [AspNetRoles] ([Id], [Name]) VALUES ('1d2a9164-8329-4f3a-a171-3dc8a268bd01', 'Admin')
GO
INSERT INTO [AspNetRoles] ([Id], [Name]) VALUES ('4055d2cf-649e-4075-9497-7fa52981f0ca', 'NormalUser')
GO
INSERT INTO [AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'962d145e-e640-46a2-bd1c-8f58ff1e6e92', N'admin@test.com', 0, N'ACEisf0O3ULkKMdeR6kyrDw5GZp/bLVZPJ1Q3AC1/rFmVSErPyrSkmfOUVwb+qAwfA==', N'd61e4e31-b30b-4071-a10d-bc11b8567c77', N'3957575', 0, 0, null, 1, 0, N'admin@test.com')
GO
INSERT INTO [AspNetUserRoles]([UserId], [RoleId]) VALUES (N'962d145e-e640-46a2-bd1c-8f58ff1e6e92', N'1d2a9164-8329-4f3a-a171-3dc8a268bd01')
GO
INSERT INTO [ProfileUser] ([ProfileUserID],[DateBird],[Email],[Name],[NickName],[Password],[AspNetUserID]) VALUES ('8029A08A-3929-4642-8259-AC13F57DE950', '2000-02-02', 'hello', 'Jose', 'shimo', '123', '962d145e-e640-46a2-bd1c-8f58ff1e6e92')
GO