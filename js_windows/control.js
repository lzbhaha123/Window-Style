class Application {
  constructor(img, tag,id) {
    this.img = img;
    this.tag = tag;
    this.id=id;
  }
}
function settingIndexZ(applications,target){
    for(var i =0;i<applications.length;i++){
      applications[i].tag.style.zIndex = i;
    }
    target.style.zIndex = 99;

}
function resumeWindow(i){
  if(i.style.display=="none"){
    i.style.display="block";
  }else{
    i.style.display="none";
  }
}
function addToolsbar(array,base,$scope){
        base.innerHTML = "";
        for(var i =0;i<array.length;i++){
            base.innerHTML += "<div onClick='resumeWindow("+array[i].id+")'><img src='"+array[i].img+"' /></div>";
          }
        /*
        base.innerHTML = "";
        for(var i =0;i<array.length;i++){
            var quickAccess = document.createElement("div");
            var icon = document.createElement("img");
            icon.src=array[i].img;
            base.appendChild(quickAccess);
            quickAccess.appendChild(icon );
            quickAccess.id=array[i].id;
            var resumeWindow = new CustomEvent('ResumeWindow',{
              detail:{ quickAccess }
            });
            quickAccess.addEventListener("click", function(e) {
              quickAccess.dispatchEvent(resumeWindow);
            },true);
            quickAccess.addEventListener("ResumeWindow",function(e){
              var desktop = document.getElementById("desktop");
              
              var accessList = desktop.childNodes;//getElementById(e.detail.id);
              for(var j = 0;j<accessList.length;j++){
                console.log(e.detail.quickAccess.id);
                
                if(accessList[j]['id']==e.detail.quickAccess.id){
                  var targetElement = accessList[j];
                  if(targetElement.style.display=="none"){
                    targetElement.style.display="block";
                  }else{
                    targetElement.style.display="none";
                  }
                  
                }
                
              }
              
          });
          } 
            */
        
        /*
        $scope.AppendHtml = function() {
            for(var i =0;i<array.length;i++){
                base.append('<img src="'+array[i].img+'" />'); 
            } 
        }
        $scope.AppendHtml();*/
    }
function RemoveArray(array,target){
        for(var i =0;i<array.length;i++){
            if(array[i].tag==target){
                array.splice(i, 1); 
                i--;
            }
        } 
    }