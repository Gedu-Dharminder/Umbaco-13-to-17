using Microsoft.AspNetCore.Rewrite;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
 
builder.Services.AddSingleton<NoSniffMiddleware>();
builder.Services.AddSingleton<NoReferrerMiddleware>();

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .AddAzureBlobMediaFileSystem()
    .AddAzureBlobImageSharpCache()
    .Build();

WebApplication app = builder.Build();

await app.BootUmbracoAsync();

RewriteOptions rewriteOptions = new RewriteOptions()
    .AddIISUrlRewrite(builder.Environment.ContentRootFileProvider, "IISUrlRewrite.xml");
 
app.UseRewriter(rewriteOptions);

app.Use(async (context, next) =>
{
    context.Response.Headers.Append("X-Frame-Options", "SAMEORIGIN");
    await next();
});


if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseHsts();
}
 
// This line is needed for the rewrites to take effect.
app.UseStaticFiles();

app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseInstallerEndpoints();
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

await app.RunAsync();
