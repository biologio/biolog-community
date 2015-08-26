Template.menuComponent.helpers({

    getTemplateName: function() {
        return this.template.name;
    }
});


Template.post_item.events({
    'click .post': function (e, tpl) {
    	e.preventDefault();
    	if(e.target.nodeName == 'DIV'){
    	 console.log(this);
        
        postTitle = tpl.find('a.post-title').text.replace(/ /g, '-');
        Router.go('/posts/'+ this.wrapperId+'/'+ postTitle);	
    	}
    	else if(e.target.nodeName == 'A' && e.target.className.indexOf("post-title") != -1){
    		if(e.target.href.indexOf("out?url") != -1){
    		 link = tpl.find('a.post-title').href.split("=")[1];
        // link = link.substring(link.indexOf('.')+1)
         link = decodeURIComponent(link);

       		location.assign(link);
       		}
       		else{
       			postTitle = tpl.find('a.post-title').text.replace(/ /g, '-');
        		Router.go('/posts/'+ this.wrapperId+'/'+ postTitle);
       			
       		}
    	}
      else{
        //postTitle = tpl.find('a.post-title').text.replace(/ /g, '-');
        if(e.target.nodeName != 'A'){
        var link =  $(e.target).parent('a').attr('href');
        Router.go(link);
        return;
        }
            Router.go(e.target.href);
      }
       
    }
})