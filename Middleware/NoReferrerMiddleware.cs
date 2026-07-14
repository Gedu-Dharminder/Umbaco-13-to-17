  public class NoReferrerMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            context.Response.Headers.Append("referrer-policy", "no-referrer");
 
            await next(context);
        }
    }