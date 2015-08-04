Meteor.removeRouteByName = function(listRouteName) {
  var arr = [];
   listRouteName.forEach(function(routeName, index){
    console.log(routeName, index)
     var routes = Router.routes;
    var route = routes[routeName];
    if (!route) {
      arr.push(false)
     return // Returns false if route is not found
    } 
else{
    // Remove route from Router
    delete routes[routeName];
    delete routes._byPath[route.path()];
    var routeIndex = routes.indexOf(route);
    if (routeIndex >= 0) routes.splice(routeIndex, 1);

    // Remove route handler from MiddleWareStack
    delete Router._stack._stack[routeName];
    Router._stack.length -= 1;
    arr.push(true)
    }
   });

    return arr; 
}


