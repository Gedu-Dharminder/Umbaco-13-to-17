public class NoSniffMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            context.Response.Headers.Append("X-Content-Type-Options", "nosniff");
 
            await next(context);
        }
    }