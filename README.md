# Wijmo FlexGrid with Prerendering Test

This is a simple extension of the [aspnet-spa yo template](http://blog.stevensanderson.com/2016/05/02/angular2-react-knockout-apps-on-aspnet-core/) created by [Steve Sanderson](https://github.com/SteveSandersonMS).

The purpose is to test whether it is possible to use the [Wijmo 5 FlexGrid](http://demos.wijmo.com/5/Angular2/FlexGridIntro/FlexGridIntro/) with Angular prerendering.

To turn on prerendering, edit this line of Views/Home/Index.cshtml...

          ```<app>Loading...</app>```

...to instead read...

          ```<app asp-prerender-module="ClientApp/boot-server" asp-prerender-webpack-config="webpack.config.js">Loading...</app>```

If you do this, you'll probably get this error:

```Exception: Call to Node module failed with error: ReferenceError: navigator is not defined
at wijmo (/Users/Andrew/Projects/wijmo-prerender-aspnetcore/vendor/wijmo/wijmo.min.js:13:79205)```

This is probably due to wijmo making directly manipulating DOM elements, which does not conform to guidance from the Angular2 Universal team, which states:

>Don't use any of the browser types provided in the global namespace such as navigator or document